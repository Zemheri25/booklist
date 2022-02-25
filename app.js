let title = document.getElementById("title");
let author = document.getElementById("author");
let isbn = document.getElementById("isbn");

let submit = document.getElementById("submit");

let booklist = document.getElementById("book-list");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  let tr = document.createElement("tr");
  let first = document.createElement("td");
  first.innerHTML = title.value;
  let second = document.createElement("td");
  second.innerHTML = author.value;
  let third = document.createElement("td");
  third.innerHTML = isbn.value;
  let last = document.createElement("td");
  let deletebutton = document.createElement("button");
  deletebutton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  deletebutton.classList.add("remove");
  last.appendChild(deletebutton);

  tr.appendChild(first);
  tr.appendChild(second);
  tr.appendChild(third);
  tr.appendChild(last);

  booklist.appendChild(tr);
});

booklist.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove")) {
    e.target.parentElement.parentElement.remove();
  }
});
