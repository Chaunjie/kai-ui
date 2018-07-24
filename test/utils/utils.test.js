import Utils from '../../src/utils/utils.js'

test('test utils plus', () => {
	expect(Utils.doPlus(101, 102)).toBe(203);
});