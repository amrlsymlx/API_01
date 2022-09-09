const posts = [
    {tittle: 'Post one', body:'This is post one'},
    {tittle: 'Post two', body:'This is post two'},
];

function createPost (){
    setTimeout(function(){
        posts.push(posts);
    }3000);
   
}

function createPost(){
    setTimeout(function(post){
        let output = '';
        posts.forEach(function(post){
            output +=
            <li>&{post.title}</li>
        });

        document.body.innerHTML
}