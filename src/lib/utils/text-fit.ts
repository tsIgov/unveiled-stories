export const fit = (
	node: HTMLElement,
	{ min_size = 0.625, max_size = 1 } = { min_size: 0.625, max_size: 1 }
): { destroy: () => void } => {
	const on_resize = (): void => {
		if (node.parentElement) {
			resize_text(node, node.parentElement, min_size, max_size);
		}
	}

	const resize_observer = new ResizeObserver(on_resize);
	resize_observer.observe(node?.parentElement as HTMLElement);

	return {
		destroy(): void {
			resize_observer.disconnect();
		},
	}
}

function is_overflow({
	clientWidth,
	clientHeight,
	scrollWidth,
	scrollHeight,
}: HTMLElement): boolean {
	return scrollWidth > clientWidth || scrollHeight > clientHeight;
}

function resize_text(
	element: HTMLElement,
	parent: HTMLElement,
	min_size: number,
	max_size: number
): void {
	const step = 0.0625;
	for (let i = min_size + step; i <= max_size; i += step) {
		element.style.fontSize = `${i}rem`
		let overflow = is_overflow(parent)
		if (overflow) {
			element.style.fontSize = `${i - step}rem`;
			break;
		}
	}
}
