const  list = document.querySelectorAll('.list');
function activeLink(){
    list.forEach((item)=>
    item.classList.remove('active'))
    this.classList.add('active')
}

list.forEach((item)=>
    item.addEventListener('click', activeLink))

const btnshow = document.getElementById("show-btn")
const hidden_info = document.getElementById("hidden-info")


btnshow.addEventListener("click", function(){
    hidden_info.style.display = "block"
});