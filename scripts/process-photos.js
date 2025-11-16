import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputRoot = "_unprocessed-photos";
const outputRoot = "static";

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
    const outputPath = path.join(outputDir, `${base}.avif`);

    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    try {
        await sharp(fullPath)
            .avif({ quality: 50, speed: 0 })
            .withMetadata(false)
            .toFile(outputPath);

		console.log(`✔ Converted: ${fullPath} → ${outputPath}`);
		fs.rmSync(fullPath);
    } catch (err) {
        console.error(`✖ Error converting ${fullPath}`, err);
        continue;
    }

}

let metadata = {};

const assets = fs.readdirSync(outputRoot, {
    recursive: true,
    withFileTypes: true
});

for (const photo of assets) {
    const ext = path.extname(photo.name).toLowerCase();
    const fullPath = path.join(photo.parentPath, photo.name);
    const relativePath = path.relative(outputRoot, fullPath);

	if (ext != ".avif") continue;

	const m = await sharp(fullPath).metadata();
	const orientation = m.width > m.height ? "landscape" : "portrait";
	metadata[relativePath] = { orientation, src: relativePath };
}

const data = `import { type Photo} from "."\n\nconst photos = ${JSON.stringify(metadata, null, 2)};\n\nexport default photos as Record<string, Photo>;`

fs.writeFile('src/data/photos/data.ts', data, 'utf8', (err) => {
  if (err) throw err;
  console.log('Metadata written successfully!');
});
