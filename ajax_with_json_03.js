// json stands for javascript object notation
// structured format for respresenting data, so a;;
// the computers can understand it
// is way of communicating data
// is using key value pairs
// json can work with other language as well 

document.getElementById('btn1').addEventListener('click',loadUser) ;

function loadUser(){
    // create xhr object
    const xhr = new XMLHttpRequest();

    // open method
    xhr.open('Get','user_03.json',true);

    //onload
    xhr.onload = function (){
        if(this.status === 200 ) {
            
        }
    }




}