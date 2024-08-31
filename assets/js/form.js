const blogPost = document.querySelector('#blog-input'); 


const submitBtn = document.querySelector('#submit-btn');

const blogArray = JSON.parse(localStorage.getItem('newBlogPosts')) || [];

blogPost.addEventListener('#submit', function(event){
    event.preventDefault();

    const usernameEl = document.getElementById('username').value;
    console.log(usernameEl);
    const titleEl = document.getElementById('title').value;
    console.log(titleEl);
    const contentEl = document.getElementById('content').value;
    console.log(contentEl);
    
    const newBlogPost = {
        username: usernameEl,
        title: titleEl,
        content: contentEl
    };

    blogArray.push(newBlogPost);
    localStorage.setItem('newBlogPosts', JSON.stringify(blogArray));
    window.location.href='blog.html';
    
});