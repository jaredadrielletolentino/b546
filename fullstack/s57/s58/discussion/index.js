// console.log("Hello B546!");

// we sent a fetch request
	// Fetch Syntax: 
		/*
			fetch('url', {options})
		*/

// Method, by default it is Get method
fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then(data => {
	// console.log(data);

	showPosts(data);
})


const showPosts = (posts) => {
	// console.log(posts);

	// This contain HTML elements as a string that later on will be added to our html page
	let postEntries = '';

	posts.forEach(post => {
		// console.log(post);

		postEntries += `
						<div id = "post-${post.id}">
							<h3 id = "post-title-${post.id}">${post.title}</h3>
							<p id = "post-body-${post.id}">${post.body}</p>
							<button onclick = "editPost(${post.id})">Edit</button>
							<button onclick = "deletePost(${post.id})">Delete</button>
						</div>
					`
	})

	// console.log(postEntries);

	document.querySelector('#div-post-entries').innerHTML = postEntries;
}


// adding a post
// by default, when we submit a form it reloads the page
document.querySelector('#form-add-post').addEventListener("submit", event => {
	
	// preventDefault() method - it stops the default behavior of our webpage when submitting(auto-refresh);
	event.preventDefault();

	// console.log("Hello! The form has been submitted!");

	let titleInput = document.querySelector('#txt-title');
	let bodyInput = document.querySelector('#txt-body');

	// console.log(titleInput);
	// console.log(bodyInput);

	// we will now be sending a request to our API
	fetch('https://jsonplaceholder.typicode.com/posts', {
		method : 'POST',
		body: JSON.stringify({
			title: titleInput.value,
			body: bodyInput.value,
			userId: 1
		}),
		headers : {'Content-type' : 'application/json'}
	})
	.then(response => response.json())
	.then(data => {
		// console.log(data);
		alert('Succesfully added.');

		titleInput.value = null;
		bodyInput.value = null;

		document.querySelector('#div-post-entries').innerHTML += `
						<div id = "post-${data.id}">
							<h3 id = "post-title-${data.id}">${data.title}</h3>
							<p id = "post-body-${data.id}">${data.body}</p>
							<button onclick = "editPost(${data.id})">Edit</button>
							<button onclick = "deletePost(${data.id})">Delete</button>
						</div>
					`
	})
})


// This function will invoke once the edit button is clicked
	// the text in the title will be passed to the title input in the edit post form
const editPost = (id) => {
	// console.log("Id is: " + id);

	// console.log("Edit button is clicked!");

	// to get the title and body of the post to be editted
	let title = document.querySelector(`#post-title-${id}`).innerHTML;
	let body = document.querySelector(`#post-body-${id}`).innerHTML;

	// to pass the title, body and id to edit post form
	document.querySelector('#txt-edit-id').value = id
	document.querySelector('#txt-edit-title').value = title
	document.querySelector('#txt-edit-body').value = body

	// This is to automatically enable the update button
	document.querySelector("#btn-submit-update").removeAttribute('disabled');
}

// Handle form submission for editing posts
document.querySelector('#form-edit-post').addEventListener("submit", event => {
	// Prevent default form submission behavior
	event.preventDefault();

	let editId = document.querySelector('#txt-edit-id').value;
	let editTitle = document.querySelector('#txt-edit-title');
	let editBody = document.querySelector('#txt-edit-body');

	// Send PUT request to the specific endpoint
	fetch(`https://jsonplaceholder.typicode.com/posts/${editId}`, {
		method: 'PUT',
		body: JSON.stringify({
			id: editId,
			title: editTitle.value,
			body: editBody.value,
			userId: 1
		}),
		headers: {
			'Content-type': 'application/json'
		}
	})
	.then(response => response.json())
	.then(data => {
		console.log('Post successfully updated');
		
		// Show success alert
		alert('Successfully updated.');

		// Reset input fields to empty values
		editTitle.value = null;
		editBody.value = null;

		// Disable the submit button to prevent multiple submissions
		document.querySelector('#btn-submit-update').setAttribute('disabled', 'disabled');

		// Update the post in the DOM
		document.querySelector(`#post-title-${editId}`).innerHTML = data.title;
		document.querySelector(`#post-body-${editId}`).innerHTML = data.body;
	})
})


// Function to delete individual posts
const deletePost = (id) => {
	// Send DELETE request to API
	fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
		method: 'DELETE'
	})
	.then(response => {
		if (response) {

			// Show success alert
			alert('Post deleted successfully.');

			// Remove the element from DOM
			document.querySelector(`#post-${id}`).remove();
			
			console.log(`Post ${id} deleted successfully`);
		}
	})
}


// Add event listener for delete-all button
document.querySelector('#delete-all').addEventListener('click', () => {
	// Show alert message
	alert('All Posts Deleted');
	
	// Delete all content inside div-post-entries
	document.querySelector('#div-post-entries').innerHTML = null;
});
