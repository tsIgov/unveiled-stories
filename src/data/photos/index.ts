
import { default as data } from "./data"

export interface Photo
{
    src: string,
	orientation: "landscape" | "portrait"
}

export const photos = data;
