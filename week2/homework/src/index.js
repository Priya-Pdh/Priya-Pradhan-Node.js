'use strict';

// TODO: Write the homework code in this file

let fs = require('fs');

let arg = process.argv.slice(2);
let args = process.argv.slice(3);

fs.appendFile('list.txt', `${args.join(' ')}\n`, function (err) {
  if (err) throw err;
  console.log('Added new item!');
});

fs.writeFile('file.txt', 'To-do-List', function (err, data) {
  let toDoList = data ? JSON.parse(data) : [];
  if (err) throw err;
  console.log('Done writing!');
});

if (!arg || arg == 'help') {
  console.log("I can Help");
}

fs.readFile('list.txt', function (err, data) {
  if (err) throw err;
  console.log("done reading");
})

let todoList = data ? JSON.parse(data) : [];

switch (arg) {
  case 'list': {
    console.log(JSON.stringify(toDoList))
  }
  case 'add': {
    todoList.push(args[1])
    console.log(JSON.stringify(todoList))
    break;
  }
  case 'remove': {
    todoList.splice(arg[1], 1)
    fs.writeFileSync('list.txt', JSON.stringify(todoList));
    console.log(JSON.stringify(todoList))
    break;
  }
  case 'reset': {
    todoList = [];
    fs.writeFileSync(list.txt, JSON.stringify(todoList));
    console.log(JSON.stringify(todoList))
    break;
  }
  
  default: {
    console.log('Helpful text');
    }
}
