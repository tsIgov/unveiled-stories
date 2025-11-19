import sharp from "sharp";
import fs from "fs";
import path from "path";
import { v4 as uuid } from "uuid";

const inputRoot = "_unprocessed-images";
const outputRoot = "src/data/images";

if (!fs.existsSync(inputRoot))
    fs.mkdirSync(inputRoot, { recursive: true });

const photos = fs.readdirSync(inputRoot, {
    recursive: true,
    withFileTypes: true
});


for (const photo of photos) {
    if (photo.isDirectory()) continue;

    const ext = path.extname(photo.name).toLowerCase();
    const base = path.basename(photo.name, ext);

    const fullPath = path.join(photo.parentPath, photo.name);

    const relativeDir = path.relative(inputRoot, photo.parentPath);

    const outputDir = path.join(outputRoot, relativeDir);
    const outputPath = path.join(outputDir, `${base}.jpg`);

    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    try {
        await sharp(fullPath)
            .jpeg({ quality: 80})
            .withMetadata({
				exif: {
					IFD0: {
						UserComment: uuid()
					}
				}
			})
            .toFile(outputPath);

		console.log(`✔ Converted: ${fullPath} → ${outputPath}`);
    } catch (err) {
        console.error(`✖ Error converting ${fullPath}`, err);
        continue;
    }
}
