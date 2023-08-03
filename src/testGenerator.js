function* generatorFunction() {
  for (let i = 0; i < 5; i++) {
    yield i;
  }
}

const iteration = generatorFunction();

console.log(iteration.next());
console.log(iteration.next());
console.log(iteration.next());
console.log(iteration.next());
console.log(iteration.next());
console.log(iteration.next());
