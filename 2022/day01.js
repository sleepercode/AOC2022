//Console log solucija
//https://adventofcode.com/2022/day/1/input

const input = document.querySelector("body > pre").innerHTML.trim();

function solve(input) {
  const elves = input
    .split('\n\n')
    .map((elf) =>
      elf
        .split('\n')
        .map(Number)
        .reduce((acc, n) => acc + n)
    )
    .sort((a, b) => b - a);
  console.log(elves[0]);
  console.log(elves.slice(0, 3).reduce((acc, n) => acc + n));
}
solve(input);
