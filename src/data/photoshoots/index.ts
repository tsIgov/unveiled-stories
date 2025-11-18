import { type Photoshoot } from './photoshoot';

import theHunt from "./the-hunt";
import theCourt from "./the-court";
import nocturnalGlow from "./nocturnal-glow";
import electricRomeo from "./electric-romeo";
import enPleinAir from "./en-plein-air";
import kissedByTheSun from "./kissed-by-the-sun";

export type { Photoshoot };

export const photoshoots : Photoshoot[] = [
	kissedByTheSun,
	// theHunt,
	// nocturnalGlow,
	// enPleinAir,
	electricRomeo,
	// theCourt
]

export const galleryEnabled : boolean = true;
