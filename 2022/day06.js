//Console log solucija
//https://adventofcode.com/2022/day/6/input

const input = document.querySelector("body > pre").innerHTML.trim();

function solve(input, part) {
  const n = part === 2 ? 14 : 4;
  for (let i = 0; i < input.length; i++) {
    if (new Set(input.substring(i, i + n)).size === n) {
      console.log(i + n);
      break;
    }
  }
}
solve(input, 1);
solve(input, 2);
Footer
© 2022 GitHub, Inc.
Footer navigation
Term
