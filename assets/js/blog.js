const themeToggle = $('#theme-toggle');
const postList= document.querySelector('#post-list');

let isLightMode = true;

themeToggle.on('click', function() {
    if (isLightMode) {
        $('body').css({'background-color': '#333', 'color': '#fff'});
        isLightMode = !isLightMode;
    }else {
        $('body').css({'background-color': '#fff', 'color': '#333'});
        isLightMode = !isLightMode;
    }
});

function renderPosts() {
    const allPosts = JSON.parse(localStorage.getItem('#blogPosts'));
   
    for (let i = 0; i < allPosts.length; i++) {
        const post = allPosts[i];

        const li = document.createElement('li');
        const h2 = document.createElement('h2');
        h2.textContent = post.title;
        const p = document.createElement('p');
        p.textContent = post.content;
        const p2 = document.createElement('p');
        p2.textContent = `Posted by ${post.author} on ${post.date}`;
        li.appendChild(h2);
        li.appendChild(p);
        li.appendChild(p2);
        postList.appendChild(li);
    }

}

renderPosts();

function init() {
    const storedPosts = JSON.parse(localStorage.getItem('blogPosts'));
    if (!storedPosts) {
        localStorage.setItem('blogPosts', JSON.stringify([]));
    }
};
