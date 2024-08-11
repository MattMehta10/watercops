var crsr = document.querySelector("#cursor")
var crsr2 = document.querySelector("#cursor2")
document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + 10 + "px"
    crsr.style.top = dets.y + "px"
    crsr2.style.left = dets.x - 95 + "px"
    crsr2.style.top = dets.y - 95 + "px"
})

var h4all = document.querySelectorAll("#nav h3")
h4all.forEach(function (elem) {
    elem.addEventListener('mouseenter', function () {
        crsr.style.scale = 1.4
        crsr.style.border = "1px solid white"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener('mouseleave', function () {
        crsr.style.scale = 1
        crsr.style.border = "0px"
        crsr.style.backgroundColor = "#48b7ea"
    })
})

var h3all = document.querySelectorAll("#botmtxt h3")
h3all.forEach(function (elem) {
    elem.addEventListener('mouseenter', function () {
        crsr.style.scale = 1.3
        crsr.style.border = "1px solid white"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener('mouseleave', function () {
        crsr.style.scale = 1
        crsr.style.border = "0px"
        crsr.style.backgroundColor = "#48b7ea"
    })

})

var dot = document.querySelectorAll(".dots")
var imgD = document.querySelector("#imgcont")
var textH = document.querySelector("#typecont h2")
var textP = document.querySelector("#typecont p")
dot.forEach(function (elem) {
    var idd = elem.id
    elem.addEventListener('click', function () {
        if (idd === "d1") {
            textH.innerHTML = "Educational Programs"
            textP.innerHTML = "Funding for workshops, seminars, and school programs that teach water-saving techniques."
            imgD.style.backgroundImage = "url(sem.jpg)"
        }
        else if (idd === "d2") {
            textH.innerHTML = "Community Projects"
            textP.innerHTML = "Supporting local projects that promote water conservation and improve water management."
            imgD.style.backgroundImage = "url(jj.jpeg)"
        }
        else if (idd === "d3") {
            textH.innerHTML = "Research and Advocacy"
            textP.innerHTML = "Contributing to research efforts and advocacy campaigns to influence policy and promotesustainable water practices."
            imgD.style.backgroundImage = "url(research.jpeg)"
        }
    })
})
var imgnavall = document.querySelectorAll("#imgnav .dots");
var activeDot = document.querySelector("#d1"); // Variable to keep track of the currently active dot

imgnavall.forEach(function (dot) {
    dot.addEventListener('click', function () {
        // Remove styles from the currently active dot, if any
        if (activeDot) {
            activeDot.style.transform = "scale(1)";
            activeDot.style.border = "0px";
            activeDot.style.backgroundColor = "white";
        }

        // Apply styles to the clicked dot
        dot.style.transform = "scale(1.1)";
        dot.style.border = "1px solid rgb(23, 214, 214)";
        dot.style.backgroundColor = "transparent";

        // Update the activeDot variable
        activeDot = dot;
    });
});

gsap.to("#maincont", {
    invalidateOnRefresh: false,
    backgroundColor: "black",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#maincont",
        scroller: "body",
        // markers:true,
        start: "top -10%",
        end: "top -60%",
        scrub: 2
    }
})

gsap.to("#nav", {
    invalidateOnRefresh: false,
    backgroundColor: "black",
    height: 105,
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -12%",
        end: "top -13%",
        scrub: 2.5
    }
})


gsap.to("#nav img", {
    invalidateOnRefresh: false,
    height: 80,
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -12%",
        end: "top -13%",
        scrub: 2.5
    }
})


gsap.to("#quote", {
    invalidateOnRefresh: false,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
        trigger: "#quote",
        scroller: "body",
        // markers:true,
        start: "top 75%",
        end: "center 80%",
        scrub: 2
    }
})

gsap.to("#mission", {
    invalidateOnRefresh: false,
    opacity: 1,
    marginTop: 0,
    duration: 1,
    ease: "power1.in",
    ease: "back.in",
    ease: "power1.out",
    scrollTrigger: {
        trigger: "#content2",
        scroller: "body",
        // markers:true,
        start: "top 50%",
        end: "top 45%",
        scrub: 2
    }
})

gsap.to("#content2 img", {
    invalidateOnRefresh: false,
    translateY: 0,
    opacity: 1,
    duration: 1,
    ease: "power1.in",
    ease: "back.in",
    ease: "power1.out",
    scrollTrigger: {
        trigger: "#content2",
        scroller: "body",
        // markers:true,
        start: "top 35%",
        end: "top 40%",
        scrub: 2
    }
})

gsap.to("#content3", {
    invalidateOnRefresh: false,
    opacity: 1,
    marginTop: 80,
    duration: 1,
    ease: "power4.in",
    ease: "back.in",
    ease: "power1.out",
    scrollTrigger: {
        trigger: "#content3",
        scroller: "body",
        // markers:true,
        start: "top 70%",
        end: "top 65%",
        scrub: 2
    }
}
)


gsap.to("#allcards", {
    invalidateOnRefresh: false,
    opacity: 1,
    translateY: 0,
    duration: .5,
    ease: "power4.in",
    ease: "back.in",
    ease: "power1.out",
    scrollTrigger: {
        trigger: "#content3",
        scroller: "body",
        // markers:true,
        start: "top 43%",
        end: "top 35%",
        scrub: 2,
        indent: 50
    }
}
)


gsap.to("#card1", {
    invalidateOnRefresh: false,
    opacity: 1,
    translateX: 0,
    duration: .5,
    ease: "power4.in",
    ease: "back.in",
    ease: "power1.out",
    scrollTrigger: {
        trigger: "#content3",
        scroller: "body",
        // markers:true,
        start: "top 45%",
        end: "top 35%",
        scrub: 2
    }
}
)

gsap.to("#card3", {
    invalidateOnRefresh: false,
    opacity: 1,
    translateX: 0,
    duration: .5,
    ease: "power4.in",
    ease: "back.in",
    ease: "power1.out",
    scrollTrigger: {
        trigger: "#content3",
        scroller: "body",
        // markers:true,
        start: "top 45%",
        end: "top 35%",
        scrub: 2
    }
}
)






gsap.to("#content4", {
    invalidateOnRefresh: false,
    background: "radial-gradient(circle,rgb(3, 67, 127), rgb(3, 153, 141))",
    duration: .5,
    scrollTrigger: {
        trigger: "#content4",
        scroller: "body",
        // markers:true,
        start: "top 77%",
        end: "top 77%",
        scrub: 2
    }
})


gsap.to("#content4 h2", {
    invalidateOnRefresh: false,
    scale: 1.1,
    duration: .5,
    ease: "power4.in",
    scrollTrigger: {
        trigger: "#content4",
        scroller: "body",
        // markers:true,
        start: "top 83%",
        end: "top 70%",
        scrub: 2
    }
})


gsap.to("#overlay2", {
    invalidateOnRefresh: false,
    translateY:-500,
    duration: .5,
    ease: "power4.in",
    scrollTrigger: {
        trigger: "#content4",
        scroller: "body",
        // markers:true,
        start: "top 95%",
        end: "top 75%",
        scrub: 2
    }
})

gsap.to("#content6", {
    invalidateOnRefresh: false,
    opacity: 1,
    marginTop: 200,
    duration: 0.2,
    // ease: "power1.in",
    // ease: "back.in",
    scrollTrigger: {
        trigger: "#content6",
        scroller: "body",
        // markers: true,
        start: "top 82%",
        end: "top 72%",
        scrub: 2
    }
})



gsap.to("#imgcont",{
    invalidateOnRefresh: false,
    opacity: 1,
    left: "11rem",
    duration: .5,
    ease: "power1.in",
    ease: "power1.out",
    scrollTrigger: {
        trigger: "#alltypeD",
        scroller: "body",
        // markers: true,
        start: "top 80%",
        end: "top 78%",
        scrub: 2
    }
})


gsap.to("#typecont", {
    invalidateOnRefresh: false,
    opacity: 1,
    right: "-3rem",
    duration: .5,
    ease: "power1.in",
    ease: "power1.out",
    scrollTrigger: {
        trigger: "#alltypeD",
        scroller: "body",
        // markers:true,
        start: "top 80%",
        end: "top 78%",
        scrub: 2
    }
})


gsap.to("#imgnav",{
    invalidateOnRefresh: false,
    opacity: 1,
    duration: .5,
    ease: "power1.in",
    ease: "power1.out",
    scrollTrigger: {
        trigger: "#alltypeD",
        scroller: "body",
        // markers: true,
        start: "top 76%",
        end: "top 74%",
        scrub: 2
    }
})




gsap.to("#abt1",{
    invalidateOnRefresh: false,
    opacity:1,
    translateY:0,
    duration:1,
    ease: "power1.in",
    ease: "power1.out",
    scrollTrigger:{
        trigger: "#content5",
        scroller: "body",
        // markers:true,
        start: "top 90%",
        end: "top 70%",
        scrub: 2
    }
})


gsap.to("#a-txt h2",{
    invalidateOnRefresh: false,
    opacity:1,
    translateY:0,
    duration:1,
    ease: "power1.in",
    ease: "power1.out",
    scrollTrigger:{
        trigger: "#abtus",
        scroller: "body",
        // markers:true,
        start: "top 75%",
        end: "top 68%",
        scrub: 2
    }
})

gsap.to("#a-txt p",{
    invalidateOnRefresh: false,
    opacity:1,
    translateY:0,
    duration:1,
    ease: "power1.in",
    ease: "power1.out",
    scrollTrigger:{
        trigger: "#abtus",
        scroller: "body",
        // markers:true,
        start: "top 70%",
        end: "top 68%",
        scrub: 2
    }
})

gsap.to("#a-img",{
    invalidateOnRefresh: false,
    opacity:1,
    translateX:0,
    rotate:0,
    duration:1,
    ease: "power1.in",
    // ease: "power1.out",
    scrollTrigger:{
        trigger: "#abtus",
        scroller: "body",
        // markers:true,
        start: "top 70%",
        end: "top 68%",
        scrub: 2
    }
})

gsap.to("#v-txt h2",{
    invalidateOnRefresh: false,
    opacity:1,
    translateY:0,
    duration:1,
    ease: "power1.in",
    ease: "power1.out",
    scrollTrigger:{
        trigger: "#vision",
        scroller: "body",
        // markers:true,
        start: "top 70%",
        end: "top 68%",
        scrub: 2
    }
})

gsap.to("#v-txt p",{
    invalidateOnRefresh: false,
    opacity:1,
    translateY:0,
    duration:1,
    ease: "power1.in",
    ease: "power1.out",
    scrollTrigger:{
        trigger: "#vision",
        scroller: "body",
        // markers:true,
        start: "top 70%",
        end: "top 68%",
        scrub: 2
    }
})

gsap.to("#v-img",{
    invalidateOnRefresh: false,
    opacity:1,
    translateX:0,
    duration:1,
    ease: "power1.in",
    ease: "power1.out",
    scrollTrigger:{
        trigger: "#vision",
        scroller: "body",
        // markers:true,
        start: "top 70%",
        end: "top 68%",
        scrub: 2
    }
})

gsap.to("#t-txt h2",{
    invalidateOnRefresh: false,
    opacity:1,
    translateY:15,
    duration:1,
    ease: "power1.in",
    ease: "power1.out",
    scrollTrigger:{
        trigger: "#team",
        scroller: "body",
        // markers:true,
        start: "top 70%",
        end: "top 68%",
        scrub: 2
    }
})

gsap.to("#t-txt p",{
    invalidateOnRefresh: false,
    opacity:1,
    translateY:15,
    duration:1,
    ease: "power1.in",
    ease: "power1.out",
    scrollTrigger:{
        trigger: "#team",
        scroller: "body",
        // markers:true,
        start: "top 70%",
        end: "top 68%",
        scrub: 2
    }
})

gsap.to("#t-img",{
    invalidateOnRefresh: false,
    opacity:1,
    translateX:0,
    duration:1,
    ease: "power1.in",
    ease: "power1.out",
    scrollTrigger:{
        trigger: "#team",
        scroller: "body",
        // markers:true,
        start: "top 70%",
        end: "top 68%",
        scrub: 2
    }
})


gsap.to("#backimg1",{
    invalidateOnRefresh: false,
    translateY:0,
    duration:.6,
    ease: "power1.in",
    scrollTrigger:{
        trigger: "#content7",
        scroller: "body",
        // markers:true,
        start: "-50% 88%",
        end: "-50% 85%",
        scrub: 2
    }
})


gsap.to("#botmnav",{
    invalidateOnRefresh: false,
    opacity:1,
    duration:1,
    ease: "power1.in",
    scrollTrigger:{
        trigger: "#content7",
        scroller: "body",
        // markers:true,
        start: "-50 88%",
        end: "-50 86%",
        scrub: 2
    }
})

