var commentList = document.getElementById('commentList');
var commentInput = document.getElementById('commentInput');

// Fungsi untuk mengirim komentar
function submitComment() {
    var commentText = commentInput.value.trim();

    if (commentText !== '') {
        var commentItem = document.createElement('li');
        commentItem.innerText = commentText;

        commentList.appendChild(commentItem);

        // Reset input komentar setelah mengirim
        commentInput.value = '';
    }
}