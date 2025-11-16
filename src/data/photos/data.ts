import { type Photo } from "."

const photos = {
  "photoshoots/electric-romeo/backgrounds/landscape.avif": {
    "orientation": "landscape",
    "src": "photoshoots/electric-romeo/backgrounds/landscape.avif"
  },
  "photoshoots/electric-romeo/backgrounds/portrait.avif": {
    "orientation": "portrait",
    "src": "photoshoots/electric-romeo/backgrounds/portrait.avif"
  },
  "photoshoots/electric-romeo/gallery/01.avif": {
    "orientation": "portrait",
    "src": "photoshoots/electric-romeo/gallery/01.avif"
  },
  "photoshoots/electric-romeo/gallery/02.avif": {
    "orientation": "portrait",
    "src": "photoshoots/electric-romeo/gallery/02.avif"
  },
  "photoshoots/electric-romeo/gallery/03.avif": {
    "orientation": "portrait",
    "src": "photoshoots/electric-romeo/gallery/03.avif"
  },
  "photoshoots/electric-romeo/gallery/04.avif": {
    "orientation": "landscape",
    "src": "photoshoots/electric-romeo/gallery/04.avif"
  },
  "photoshoots/electric-romeo/gallery/05.avif": {
    "orientation": "landscape",
    "src": "photoshoots/electric-romeo/gallery/05.avif"
  },
  "photoshoots/electric-romeo/gallery/06.avif": {
    "orientation": "portrait",
    "src": "photoshoots/electric-romeo/gallery/06.avif"
  },
  "photoshoots/electric-romeo/preview/center.avif": {
    "orientation": "portrait",
    "src": "photoshoots/electric-romeo/preview/center.avif"
  },
  "photoshoots/electric-romeo/preview/left.avif": {
    "orientation": "portrait",
    "src": "photoshoots/electric-romeo/preview/left.avif"
  },
  "photoshoots/electric-romeo/preview/right.avif": {
    "orientation": "portrait",
    "src": "photoshoots/electric-romeo/preview/right.avif"
  }
};

export default photos as Record<string, Photo>;
