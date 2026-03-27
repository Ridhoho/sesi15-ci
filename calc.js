// calc.js — modul kalkulator utama

const add = (a, b) => {
  // Jika salah satu bukan angka → return false
  if (isNaN(a) || isNaN(b)) return false

  // Jika salah satu bukan integer → gunakan parseFloat
  if (Number.isInteger(a) !== true || Number.isInteger(b) !== true) {
    return parseFloat(a) + parseFloat(b)
  }

  // Keduanya integer → parseInt
  return parseInt(a) + parseInt(b)
}

const print = (text) => { console.log(text) }

const sub = (a, b) => a - b
const mul = (a, b) => a * b
const div = (a, b) => a / b

module.exports = { add, print, sub, mul, div }