let quotes = JSON.parse(localStorage.getItem("savedQuotes")) || [];

function showQuotes() {
  let list = document.getElementById("quoteList");
  list.innerHTML = "";

  for (let i = 0; i < quotes.length; i++) {
    let li = document.createElement("li");
    li.textContent = quotes[i];

    let del = document.createElement("button");
    del.textContent = "Delete";
    del.className = "deleteBtn";

    (function(index){
      del.onclick = function() {
        quotes.splice(index, 1);
        localStorage.setItem("savedQuotes", JSON.stringify(quotes));
        showQuotes();
      };
    })(i);

    li.appendChild(del);
    list.appendChild(li);
  }
}

function addQuote() {
  let input = document.getElementById("quoteInput");
  let text = input.value.trim();

  if (text === "") {
    alert("Please type a quote!");
    return;
  }

  quotes.push(text);
  localStorage.setItem("savedQuotes", JSON.stringify(quotes));

  input.value = "";
  showQuotes();
}

function clearAllQuotes() {
  if (confirm("Are you sure you want to clear all quotes?")) {
    quotes = [];
    localStorage.setItem("savedQuotes", JSON.stringify(quotes));
    showQuotes();
  }
}

document.getElementById("addBtn").addEventListener("click", addQuote);


document.getElementById("clearAll").addEventListener("click", clearAllQuotes);

showQuotes();