let cursor = document.querySelector(".cursor"),
    cursorscale = document.querySelectorAll("#cursor-scale"),
    mouseX = 0,
    mouseY = 0;

gsap.to({}, 0.016, {
    repeat: -1,
    onRepeat: function() {
        gsap.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        });
    }
});

window.addEventListener('mousemove', function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
});

cursorscale.forEach(link => {
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('grow');
    });
    link.addEventListener('mousemove', () => {
        cursor.classList.add('grow');
    });
});

let loadertext =  new SplitType('#loader-text')
let loadertl = gsap.timeline()
loadertl.from(".char",{
    y:20,
    opacity:0,
    stagger:0.2
})
gsap.to('.loader',{
    y:"-100%",
    delay:3,
    duration:1,
    display:"none",
    opacity:0,
    stagger:0.1
})

let tl = gsap.timeline()
gsap.from(".cursor-scale",{
    y:50,
    opacity:0,
    duration:0.6,
    delay:0.2
})
tl.from(".newbrand",{
    opacity:0,
    delay:0.2,
    duration:1,
})

let twootl = gsap.timeline()
twootl.from(".twoo",{
    y:60,
    delay:13,
    opacity:0,
    duration:0.4,
    delay:1
})
twootl.from(".flower",{
    rotate:360,
    duration:1,
})
twootl.from(".clothing",{
    opacity:0
})

let carttl = gsap.timeline()
carttl.from('.card-l',{
    x:-300,
    duration:0.5
})
gsap.from('.card-r',{
    x:300,
    duration:0.5
})
carttl.from('.card-b',{
    y:300,
    duration:0.5,
})

// Function to determine if the device is mobile based on screen width
function isMobile() {
    return window.innerWidth <= 768; // You can adjust the value as needed
}

gsap.to(".scroll .card", {
    // Conditional transform based on whether the device is mobile
    transform: isMobile() ? "translateX(-230%)" : "translateX(-165%)",
    scrollTrigger: {
        trigger: ".scroll",
        scroller: "body",
        start: "top 0",
        end: "top -250%",
        scrub: 5,
        pin: true,
        markers: false
    }
});

// Optional: Add event listener for window resize if you want to handle screen size changes
window.addEventListener('resize', function() {
    gsap.to(".scroll .card", {
        transform: isMobile() ? "translateX(-230%)" : "translateX(-165%)",
        duration: 0.5 // Transition duration for resizing, can be adjusted
    });
});

const mytext = new SplitType('.mytext')
gsap.from(".char",{
    x:20,
    duration:1.5,
    stagger:0.1,
    opacity:0,
    scrollTrigger :{
        scroller:""
    }
})

gsap.to("#card-container",{
    background: "radial-gradient(#c3d7df, #aac7d2)",
    scrollTrigger:{
        trigger:"#card-container",
        scroller:"body",
        start:"top 10%",
        // markers:true,
        end: "top 10%",
        scrub:1
    }
})

let tl2 = gsap.timeline({scrollTrigger:{
    trigger:"#footer-container",
    scroller:"body",
    start:"50% 50%",
    end:"100% 50%",
    scrub:2,
    pin:true,
    // markers:true
}
})

tl2.to("#top",{
    top:"-50%"
},"a")
.to("#bottom",{
    bottom:"-50%"
},"a")
.to("#t-h",{
    bottom:"-50%"
},"a")
.to("#b-h",{
    top:"-50%"
},"a")
.from("#foot",{
    y:"40",
    opacity:0,
    duration:1,
},"a")

