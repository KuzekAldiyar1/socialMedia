document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.getElementById('posts');

    const imageUrls = [
        'https://st3.depositphotos.com/29384342/34115/i/450/depositphotos_341157888-stock-photo-recommendation-sports-student.jpg',
        'https://i1.sndcdn.com/avatars-xTn7g3zaC84sIgRY-E68SrA-t240x240.jpg',
        'https://static.wikia.nocookie.net/5eb23293-19b2-4531-83fe-129a79440d43/scale-to-width/755',
        'https://media-cdn.tripadvisor.com/media/photo-s/01/5b/65/b7/wild-night-taking-random.jpg',
        'https://www.30secondsofcode.org/assets/cover/industrial-tokyo-800.webp',
        'https://images.pexels.com/photos/3794359/pexels-photo-3794359.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://img.freepik.com/premium-photo/swirly-textured-background-collection_761958-535.jpg',
    ];

    for (let i = 0; i < 100; i++) {
        const post = document.createElement('div');
        post.classList.add('post');

        const profile = document.createElement('div');
        profile.classList.add('profile');
        profile.innerHTML = `
            <img src="profile${i % 5 + 1}.jpg" alt="Profile Photo">
            <h2>RandomUser${i + 1}</h2>
        `;
        post.appendChild(profile);

        const image = document.createElement('img');
        image.src = imageUrls[i % imageUrls.length];
        image.alt = 'Post Image';
        post.appendChild(image);

        const actions = document.createElement('div');
        actions.classList.add('actions');
        actions.innerHTML = `
            <div class="likes">
                <img src="heart.png" alt="Like">
                <span>${Math.floor(Math.random() * 1000)}</span>
            </div>
            <div class="comments">
                <input type="text" placeholder="Add a comment...">
                <button>Post</button>
            </div>
        `;
        post.appendChild(actions);

        const commentsSection = document.createElement('div');
        commentsSection.classList.add('comments-section');
        post.appendChild(commentsSection);

        postsContainer.appendChild(post);
    }
});



document.addEventListener("DOMContentLoaded", function() {
    const likeButtons = document.querySelectorAll('.likes img');
    const commentInputs = document.querySelectorAll('.comments input');
    const commentButtons = document.querySelectorAll('.comments button');
    
    likeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const likeCount = this.nextElementSibling;
            let currentLikes = parseInt(likeCount.textContent);
            currentLikes++;
            likeCount.textContent = currentLikes;
        });
    });

    commentButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            const commentInput = commentInputs[index];
            const commentList = document.createElement('div');
            commentList.classList.add('comment');
            commentList.textContent = commentInput.value;
            commentInput.value = '';
            const post = this.closest('.post');
            const commentsSection = post.querySelector('.comments-section');
            commentsSection.appendChild(commentList);
        });
    });
});
