let value = true;
let note_box = document.getElementById('note_box');
let notes_main = document.getElementById('notes_main');
let arr = [];



function edit() {
    let edit_icon = document.getElementById('edit_icon');
    let textarea = document.getElementById('textarea');

    if (value === true) {
        edit_icon.classList.remove('fa-check');
        edit_icon.classList.add('fa-pen');
        textarea.setAttribute('disabled','disabled');
        textarea.classList.add('!text-[13px]');
        value = false;
    }else{
        edit_icon.classList.add('fa-check');
        edit_icon.classList.remove('fa-pen');
        textarea.removeAttribute('disabled','disabled');
        textarea.classList.remove('!text-[13px]');
        value = true;
    }
}

function del() {
    note_box.remove();
}

function add_btn() {
    let element =   `
        <div class="max-w-[380px] w-full rounded-[6px] custom_shadow overflow-hidden " id="note_box">
            <div class="flex items-center justify-end px-[12px] py-[8px] bg-[#ff5e00] ">
                <span class="h-[38px] w-[38px] flex items-center justify-center cursor-pointer group rounded-[30px] hover:bg-white bg-[#ff5e00] transition-all " onclick="edit()">
                    <i class="fa-solid fa-check group-hover:text-[#000] text-white" id="edit_icon"></i>
                </span>
                <span class="h-[38px] w-[38px] flex items-center justify-center cursor-pointer group rounded-[30px] hover:bg-white bg-[#ff5e00] transition-all " onclick="del()">
                    <i class="fa-solid fa-trash group-hover:text-[#000] text-white"></i>
                </span>
            </div>
            <textarea class="h-[180px] w-full border-0 outline-0 px-[12px] py-[8px] text-[15px] resize-none " id="textarea"></textarea>
        </div>
        `
        arr.push(element);
        notes_main.innerHTML = `<div class='flex gap-[22px] flex-wrap'>${arr.map((item)=>{return item})}</div>`
}