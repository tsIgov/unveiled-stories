
import { default as data } from "./newdata"
import type { Picture } from 'vite-imagetools';


export interface Photo
{
    src: Picture,
	orientation: "landscape" | "portrait"
}

export const photos = data;
