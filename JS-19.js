const postContainer = document.getElementById('postContainer');
const searchBtn = document.getElementById('searchBtn');

function displayPost(post) {
  const postElement = document.createElement('div');
  postElement.innerHTML = `
    <h2>Post ${post.id}</h2>
    <p><strong>Title:</strong> ${post.title}</p>
    <p><strong>Completed:</strong> ${post.completed ? 'Yes' : 'No'}</p>
    <button id="commentsBtn">Load Comments</button>
    <div id="commentsContainer"></div>
  `;
  postContainer.innerHTML = '';
  postContainer.appendChild(postElement);

  const commentsBtn = document.getElementById('commentsBtn');
  commentsBtn.addEventListener('click', () => {
    fetchComments(post.id);
  });
}

function fetchPost(postId) {
  fetch(`https://jsonplaceholder.typicode.com/todos/${postId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Post not found');
      }
      return response.json();
    })
    .then(post => {
      displayPost(post);
    })
    .catch(error => {
      alert(error.message);
    });
}

function fetchComments(postId) {
  const commentsContainer = document.getElementById('commentsContainer');
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(response => response.json())
    .then(comments => {
      const commentsList = document.createElement('ul');
      comments.forEach(comment => {
        const commentItem = document.createElement('li');
        commentItem.innerText = comment.body;
        commentsList.appendChild(commentItem);
      });
      commentsContainer.innerHTML = '';
      commentsContainer.appendChild(commentsList);
    })
    .catch(error => {
      alert('Failed to load comments');
    });
}

searchBtn.addEventListener('click', () => {
  const postId = document.getElementById('postId').value;
  fetchPost(postId);
});