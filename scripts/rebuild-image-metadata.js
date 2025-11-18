import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputRoot = "src/data/images";

let metadata = [];

const assets = fs.readdirSync(inputRoot, {
    recursive: true,
    withFileTypes: true
});

for (let i = 0; i < assets.length; i++) {

	const photo = assets[i];
    if (photo.isDirectory()) continue;

	const ext = path.extname(photo.name).toLowerCase();
	if (ext != ".jpg") 	continue;

	const fullPath = path.join(photo.parentPath, photo.name);
	const relativePath = path.relative(inputRoot, fullPath);

	const m = await sharp(fullPath).metadata();
	const orientation = m.width > m.height ? "landscape" : "portrait";

	metadata.push({
		index: i,
		orientation,
		src: path.join("data/images",relativePath),
		key: relativePath.substring(0, relativePath.length - ".jpg".length)
	});
}

let sb = [ "import type { Photo } from '.';", "const photos = {" ];
metadata.forEach(image => {
	sb.unshift(`import img${image.index} from '${image.src}?enhanced';`);
	sb.push(`\t"${image.key}": { src: img${image.index}, orientation: "${image.orientation}"} as Photo,`);
});

sb.push("}")
sb.push("export default photos as Record<string, Photo>;");

const data = sb.join("\n");

fs.writeFile(path.join(inputRoot, 'metadata.ts'), data, 'utf8', (err) => {
   if (err) throw err;
   console.log('Metadata written successfully!');
});
