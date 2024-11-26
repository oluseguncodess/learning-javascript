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

function createPost(posts) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            post.push(posts)

            const error = true

            if(!error) {
                resolve()
            } else {
                reject('Error: Something went wrong')
            }
        }, 2000);
    });
}

createPost({title: 'Post Three', body: 'This is post three'})
    .then(getPost)
    .catch(err => console.log(err))