const parallax1 = document.getElementById('parallax');
const slide1 = document.getElementById('slide1'); 

function animate_parallax(){
    let scroll_offset = window.scrollY;
    console.log(scroll_offset);
    slide1.style.transform = `rotate(${scroll_offset}deg)`;
    



}

document.addEventListener('scroll', animate_parallax)