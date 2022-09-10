const posts = [
    {tittle: 'Post one', body:'This is post one'},
    {tittle: 'Post two', body:'This is post two'},
];

function createPost(post){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            posts.push(post);

            const error = true;

            if(!error){
                resolve();
            }else{
                
            }
        })
    })
}