let noteInputDatas = {
    id: 0,
    title: "",
    content: "",
    writer: "",
}

function setInputsEvent() {
    const titleInput = document.querySelector(".main-article2 > input:nth-of-type(1)");
    const contentInput = document.querySelector(".main-article2 > textarea");
    const writerInput = document.querySelector(".main-article2 > input:nth-of-type(2)");
    titleInput.onkeyup = handleNoteInputOnChange;
    contentInput.onkeyup = handleNoteInputOnChange;
    writerInput.onkeyup = handleNoteInputOnChange;
}

function setButtonEvent() {
    const submitButton =document.querySelector(".write-button");
    submitButton.onclick = handleSubmitOnClick;
}

function handleSubmitOnClick() {
    saveNote();
    clear();
}

function handleNoteInputOnChange(e) {
    noteInputDatas = {
        ...noteInputDatas,
        [e.target.name]: e.target.value,
    };
}

function saveNote() {
    let noteDatas = !!localStorage.getItem("noteDatas")
    ? JSON.parse(localStorage.getItem("noteDatas"))
    : [];

    if (noteDatas.length > 0 ) {
    noteInputDatas.id = noteDatas[noteDatas.length - 1].id + 1;
    }

    noteDatas = [
    ...noteDatas,
    noteInputDatas,
    ]

    localStorage.setItem("noteDatas", JSON.stringify(noteDatas));

    alert("게시글 작성 완료");
    location.href = "./list.html"
}

function clear() {
    const titleInput = document.querySelector(".main-article2 > input:nth-of-type(1)");
    const contentInput = document.querySelector(".main-article2 > textarea");
    const writerInput = document.querySelector(".main-article2 > input:nth-of-type(2)");
    const inputs = [titleInput, contentInput, writerInput];
    inputs.forEach(input => input.value = "");

noteInputDatas = {
    title: "",
    content: "",
    writer: "",
 };
}

setInputsEvent();
setButtonEvent();