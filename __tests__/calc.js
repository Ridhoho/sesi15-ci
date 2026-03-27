// __tests__/calc.js — unit test dengan Jest
const { add, sub, mul, div } = require('../calc')

describe('Calculator Tests', () => {

  // ── add() ──
  describe('add()', () => {

    test('the sum of 1 and 3 is 4', () => {
      expect(add(1, 3)).toBe(4)
    })

    test('the sum of 15 and "31" is 46', () => {
      // string angka tetap bisa dijumlahkan
      expect(add(15, '31')).toBe(46)
    })

    test('the sum of 3 and "name" is false', () => {
      // bukan angka → false
      expect(add(3, 'name')).toBe(false)
    })

    test('sum decimal with integer 3.14 + 10 = 13.14', () => {
      // ada desimal → pakai parseFloat
      expect(add(3.14, 10)).toBeCloseTo(13.14)
    })

  })

  // ── sub() ──
  describe('sub()', () => {
    test('substract 5 and 3 is 2', () => {
      expect(sub(5, 3)).toBe(2)
    })
  })

  // ── div() ──
  describe('div()', () => {
    test('the division of 6 and 2 is 3', () => {
      expect(div(6, 2)).toBe(3)
    })
  })

  // ── mul() ──
  describe('mul()', () => {
    test('the multiplication of 12 and 12 is 144', () => {
      expect(mul(12, 12)).toBe(144)
    })
  })

})