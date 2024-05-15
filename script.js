document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.getElementById('posts');

    for (let i = 0; i < 100; i++) {
        const post = createPost(i);
        postsContainer.appendChild(post);
    }
});

function createPost(index) {
    const post = document.createElement('div');
    post.classList.add('post');

    const profile = document.createElement('div');
    profile.classList.add('profile');
    profile.innerHTML = `
        <img src="randomuser.png" alt="Profile Photo">
        <h2>User${index + 1}</h2>
    `;
    post.appendChild(profile);

    const image = document.createElement('img');
    image.src = getImageUrl(index);
    image.alt = 'Post Image';
    post.appendChild(image);

    const actions = document.createElement('div');
    actions.classList.add('actions');
    const likes = createLikes();
    const comments = createComments();
    actions.appendChild(likes);
    actions.appendChild(comments);
    post.appendChild(actions);

    const commentsSection = document.createElement('div');
    commentsSection.classList.add('comments-section');
    post.appendChild(commentsSection);

    return post;
}

function getImageUrl(index) {
    const imageUrls = [
        'https://st3.depositphotos.com/29384342/34115/i/450/depositphotos_341157888-stock-photo-recommendation-sports-student.jpg',
        'https://i1.sndcdn.com/avatars-xTn7g3zaC84sIgRY-E68SrA-t240x240.jpg',
        'https://static.wikia.nocookie.net/5eb23293-19b2-4531-83fe-129a79440d43/scale-to-width/755',
        'https://media-cdn.tripadvisor.com/media/photo-s/01/5b/65/b7/wild-night-taking-random.jpg',
        'https://www.30secondsofcode.org/assets/cover/industrial-tokyo-800.webp',
        'https://images.pexels.com/photos/3794359/pexels-photo-3794359.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://img.freepik.com/premium-photo/swirly-textured-background-collection_761958-535.jpg',
    ];
    return imageUrls[index % imageUrls.length];
}

function createLikes() {
    const likes = document.createElement('div');
    likes.classList.add('likes');
    likes.innerHTML = `
        <img src="heart.png" alt="Like" onclick="likePost(this)">
        <span>0</span>
    `;
    return likes;
}

function createComments() {
    const comments = document.createElement('div');
    comments.classList.add('comments');
    comments.innerHTML = `
        <input type="text" placeholder="Добавь свой коммент">
        <button onclick="addComment(this)">Post</button>
    `;
    return comments;
}

function likePost(likeButton) {
    const likesCount = likeButton.nextElementSibling;
    let currentLikes = parseInt(likesCount.textContent);
    currentLikes++;
    likesCount.textContent = currentLikes;
}

function addComment(button) {
    const post = button.closest('.post');
    const commentInput = post.querySelector('.comments input');
    const commentText = commentInput.value.trim();
    if (commentText !== '') {
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.textContent = commentText;
        const commentsSection = post.querySelector('.comments-section');
        commentsSection.appendChild(commentElement);
        commentInput.value = '';
    }
}
