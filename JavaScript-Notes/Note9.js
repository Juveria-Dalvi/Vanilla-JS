
//! hoisting -  Hosting is JavaScript's default behaviour of moving all declarations to the top of current scope (to the top of current  script or the current function)
//* hoisting -  function ki declaration se pehle agr function ko call krte h to iss behavior ko hoisting bolte

//? threee Types
//* 1.. function Declaration
//! keyword - variable with (parameters and default value) - { } - calling variable with(arguments)
function generateTable() {
  console.log('done gnerating....');
}
generateTable();

//! variable with let,const /var - = - keyword () - { } -calling variable with(arguments)
//* 2.. function expression (anonymous or named)
const initTikTakToe = function () {
  console.log("let's begin game...");
}
initTikTakToe();

//! variable with let,const /var - = - () - => - { } -calling variable with(arguments)
//* 3.. arrow functions
const arrFunc = () => {
  console.log('arrow functions...')
}
arrFunc();

//* Function parameters & defaultsnpm

//? (name = 'abdullah') abdullah is default value assigned to 'name' parameter
const gettingUserInfo = (name = 'abdullah') => {
  console.log(name)
}
//? string arguments is passed below
gettingUserInfo('hello world')

// *************************************************
