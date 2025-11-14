import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputRoot = "raw-images";
const outputRoot = "static";

if (!fs.existsSync(inputRoot))
	fs.mkdirSync(inputRoot, { recursive: true });

fs.readdirSync(inputRoot, { recursive: true, withFileTypes: true} ).forEach(entry => {

	if(entry.isDirectory()) return;

	const ext = path.extname(entry.name).toLowerCase();
	const base = path.basename(entry.name, ext);
	const fullPath = path.join(entry.parentPath, entry.name);
	const relativeDir = path.relative(inputRoot, entry.parentPath);
	const outputDir = path.join(outputRoot, relativeDir);
    const outputPath = path.join(outputDir, `${base}.avif`);

	if (!fs.existsSync(outputDir)) {
		fs.mkdirSync(outputDir, { recursive: true });
	}

    sharp(fullPath)
        .avif({ quality: 50, speed: 0 })
        .withMetadata(false)
        .toFile(outputPath)
        .then(() => console.log(`✔ Converted: ${fullPath} → ${outputPath}`))
        .catch(err => console.error(`✖ Error converting ${fullPath}`, err));
});
