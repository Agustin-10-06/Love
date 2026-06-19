const start = new Date("2022-04-11T00:00:00"); function upd() { let d = Math.floor((Date.now() - start) / 86400000), y = Math.floor(d / 365), m = Math.floor((d % 365) / 30), r = (d % 365) % 30; counter.innerHTML = `❤️ ${y} años, ${m} meses y ${r} días juntos ❤️`; } setInterval(upd, 1000); upd(); const msg = `Victoria...

Desde aquel 11 de abril de 2022 mi vida cambió para siempre.

No siempre soy el mejor novio.
No siempre hago todo bien.

Pero todos los días intento ser una mejor versión de mí por vos.

Estoy inmensamente orgulloso de ser tu novio.

Gracias por cada abrazo, cada risa y cada momento compartido.

Sos mi paz, mi lugar seguro y el amor de mi vida.

Si pudiera volver el tiempo atrás...

Te volvería a elegir una y mil veces.

Te amo infinitamente.

Con todo mi amor,

Agus ❤️`; let i = 0; function type() { if (i < msg.length) { text.textContent += msg[i++]; setTimeout(type, 35) } } function openLetter() { letter.classList.remove("hidden"); window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" }); if (!text.textContent) type() } for (let i = 0; i < 50; i++) { let h = document.createElement("div"); h.className = "heart"; h.textContent = "❤"; h.style.left = Math.random() * 100 + "vw"; h.style.fontSize = (15 + Math.random() * 20) + "px"; h.style.animationDuration = (5 + Math.random() * 5) + "s"; document.body.appendChild(h) }

const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");

let current = 0;

function nextSlide(){

    current++;

    if(current >= images.length){
        current = 0;
    }

    slides.style.transform = `translateX(-${current * 100}%)`;

}

setInterval(nextSlide,3000);