import postObject from './dist/scripts/postData.js';

postObject();

/*

Objs: arr = [1, 2, 3, 4] 
queue = <1, 2, 3, 4>

1->2
|  |
4<-3

4-1-3 (only think of immediate neighbour)

*/

document.addEventListener('DOMContentLoaded', function(event) {
    gsap.fromTo(".title", {
        opacity: 0,
        y: 100,
    }, {
        opacity: 1,
        y: 0,
        ease: "power3.inOut",
        duration: 1,
    })

    gsap.fromTo(".hero-text", {
        opacity: 0,
        y: 100,
    }, {
        opacity: 1,
        y: 0,
        ease: "power3.inOut",
        duration: 1,
        delay: 0.3,
    });

    gsap.fromTo(".hero-img", {
        opacity: 0,
        scale: 0,
    }, {
        opacity: 1,
        scale: 1,
        ease: "expo.out",
        duration: 1.5,
        delay: 1,
    });


})

let px = 0;
document.querySelector(".control-left").onclick = () => {
    if(px === 0) {
        px = -75
    } else {
        px+=25;
    }
    gsap.to(".container",{
        xPercent: px,
        ease: "power3.inOut",
        duration: 0.75
    })
}
document.querySelector(".control-right").onclick = () => {
    if(px === -75) {
        px = 0;
    } else {
        px-=25;
    }
    gsap.to(".container",{
        xPercent: px,
        ease: "power3.inOut",
        duration: 0.75
    })
}