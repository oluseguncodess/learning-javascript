const post = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

function getPost() {
    setTimeout(() => {
        let output = '';
        post.forEach((post) => {
            output += `<li>${post.title}</li>`
        })
        document.body.innerHTML = output;
    }, 1000)
}

function createPost(posts, callback) {
    setTimeout(() => {
        post.push(posts)
        callback()
    }, 2000);
}

createPost({title: 'Post Three', body: 'This is post three'}, getPost)

// the callback function(getpost) doesn't run until the post has been create(added to the post array)


