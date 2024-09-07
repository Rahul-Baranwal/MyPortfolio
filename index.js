                    // JavaScript for navation bar 
const section = document.querySelectorAll('section');                        
const navlink = document.querySelectorAll('header nav a');                       
window.onscroll=()=>{
    section.forEach(sec=>{
        let top=window.scrollY;
        let offset= set.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')
        if(top>=offset && top<offset+height){
            navlink.forEach(links=>{
                links.classList.remove(active)
                document.querySelector('head nav a[href*='+id+']').classList.add('active')

            })
        }
    })

           // navigation bar fixed
var header = document.querySelector('header')
header.classList.toggle("sticky",window.onscrollY>100)

            //  developing menu option 
menubar.classList.remove('bx-x')
navbar.classList.remove('active')
};

let menubar = document.querySelector('#menu')
let navbar = document.querySelector('.navbar')
menubar.onclick = ()=>{
    menubar.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbzxpxjaLXL_rnv-J9OoGxoar27dqz9rkQs-elRMlGX5uzoWghEtUAFVBRFyueZ5LRHB/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msgs")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent Successfully!!";
        setTimeout(function() {
            msg.innerHTML="";
        },5000);
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})