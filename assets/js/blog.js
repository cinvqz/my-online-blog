document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.getElementById('posts-container');
    const posts = JSON.parse(localStorage.getItem('posts')) || [];

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p><p><strong>Author: </strong>${post.username}</p>`;
        postsContainer.appendChild(postElement);
    });

    // Toggle
    document.getElementById('toggle-mode').addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });

    // Back Button
    document.getElementById('back-button').addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});
