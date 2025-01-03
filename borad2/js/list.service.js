function loadList() {
    let noteDatas = !!localStorage.getItem("noteDatas")
    ? JSON.parse(localStorage.getItem("noteDatas"))
    : [];

    const noteList = document.querySelector(".note-list-container");
    noteList.innerHTML = noteDatas.map(data => `
        <li class="note-box">
            <header class="noet-header">
                <h1>${data.title}(${data.writer})</h1>
            </header>
            <main class="note-main">
                <pre>${data.content}</pre>
            </main>
        </li>
        `).join("");
}

loadList();