// part 1

let text = await Deno.readTextFile("input.txt");
let map = {"(": 1, ")": -1};
console.log(text.split("").map(it => map[it]).reduce((a,b) => a + b, 0));

// part 2

function findBasement(array) {
  let acc = 0;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    acc += element;
    if (acc == -1) {
      return i + 1;
    }
  }
  return -1;
}

console.log(findBasement(text.split("").map(it => map[it])))

// you could also do it with a regex, but JS doesn't support the ?1 syntax 

let reg = /^((\((|(?1))\))+)/;
// console.log(reg.exec(text)[0].length + 1);
