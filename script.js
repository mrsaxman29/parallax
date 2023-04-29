const parallax1 = document.getElementById('parallax');
const slide1 = document.getElementById('slide1'); 
const slide2 = document.getElementById('slide2'); 
const slide3 = document.getElementById('slide3'); 
const slide4 = document.getElementById('slide4'); 
const slide5 = document.getElementById('slide5'); 
const slide6 = document.getElementById('slide6'); 

function animate_parallax(){
    let scroll_offset = window.scrollY;
    console.log(scroll_offset);
    slide1.style.transform = `rotate(${scroll_offset/10}deg)`;
    slide2.style.transform = `scale(${(scroll_offset +250)/1000})`;
    slide3.style.transform = `translate(-${scroll_offset/80}%)`;
    slide4.style.transform = `translate(${scroll_offset/45}%)`;
    slide5.style.transform = `translate(-${scroll_offset/45}%)`;
    slide6.style.transform = `translate(${scroll_offset/49}%)`;
    

    
}

document.addEventListener('scroll', animate_parallax)