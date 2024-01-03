// part 1

let text = await Deno.readTextFile("input.txt");

let map = {
  ">": {x: 1, y: 0},
  "<": {x: -1, y: 0},
  "v": {x: 0, y: 1},
  "^": {x: 0, y: -1}
};

function deliverPresents(numberOfSantas) {
  let instructions = text.split("");
  let visited = new Set();
  visited.add(`0,0`);
  
  let santas = [];
  for (let i=0; i<numberOfSantas; i++) {
    santas.push({x: 0, y:0});
  }
  
  for (let i = 0; i < instructions.length; i++) {
    const santa = santas[i % numberOfSantas];
    const instruction = map[instructions[i]];
    santa.x += instruction.x;
    santa.y += instruction.y;
    visited.add(`${santa.x},${santa.y}`);
  }
  return visited.size;
}

console.log(deliverPresents(1))

// part 2
console.log(deliverPresents(2))
