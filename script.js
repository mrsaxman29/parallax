const parallax1 = document.getElementById('parallax');
const slide1 = document.getElementById('slide1'); 
const slide2 = document.getElementById('slide2'); 
const slide3 = document.getElementById('slide3'); 
const slide4 = document.getElementById('slide4'); 

function animate_parallax(){
    let scroll_offset = window.scrollY;
    console.log(scroll_offset);
    slide1.style.transform = `rotate(${scroll_offset/2}deg)`;
    slide2.style.transform = `scale(${(scroll_offset +250)/800})`;
    slide3.style.transform = `translate(-${scroll_offset/20}%)`;
    slide4.style.transform = `translate(${scroll_offset/45}%)`;
    

    
}

document.addEventListener('scroll', animate_parallax)