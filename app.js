let value = true;
let add_btn_input = document.getElementById('add_btn_input');
let note_box = document.getElementById('note_box');

let delete_btn = note_box.closest('#delete_btn');








// edit JS

function edit(e) {
    let textarea = e.closest('#textarea');
    textarea.classList.add('!border');
}

// delete JS

function del(e) {
    let note_box = e.closest('#note_box');
    note_box.classList.add('!hidden');
}