function loadComments(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(data => displayComments(data))
}

function displayComments(comments){
    const displayContainer = document.getElementById('comment-container');
    for(const comment of comments){
        const commentDiv = document.createElement('div')
        commentDiv.classList.add[comment]
        console.log(comment);
        commentDiv.innerHTML  = `
                    <h4>postId : ${comment.postId}</h4>
                    <p>id: ${comment.id}</p>
                    <h4>title: ${comment.name}</h4>
                    <p>email: ${comment.email}</p>
        
        
        
        `;
        displayContainer.appendChild(commentDiv);
    }
}

loadComments();