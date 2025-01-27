const container = document.getElementById("Posts");

fetch("http://localhost:3000/api/posts")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.innerHTML = `
        <h3>${post.post_name}</h3>
        <p>Posted by: ${post.user_name}</p>
        <p>Description: ${post.user_description}</p>
      `;
      container.appendChild(postElement);
    });
  })
  .catch((error) => console.error("Error fetching posts:", error));
