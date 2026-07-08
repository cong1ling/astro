const forwardablePointerTypes = new Set(['', 'mouse', 'pen', 'touch']);

export function shouldForwardFluidPointer(pointerType = '') {
	return forwardablePointerTypes.has(pointerType);
}

export function shouldSettleFluidPointer(lastInteractionAt, now, idleDelay) {
	return lastInteractionAt > 0 && now - lastInteractionAt >= idleDelay;
}

export function getFluidPointerOffsets(event, rect) {
	if (
		event.clientX < rect.left ||
		event.clientX > rect.right ||
		event.clientY < rect.top ||
		event.clientY > rect.bottom
	) {
		return null;
	}

	return {
		offsetX: event.clientX - rect.left,
		offsetY: event.clientY - rect.top
	};
}

export function createFluidMouseEvent(eventName, sourceEvent, offsets) {
	const fluidEvent = new MouseEvent(eventName, {
		bubbles: true,
		cancelable: true,
		clientX: sourceEvent.clientX,
		clientY: sourceEvent.clientY,
		screenX: sourceEvent.screenX,
		screenY: sourceEvent.screenY,
		button: sourceEvent.button,
		buttons: sourceEvent.buttons
	});

	Object.defineProperty(fluidEvent, 'offsetX', { value: offsets.offsetX });
	Object.defineProperty(fluidEvent, 'offsetY', { value: offsets.offsetY });

	return fluidEvent;
}

export function dispatchFluidPointer(canvas, sourceEvent, eventName) {
	const pointerType = sourceEvent.pointerType || '';
	if (!shouldForwardFluidPointer(pointerType)) return false;

	const offsets = getFluidPointerOffsets(sourceEvent, canvas.getBoundingClientRect());
	if (!offsets) return false;

	canvas.dispatchEvent(createFluidMouseEvent(eventName, sourceEvent, offsets));
	return true;
}
