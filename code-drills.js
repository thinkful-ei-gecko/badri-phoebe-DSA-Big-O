// let n = 0;
function TOH (num, source, dest, temp) {
  // n++;
  if (num === 1) {
    console.log(`${source} -> ${dest}`)
    return;
  }

  TOH(num - 1, source, temp, dest)
  console.log(`${source} -> ${dest}`)
  TOH(num - 1, temp, dest, source)
  // console.log(n)
}
TOH (3, 'A', 'C', 'B')

function countingSheep (numSheep) {
  for (let i = numSheep; i > 0; i--) {
    console.log(`${i}: Another sheep jumps over the fence`)
  }
  console.log('All sheep jumped over the fence')
}
countingSheep(4);

function powerCalculator (base, exp) {
  let result = base;
  for (i = 1; i < exp; i++) {
    result *= base
  }
  console.log(result)
}
powerCalculator(2, 3);

function reverseString(str) {
  if (str.length < 2) {
    return str;
  }
  let revStr = '';
  for (i = 1; i <= str.length; i++) {
    revStr += str[str.length-i]
  }
  console.log(revStr);
}
reverseString('hello');

