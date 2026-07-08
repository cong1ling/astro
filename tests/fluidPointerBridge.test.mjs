import assert from 'node:assert/strict';
import test from 'node:test';

import {
	getFluidPointerOffsets,
	shouldSettleFluidPointer,
	shouldForwardFluidPointer
} from '../src/lib/fluidPointerBridge.js';

const rect = {
	left: 100,
	top: 200,
	right: 500,
	bottom: 520
};

test('converts an in-bounds pointer into canvas-relative offsets', () => {
	const offsets = getFluidPointerOffsets({ clientX: 260, clientY: 340 }, rect);

	assert.deepEqual(offsets, { offsetX: 160, offsetY: 140 });
});

test('does not forward pointers outside the canvas bounds', () => {
	assert.equal(getFluidPointerOffsets({ clientX: 90, clientY: 340 }, rect), null);
	assert.equal(getFluidPointerOffsets({ clientX: 260, clientY: 540 }, rect), null);
});

test('forwards mouse, pen, and touch pointers for interactive fluid input', () => {
	assert.equal(shouldForwardFluidPointer('mouse'), true);
	assert.equal(shouldForwardFluidPointer('pen'), true);
	assert.equal(shouldForwardFluidPointer('touch'), true);
	assert.equal(shouldForwardFluidPointer(''), true);
	assert.equal(shouldForwardFluidPointer('unknown'), false);
});

test('settles only after the pointer has been idle long enough', () => {
	assert.equal(shouldSettleFluidPointer(1000, 1800, 1200), false);
	assert.equal(shouldSettleFluidPointer(1000, 2300, 1200), true);
	assert.equal(shouldSettleFluidPointer(0, 2300, 1200), false);
});
