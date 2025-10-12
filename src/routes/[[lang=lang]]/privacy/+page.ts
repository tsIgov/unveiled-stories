import type { PageLoad } from './$types';
import { privacy } from 'data/metadata'

export const load: PageLoad = (() => {
	return {
		transparentNavigation: false,
		metadata: privacy
	};
});
