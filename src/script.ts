// script.ts
document.addEventListener('DOMContentLoaded', () => {
    const modalButton = document.getElementById('open-modal');
    const modal = document.getElementById('modal');

    if (modalButton && modal) {
        modalButton.addEventListener('click', () => {
            modal.classList.add('active');
        });

        const closeButton = modal.querySelector('.close');
        if (closeButton) {
            closeButton.addEventListener('click', () => {
                modal.classList.remove('active');
            });
        }
    }

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            const postList = document.getElementById('post-list');
            if (postList) {
                data.forEach(post => {
                    const listItem = document.createElement('li');
                    listItem.textContent = post.title;
                    postList.appendChild(listItem);
                });
            }
        });
});
