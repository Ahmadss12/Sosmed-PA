// Menampilkan postingan dari pengguna lain
function displayPosts() {
    const postContainer = document.querySelector('.post-container');

    // Simulasi data postingan dari pengguna lain
    const posts = [
        {
            username: 'John Doe',
            profilePicture: '/src/assets/images/icon.png',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu lectus sed nisl malesuada feugiat. Nullam in lacus ut dolor placerat ultricies. Sed vel turpis nisi.',
            postImage: '/src/assets/images/giphy.gif'
        },
        {
            username: 'Jane Smith',
            profilePicture: '/src/assets/images/icon.png',
            content: 'Duis malesuada diam sed lorem pharetra efficitur. Curabitur ultrices urna eget condimentum iaculis. Aenean eget nisl risus. Ut pharetra sapien non ullamcorper venenatis.',
            postImage: '/src/assets/images/giphy.gif'
        },
        // Tambahkan data postingan lain sesuai kebutuhan
    ];

    // Membuat elemen postingan dan menambahkannya ke dalam kontainer postingan
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        const postHeader = document.createElement('div');
        postHeader.classList.add('post-header');

        const profilePicture = document.createElement('img');
        profilePicture.src = post.profilePicture;
        profilePicture.alt = 'Profile Picture';
        profilePicture.classList.add('profile-picture');

        const username = document.createElement('h3');
        username.textContent = post.username;
        username.classList.add('username');

        postHeader.appendChild(profilePicture);
        postHeader.appendChild(username);
        postElement.appendChild(postHeader);

        const content = document.createElement('p');
        content.textContent = post.content;
        content.classList.add('post-content');
        postElement.appendChild(content);

        if (post.postImage) {
            const postImage = document.createElement('img');
            postImage.src = post.postImage;
            postImage.alt = 'Post Image';
            postImage.classList.add('post-image');
            postElement.appendChild(postImage);
        }

        const postFooter = document.createElement('div');
        postFooter.classList.add('post-footer');

        const likeButton = document.createElement('button');
        likeButton.textContent = 'Like';
        likeButton.classList.add('like-button');

        const commentButton = document.createElement('button');
        commentButton.textContent = 'Comment';
        commentButton.classList.add('comment-button');

        const shareButton = document.createElement('button');
        shareButton.textContent = 'Share';
        shareButton.classList.add('share-button');

        postFooter.appendChild(likeButton);
        postFooter.appendChild(commentButton);
        postFooter.appendChild(shareButton);
        postElement.appendChild(postFooter);

        postContainer.appendChild(postElement);
    });
}

// Memanggil fungsi untuk menampilkan postingan saat halaman dimuat
window.addEventListener('DOMContentLoaded', displayPosts);

var postContainer = document.querySelector('.post-container');
var loadingContainer = document.getElementById('loadingContainer');

function loadMorePosts() {
    loadingContainer.style.display = 'flex'; // Tampilkan animasi loading

    // Simulasikan permintaan data dari server
    setTimeout(function () {
        // Hentikan animasi loading
        loadingContainer.style.display = 'none';

        // Tambahkan konten post baru di sini
        var newPost1 = document.createElement('div');
        newPost1.classList.add('post');
        newPost1.innerHTML = 'Konten post baru 1';
        postContainer.appendChild(newPost1);

        var newPost2 = document.createElement('div');
        newPost2.classList.add('post');
        newPost2.innerHTML = 'Konten post baru 2';
        postContainer.appendChild(newPost2);
    }, 2000); // Waktu simulasi pengambilan data dari server (dalam milidetik)
}

// Cek jika konten post habis saat di-scroll
postContainer.addEventListener('scroll', function () {
    if (postContainer.scrollHeight - postContainer.scrollTop === postContainer.clientHeight) {
        loadMorePosts();
    }
});

document.querySelectorAll('.comment-button').forEach(function (button) {
    button.addEventListener('click', function () {
        window.location.href = '/component/comment/comment.html';
    });
});
