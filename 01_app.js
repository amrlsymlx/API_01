//API: APPLICATION PROGRAMMING INTERFACE

// contract provided by one software to another software
// it usually consist of structured request and structured response

// a set of function and procedures that provide access to the data
// of an operating system, application and others

let posts = loadPostSync();

// wait till the post fetch
// do solething with post
// do the next thing()

//Async call
// use call back function : when we pass one function as a 
// function as a parameter to anohter function

// loadPostSync(function(){
//     // ...wait till the post fetch
//     // ...do solething with post
//     // do the next thing()

// })


// most of the async code that you are going to work with are
// the part of libraries

// 1. XMLHttpRequest and fetch
// 2. callback functions
// 3.promises
// 4. async/await

// Ajax : async javascript and xml
// it is a set of web technologies
// send & recieve data async
//does not interfere with the current page loading
//Json has replaced xml in most cases nowadays
// no page reload and its very interective
// XMLHttpRequest: xhr object