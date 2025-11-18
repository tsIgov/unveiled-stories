
import { default as metadata } from "./metadata"
import type { Picture } from 'vite-imagetools';

export interface Photo
{
    src: Picture,
	orientation: "landscape" | "portrait"
}

export const photos = metadata;
