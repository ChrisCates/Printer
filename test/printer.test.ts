import { Print } from '../src/printer'

test('Printer - Basic sanity check', () => {
  expect(typeof Print.parse).toBe('function')
})
