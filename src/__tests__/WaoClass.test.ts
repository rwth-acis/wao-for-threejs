import { Setup } from '../index';
test('My Setup', () => {
  expect(Setup('Lukas')).toBe('WAO says hello to Lukas');
});