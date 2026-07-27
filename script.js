// ======================
// DARK MODE
// ======================

const themeBtn = document.getElementById("themeBtn");

themeBtn.onclick = () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        themeBtn.innerHTML="☀️";

    }else{

        themeBtn.innerHTML="🌙";

    }

};

// ======================
// BACK TO TOP
// ======================

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

// ======================
// SCROLL REVEAL
// ======================

ScrollReveal().reveal("section",{

    distance:"60px",

    duration:1200,

    origin:"bottom",

    interval:200

});

ScrollReveal().reveal(".card",{

    distance:"40px",

    duration:1000,

    interval:150,

    origin:"bottom"

});

ScrollReveal().reveal(".item",{

    distance:"40px",

    duration:1000,

    interval:200,

    origin:"left"

});

// ======================
// ACTIVE MENU
// ======================

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-150;

        if(pageYOffset>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

// ======================
// HERO TEXT EFFECT
// ======================

const title=document.querySelector(".hero h1");

title.animate(

[
    {opacity:0,transform:"translateY(-30px)"},
    {opacity:1,transform:"translateY(0px)"}
],
{
    duration:1500,
    fill:"forwards"
}
);

// ======================
// SMOOTH BUTTON
// ======================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});
