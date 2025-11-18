import Image1 from 'data/photos/photoshoots/kissed-by-the-sun/backgrounds/landscape.avif?enhanced';
import Image2 from 'data/photos/photoshoots/kissed-by-the-sun/backgrounds/portrait.avif?enhanced';
import Image3 from 'data/photos/photoshoots/kissed-by-the-sun/gallery/01.avif?enhanced';
import Image4 from 'data/photos/photoshoots/kissed-by-the-sun/gallery/02.avif?enhanced';
import Image5 from 'data/photos/photoshoots/kissed-by-the-sun/gallery/03.avif?enhanced';
import Image6 from 'data/photos/photoshoots/kissed-by-the-sun/preview/left.avif?enhanced';
import Image7 from 'data/photos/photoshoots/kissed-by-the-sun/preview/center.avif?enhanced';
import Image8 from 'data/photos/photoshoots/kissed-by-the-sun/preview/right.avif?enhanced';

import aImage1 from 'data/photos/photoshoots/electric-romeo/backgrounds/landscape.avif?enhanced';
import aImage2 from 'data/photos/photoshoots/electric-romeo/backgrounds/portrait.avif?enhanced';
import aImage3 from 'data/photos/photoshoots/electric-romeo/gallery/01.avif?enhanced';
import aImage4 from 'data/photos/photoshoots/electric-romeo/gallery/02.avif?enhanced';
import aImage5 from 'data/photos/photoshoots/electric-romeo/gallery/03.avif?enhanced';
import aImage6 from 'data/photos/photoshoots/electric-romeo/preview/left.avif?enhanced';
import aImage7 from 'data/photos/photoshoots/electric-romeo/preview/center.avif?enhanced';
import aImage8 from 'data/photos/photoshoots/electric-romeo/preview/right.avif?enhanced';
import type { Photo } from '.';

const photos = {
	"photoshoots/kissed-by-the-sun/backgrounds/landscape.avif": { src: Image1, orientation: "landscape"} as Photo,
	"photoshoots/kissed-by-the-sun/backgrounds/portrait.avif": { src: Image2, orientation: "portrait"} as Photo,
	"photoshoots/kissed-by-the-sun/gallery/01.avif": { src: Image3, orientation: "portrait"} as Photo,
	"photoshoots/kissed-by-the-sun/gallery/02.avif": { src: Image4, orientation: "portrait"} as Photo,
	"photoshoots/kissed-by-the-sun/gallery/03.avif": { src: Image5, orientation: "portrait"} as Photo,
	"photoshoots/kissed-by-the-sun/preview/left.avif": { src: Image6, orientation: "portrait"} as Photo,
	"photoshoots/kissed-by-the-sun/preview/center.avif": { src: Image7, orientation: "portrait"} as Photo,
	"photoshoots/kissed-by-the-sun/preview/right.avif": { src: Image8, orientation: "portrait"} as Photo,

	"photoshoots/electric-romeo/backgrounds/landscape.avif": { src: aImage1, orientation: "landscape"} as Photo,
	"photoshoots/electric-romeo/backgrounds/portrait.avif": { src: aImage2, orientation: "portrait"} as Photo,
	"photoshoots/electric-romeo/gallery/01.avif": { src: aImage3, orientation: "portrait"} as Photo,
	"photoshoots/electric-romeo/gallery/02.avif": { src: aImage4, orientation: "portrait"} as Photo,
	"photoshoots/electric-romeo/gallery/03.avif": { src: aImage5, orientation: "portrait"} as Photo,
	"photoshoots/electric-romeo/preview/left.avif": { src: aImage6, orientation: "portrait"} as Photo,
	"photoshoots/electric-romeo/preview/center.avif": { src: aImage7, orientation: "portrait"} as Photo,
	"photoshoots/electric-romeo/preview/right.avif": { src: aImage8, orientation: "portrait"} as Photo,
};

export default photos as Record<string, Photo>;

