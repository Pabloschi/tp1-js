// ejercicio 1 par e impar //

function e1(num) {
  if (num % 2 === 0) {
    return console.log(`E1: El número ${num} es par`);
  } else console.log(`E1: El número ${num} es impar`);
}
e1(4);
e1(7);

// ejercicio 2 mayor o menor //

function e2(numUno, numDos) {
  if (numUno === numDos) {
    return console.log(`e2: son iguales`);
  } else if (numUno > numDos) {
    return console.log(`e2: El numero ${numUno} es mayor que ${numDos}`);
  } else {
    return console.log(`e2: El numero ${numUno} es menor que ${numDos}`);
  }
}

e2(43, 50);
e2(704, 400);

// ejercicio 3 multiplo de 5 //

function e3(num) {
  if (num % 5 === 0) {
    return console.log(`e3: el numero ${num} es multiplo de 5`);
  } else return console.log(`e3: el numero ${num} no es multiplo de 5`);
}

e3(40);
e3(478);

// ejercicio 4 numeros desde 0 //

function e4(num) {
  for (let i = 0; i <= num; i++) {
    console.log(i);
  }
}

e4(4);

// ejerciocio 5 //

function e5(palabra, num) {
  for (let i = 1; i <= num; i++) {
    console.log(palabra);
  }
}

e5(`palabra`, 3);

//ejercicio 6 array con numeros  //

function e6(array) {
  console.log(array);
}
let array = [5, 6, 1, 9];
e6(array);

// ejercio 8 //

function e8(num, ...array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i] * num);
  }
}

array = [1, 10, 20, 30, 40];
e8(2, ...array);
