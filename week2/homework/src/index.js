'use strict';

// TODO: Write the homework code in this file

'use strict'

let fs = require('fs');

let args = process.argv.slice(2);
let arg = args[0];

if (!arg || arg == 'help') {
  console.log(`Usage: node index.js [options]
  HackYourFuture Node.js Week 2 - Lecture To-Do App
  Options:
    list          read all to-dos
    add           add to-do
    update        updates item on specific location
    remove        removes specific entry at specific location
    reset         resets file with removing all previous data
    help          show this help text
    `);
}

let add = fs.appendFile('file.txt', `${args.join(' ')}\n`, function (err) {
  if (err) throw err;
  console.log('Added new item!');
});

let data = '';
let reset = fs.writeFile('file.txt', `${args.join(' ')}\n`, function (err, data) {
  let toDoList = data ? JSON.parse(data) : [];
  if (err) throw err;
  console.log('Done writing!');
});


let list = fs.readFile('file.txt', function (err, data) {
  let toDoList = data ? JSON.parse(data) : [];
  if (err) throw err;
  console.log("done reading");
})

let remove = fs.unlinkSync('file.txt', function (err, data) {
  
})

let update = fs.appendFile('file.txt', `${args.split('\n')}`, function (err) {
  if (err) throw err;
  console.log('Added new item!');
})


switch (args) {
  case 'list': {
    console.log(JSON.stringify(toDoList))
    break;
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
    break;
    }
}
