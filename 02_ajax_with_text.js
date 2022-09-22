//selecting the element
document.getElementById('btn').addEventListener('click',loadData);

function loadData(){
    //create the xhr object
    const xhr = new XMLHttpRequest();

    //open method (type of the request , url (where to get the data from),asyn(true))
    xhr.open('Get','02_data.txt',true);

    //load response
    xhr.onload = function (){
        // console.log(xhr.readyState);
        // console.log(this.responseText);

        if(this.status === 200){
            document.getElementById('output').innerHTML=
            `<h1>${this.responseText}</h1>`
        }
    }

    //send request
    xhr.send();
}

//Ready state value :
// 0 : request not initialised
// 1 : server connection established
// 2 : request received
// 3 : processing the response
// 4 : request finished and response is ready


//HTTP Status :
// 200 : ok 
// 403 : forbidden
// 404 : not found 