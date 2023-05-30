
var users = [];

function add() {
    let prev = localStorage.getItem("users");
    let userData = prev ? JSON.parse(prev) : [];
    var name = document.getElementById("na").value;
    users = {
        name: name,
    }
    userData.push(users)
    let stringfy = JSON.stringify(userData)
    localStorage.setItem("users", stringfy)
    document.getElementById('na').value = ""
}
function show() {
    var storedData = localStorage.getItem("users");
    var parsedData = JSON.parse(storedData);
    var searchList = document.getElementById("searchList");
    searchList.innerHTML = ""; // Clear the existing list

    if (parsedData && parsedData.length > 0) {
        searchList.style.display = "flex";
        parsedData.forEach(function(user) {
            var li = document.createElement("li");
            li.textContent = user.name;
            searchList.appendChild(li);
        });
    } else {
        alert("No data found.");
    }
}
