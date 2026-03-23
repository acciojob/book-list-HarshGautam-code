//your JS code here. If required.


// Select form
const form = document.getElementById("book-form");

// Add event listener
form.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent page reload

    // Get input values
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const isbn = document.getElementById("isbn").value;

    // Create row
    const table = document.getElementById("book-list");
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="delete">Clear</button></td>
    `;

    // Append row
    table.appendChild(row);

    // Clear inputs
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
});

// Delete row
document.getElementById("book-list").addEventListener("click", function (e) {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.parentElement.remove();
    }
});