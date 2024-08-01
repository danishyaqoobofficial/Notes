let value = true;
let add_btn_input = document.getElementById('add_btn_input');
let notes_main = document.getElementById('notes_main');

// add button JS

function add_btn() {
    if (add_btn_input.value === '') {
        
    } else {
        notes_main.innerHTML = notes_main.innerHTML + `
            <div class="max-w-[380px] w-full rounded-[6px] custom_shadow overflow-hidden " id="note_box">
                <div class="flex items-center justify-end px-[12px] py-[8px] bg-[#ff5e00] ">
                    <span class="h-[38px] w-[38px] flex items-center justify-center cursor-pointer group rounded-[30px] hover:bg-white bg-[#ff5e00] transition-all " onclick="edit(this)">
                        <i class="fa-solid fa-check group-hover:text-[#000] text-white" id="edit_icon"></i>
                    </span>
                    <span class="h-[38px] w-[38px] flex items-center justify-center cursor-pointer group rounded-[30px] hover:bg-white bg-[#ff5e00] transition-all " onclick="del(this)">
                        <i class="fa-solid fa-trash group-hover:text-[#000] text-white"></i>
                    </span>
                </div>
                <textarea class="h-[180px] w-full border-0 outline-0 px-[12px] py-[8px] text-[15px] resize-none " id="textarea">${add_btn_input.value}</textarea>
            </div>
        `
        localStorage.setItem('data', notes_main.innerHTML);
        add_btn_input.value = '';
    }
}

// edit JS

function edit(e) {
    let note_box = e.closest('#note_box');
    let textarea = note_box.querySelector('#textarea');
    let edit_icon = note_box.querySelector('#edit_icon');

    if (value === true) {
        textarea.classList.add('text-[13px]');
        textarea.setAttribute('disabled' , 'disabled');
        edit_icon.classList.remove('fa-check');
        edit_icon.classList.add('fa-pen');
        value = false;
    }else{
        textarea.classList.remove('text-[13px]');
        textarea.removeAttribute('disabled' , 'disabled');
        edit_icon.classList.add('fa-check');
        edit_icon.classList.remove('fa-pen');
        value = true;
    }
}

// delete JS

function del(e) {
    let note_box = e.closest('#note_box');
    note_box.classList.add('!hidden');
}



// window loading localstorage

window.addEventListener('load', () =>{
    let get_localS = localStorage.getItem('data');
    notes_main.innerHTML = get_localS
})