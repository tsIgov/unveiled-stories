export const fit = (
	node: HTMLElement,
	{ min_size = 10, max_size = 100 } = { min_size: 10, max_size: 100 }
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
	for (let i = min_size + 1; i <= max_size; i++) {
		element.style.fontSize = `${i}px`
		let overflow = is_overflow(parent)
		if (overflow) {
			element.style.fontSize = `${i - 1}px`;
			break;
		}
	}
}

export const parent_style = `display: inline-block; width: 100%; height: 100%;`
