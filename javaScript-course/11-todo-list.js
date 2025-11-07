
// //Todo list code
// const todoList = [{
//     name: 'wake up',
//     duedate: '12-8-2025'
// },
// {
//     name: 'freshup',
//     duedate: '28-8-2025'
// },];

// renderTodoList();
// function renderTodoList() {

//     let todoListHTML = '';

//     for (let i = 0; i < todoList.length; i++) {
//         const todo = todoList[i];
//         const { name, duedate } = todo;
//         const html = `<p>${name} ${duedate}
//         <button  onclick=" todoList.splice(${i},1);
//         renderTodoList();
//         " >Delete</button> </p>`;
//         todoListHTML += html;
//     }
//     // console.log(todoListHTML);
//     document.querySelector('.js-todo-list').innerHTML = todoListHTML;
// }

// function addTodo() {

//     const inputElement = document.querySelector('.name-input');
//     const name = inputElement.value;
//     const inputDate = document.querySelector('.due-date');
//     const duedate = inputDate.value;


//     todoList.push({
//         name: name,
//         duedate: duedate
//     });
//     console.log(todoList);

//     renderTodoList(); //whenever u add the new todo the funtion will call and and display nw todo.
// }



// array mthod practice
// p1- create an array of string loop over the array and check if the string search is inside in the array. if it is, console.log() the index od 'search' in the array, if Not crossOriginIsolated.log '-1'.
// p2- if 'search' appears multiple times in the array, it will console.log() the index of the first appearance of 'search'. use breck;


// const array = ['hello', 'world', 'search', 'web', 'search'];
// for (let i = 0; i < array.length; i++) {

//     if (array[i] === 'search') {
//         index = i;
//         break; //if i use breck it will give me index 2 on first search string, if i donot use it it will give u index 4 .
//     } else if (array[i] != 'search') {
//         console.log(-1);
//     };
// }
// console.log('index of search is', index); //2


// //p-3 create a fnction with 2 parameter findIndex(array,word), loop through the array and find'word' is in array if is it in array then return '1'. else return '-1'.
// function findIndex(array, word) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === word) {
//             console.log(i);

//             return i;
//         }
//     }
//     return -1;
// }
// let find = findIndex(['green', 'red', 'blue', 'red'], 'red');
// console.log(find);
// findIndex(['green', 'red', 'blue', 'red'], 'yellow');


// p-4 create a fun removeEgg(foods) that takes an array of strings and returns an array where the string 'egg' is removed.
// removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']);
//p-5 modify the code and remove the 'egg' only first 2 eggs from the array.
function removeEgg(foods) {
    let removeLastEggs = foods.reverse();
    let remainingFoods = [];
    let eggsRemoved = 0;//p5
    for (let e = 0; e < foods.length; e++) {
        if (foods[e] === 'egg' && eggsRemoved < 2) {
            eggsRemoved++;
            continue;
        }
        remainingFoods.push(foods[e]);
    }
    return remainingFoods;
}
removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']);
console.log(remainingFoods);//['apple,'egg','ham',]


//p-6 do reverse the array and remove last 2 eggs. 
function removeEgg(foods) {
    let removeLastEggs = foods.reverse();
    let remainingFoods = [];
    let eggsRemoved = 0;
    for (let e = 0; e < removeLastEggs.length; e++) {
        if (removeLastEggs[e] === 'egg' && eggsRemoved < 2) {
            eggsRemoved++;
            continue;
        }
        remainingFoods.push(removeLastEggs[e]);
    }
    return remainingFoods;
}
removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']);
console.log(remainingFoods);


// const nums = [1, 2, 3];
// let total = 0;

// for (i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     console.log('num', num);
//     total = total + num;
//     console.log(total);

// }
// console.log('total', total);

// // accumilator pattern
// const doublenum = [];
// for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     console.log(doublenum.push(num * 2));
// }
// console.log(doublenum);