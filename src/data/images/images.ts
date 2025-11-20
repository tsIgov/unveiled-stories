export const imageModules = import.meta.glob('./**/*.{jpg,jpeg,png}', {
	eager: true,
	query: {
		enhanced: true,
		w: '800;400',
	}
});


