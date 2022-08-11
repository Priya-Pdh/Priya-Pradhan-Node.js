'use strict';

// TODO: Write the homework code in this file


let fs = require('fs');

let args = process.argv.slice(2);
let arg = args[0];

if (!fs.existsSync('file.txt')) {
  fs.writeFileSync('file.txt', JSON.stringify([]));
}

const data = fs.readFileSync('file.txt', 'utf-8');
let todoList = data ? JSON.parse(data) : [];

switch (arg) {
  case 'list': {
    console.log(JSON.stringify(todoList))
    break;
  }
  case 'add': {
    todoList.push(args[1])
    console.log(JSON.stringify(todoList))
    break;
  }
  case 'remove': {
    todoList.splice(args[1], 1)
    console.log(JSON.stringify(todoList))
    break;
  }
  case 'reset': {
    todoList = [];
    console.log(JSON.stringify(todoList))
    break;
  }
  
  default: {
    console.log('Helpful text');
    break;
    }
}
fs.writeFile('file.txt', JSON.stringify(todoList), function (err) {
  if (err) throw err;
  console.log('Done writing!');
});


