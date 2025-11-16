import { type Photo} from "."

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
  },
  "photoshoots/en-plein-air/backgrounds/landscape.avif": {
    "orientation": "landscape",
    "src": "photoshoots/en-plein-air/backgrounds/landscape.avif"
  },
  "photoshoots/en-plein-air/backgrounds/portrait.avif": {
    "orientation": "portrait",
    "src": "photoshoots/en-plein-air/backgrounds/portrait.avif"
  },
  "photoshoots/en-plein-air/gallery/01.avif": {
    "orientation": "portrait",
    "src": "photoshoots/en-plein-air/gallery/01.avif"
  },
  "photoshoots/en-plein-air/gallery/02.avif": {
    "orientation": "portrait",
    "src": "photoshoots/en-plein-air/gallery/02.avif"
  },
  "photoshoots/en-plein-air/gallery/03.avif": {
    "orientation": "landscape",
    "src": "photoshoots/en-plein-air/gallery/03.avif"
  },
  "photoshoots/en-plein-air/gallery/04.avif": {
    "orientation": "landscape",
    "src": "photoshoots/en-plein-air/gallery/04.avif"
  },
  "photoshoots/en-plein-air/gallery/05.avif": {
    "orientation": "landscape",
    "src": "photoshoots/en-plein-air/gallery/05.avif"
  },
  "photoshoots/en-plein-air/gallery/06.avif": {
    "orientation": "portrait",
    "src": "photoshoots/en-plein-air/gallery/06.avif"
  },
  "photoshoots/en-plein-air/preview/center.avif": {
    "orientation": "portrait",
    "src": "photoshoots/en-plein-air/preview/center.avif"
  },
  "photoshoots/en-plein-air/preview/left.avif": {
    "orientation": "portrait",
    "src": "photoshoots/en-plein-air/preview/left.avif"
  },
  "photoshoots/en-plein-air/preview/right.avif": {
    "orientation": "portrait",
    "src": "photoshoots/en-plein-air/preview/right.avif"
  },
  "photoshoots/kissed-by-the-sun/backgrounds/landscape.avif": {
    "orientation": "landscape",
    "src": "photoshoots/kissed-by-the-sun/backgrounds/landscape.avif"
  },
  "photoshoots/kissed-by-the-sun/backgrounds/portrait.avif": {
    "orientation": "portrait",
    "src": "photoshoots/kissed-by-the-sun/backgrounds/portrait.avif"
  },
  "photoshoots/kissed-by-the-sun/gallery/01.avif": {
    "orientation": "portrait",
    "src": "photoshoots/kissed-by-the-sun/gallery/01.avif"
  },
  "photoshoots/kissed-by-the-sun/gallery/02.avif": {
    "orientation": "portrait",
    "src": "photoshoots/kissed-by-the-sun/gallery/02.avif"
  },
  "photoshoots/kissed-by-the-sun/gallery/03.avif": {
    "orientation": "portrait",
    "src": "photoshoots/kissed-by-the-sun/gallery/03.avif"
  },
  "photoshoots/kissed-by-the-sun/preview/center.avif": {
    "orientation": "portrait",
    "src": "photoshoots/kissed-by-the-sun/preview/center.avif"
  },
  "photoshoots/kissed-by-the-sun/preview/left.avif": {
    "orientation": "portrait",
    "src": "photoshoots/kissed-by-the-sun/preview/left.avif"
  },
  "photoshoots/kissed-by-the-sun/preview/right.avif": {
    "orientation": "portrait",
    "src": "photoshoots/kissed-by-the-sun/preview/right.avif"
  },
  "photoshoots/nocturnal-glow/backgrounds/landscape.avif": {
    "orientation": "landscape",
    "src": "photoshoots/nocturnal-glow/backgrounds/landscape.avif"
  },
  "photoshoots/nocturnal-glow/backgrounds/portrait.avif": {
    "orientation": "portrait",
    "src": "photoshoots/nocturnal-glow/backgrounds/portrait.avif"
  },
  "photoshoots/nocturnal-glow/gallery/01.avif": {
    "orientation": "portrait",
    "src": "photoshoots/nocturnal-glow/gallery/01.avif"
  },
  "photoshoots/nocturnal-glow/gallery/02.avif": {
    "orientation": "portrait",
    "src": "photoshoots/nocturnal-glow/gallery/02.avif"
  },
  "photoshoots/nocturnal-glow/gallery/03.avif": {
    "orientation": "portrait",
    "src": "photoshoots/nocturnal-glow/gallery/03.avif"
  },
  "photoshoots/nocturnal-glow/gallery/04.avif": {
    "orientation": "portrait",
    "src": "photoshoots/nocturnal-glow/gallery/04.avif"
  },
  "photoshoots/nocturnal-glow/gallery/05.avif": {
    "orientation": "landscape",
    "src": "photoshoots/nocturnal-glow/gallery/05.avif"
  },
  "photoshoots/nocturnal-glow/gallery/P1049665.avif": {
    "orientation": "landscape",
    "src": "photoshoots/nocturnal-glow/gallery/P1049665.avif"
  },
  "photoshoots/nocturnal-glow/preview/center.avif": {
    "orientation": "portrait",
    "src": "photoshoots/nocturnal-glow/preview/center.avif"
  },
  "photoshoots/nocturnal-glow/preview/left.avif": {
    "orientation": "portrait",
    "src": "photoshoots/nocturnal-glow/preview/left.avif"
  },
  "photoshoots/nocturnal-glow/preview/right.avif": {
    "orientation": "portrait",
    "src": "photoshoots/nocturnal-glow/preview/right.avif"
  },
  "photoshoots/the-court/backgrounds/landscape.avif": {
    "orientation": "portrait",
    "src": "photoshoots/the-court/backgrounds/landscape.avif"
  },
  "photoshoots/the-court/backgrounds/portrait.avif": {
    "orientation": "portrait",
    "src": "photoshoots/the-court/backgrounds/portrait.avif"
  },
  "photoshoots/the-court/gallery/01.avif": {
    "orientation": "portrait",
    "src": "photoshoots/the-court/gallery/01.avif"
  },
  "photoshoots/the-court/gallery/02.avif": {
    "orientation": "landscape",
    "src": "photoshoots/the-court/gallery/02.avif"
  },
  "photoshoots/the-court/gallery/03.avif": {
    "orientation": "portrait",
    "src": "photoshoots/the-court/gallery/03.avif"
  },
  "photoshoots/the-court/gallery/04.avif": {
    "orientation": "portrait",
    "src": "photoshoots/the-court/gallery/04.avif"
  },
  "photoshoots/the-court/gallery/05.avif": {
    "orientation": "portrait",
    "src": "photoshoots/the-court/gallery/05.avif"
  },
  "photoshoots/the-court/preview/center.avif": {
    "orientation": "portrait",
    "src": "photoshoots/the-court/preview/center.avif"
  },
  "photoshoots/the-court/preview/left.avif": {
    "orientation": "portrait",
    "src": "photoshoots/the-court/preview/left.avif"
  },
  "photoshoots/the-court/preview/right.avif": {
    "orientation": "portrait",
    "src": "photoshoots/the-court/preview/right.avif"
  },
  "photoshoots/the-hunt/backgrounds/landscape.avif": {
    "orientation": "landscape",
    "src": "photoshoots/the-hunt/backgrounds/landscape.avif"
  },
  "photoshoots/the-hunt/backgrounds/portrait.avif": {
    "orientation": "portrait",
    "src": "photoshoots/the-hunt/backgrounds/portrait.avif"
  },
  "photoshoots/the-hunt/gallery/01.avif": {
    "orientation": "landscape",
    "src": "photoshoots/the-hunt/gallery/01.avif"
  },
  "photoshoots/the-hunt/gallery/02.avif": {
    "orientation": "landscape",
    "src": "photoshoots/the-hunt/gallery/02.avif"
  },
  "photoshoots/the-hunt/gallery/03.avif": {
    "orientation": "portrait",
    "src": "photoshoots/the-hunt/gallery/03.avif"
  },
  "photoshoots/the-hunt/gallery/04.avif": {
    "orientation": "landscape",
    "src": "photoshoots/the-hunt/gallery/04.avif"
  },
  "photoshoots/the-hunt/gallery/05.avif": {
    "orientation": "portrait",
    "src": "photoshoots/the-hunt/gallery/05.avif"
  },
  "photoshoots/the-hunt/gallery/06.avif": {
    "orientation": "portrait",
    "src": "photoshoots/the-hunt/gallery/06.avif"
  },
  "photoshoots/the-hunt/preview/center.avif": {
    "orientation": "portrait",
    "src": "photoshoots/the-hunt/preview/center.avif"
  },
  "photoshoots/the-hunt/preview/left.avif": {
    "orientation": "portrait",
    "src": "photoshoots/the-hunt/preview/left.avif"
  },
  "photoshoots/the-hunt/preview/right.avif": {
    "orientation": "portrait",
    "src": "photoshoots/the-hunt/preview/right.avif"
  }
};

export default photos as Record<string, Photo>;