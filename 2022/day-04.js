//Console log solucija
//https://adventofcode.com/2022/day/4/input

const input = document.querySelector("body > pre").innerHTML.trim();

function solve1(input) {
  let count = 0;
  for (const line of input.split('\n')) {
    const [[a1, b1], [a2, b2]] = line
      .split(',')
      .map((elf) => elf.split('-').map(Number));
    if ((a1 <= a2 && b1 >= b2) || (a1 >= a2 && b1 <= b2)) {
      count++;
    }
  }
  console.log(count);
}
solve1(input);

function solve2(input) {
  let count = 0;
  for (const line of input.split('\n')) {
    const [[a1, b1], [a2, b2]] = line
      .split(',')
      .map((elf) => elf.split('-').map(Number));
    if ((a1 >= a2 && a1 <= b2) || (a2 >= a1 && a2 <= b1)) {
      count++;
    }
  }
  console.log(count);
}
solve2(input);
