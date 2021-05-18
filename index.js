function receivesAFunction(callback) {
  callback();
}

function sayHi() {
  console.log("hi");
}

function returnsANamedFunction() {
  sayHi;
}