// part 1

let text = await Deno.readTextFile("input.txt");

let dimensions = text.split("\n").map(line => line.split("x").map(it => it * 1).sort((a, b) => a - b));

console.log(dimensions.map(dim => 2 * dim[0] * dim[1] + 2 * dim[0] * dim[2] + 2 * dim[1] * dim[2] + dim[0] * dim[1]).reduce((a,b) => a + b, 0));

// part 2

console.log(dimensions.map(dim => 2 * dim[0] + 2 * dim[1] + dim[0] * dim[1] * dim[2]).reduce((a, b) => a + b, 0))