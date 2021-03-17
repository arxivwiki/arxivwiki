function search(e) {
    if (e.key === 'Enter') {
        let splitUp = e.target.value.split("/");
        let id = splitUp[splitUp.length - 1].split(".pdf")[0];
        window.location.href = "/abs/" + id;
    }
}

document.getElementById("search_input").addEventListener('keypress', search);