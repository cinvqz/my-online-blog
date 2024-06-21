document.getElementById('blog-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const errorMessage = document.getElementById('error-message');

    if (!username || !title || !content) {
        errorMessage.textContent = 'Please complete the form.';
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';

        const posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.push({ username, title, content });
        localStorage.setItem('posts', JSON.stringify(posts));

        window.location.href = 'blog.html';
    }
});