var a = document.querySelector("#cursor")
var b = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    a.style.left = dets.x+30+"px"
    a.style.top = dets.y+"px"
    b.style.left = dets.x-100+"px"
    b.style.top = dets.y-100+"px"

})


gsap.to("#nav",{
    backgroundColor : "black",
    // duration:1,
    height:"120px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
 }
})
gsap.to("#main",{
    backgroundColor:"black",
    // duration:2,
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // marker:true,
        start: "top -25%",
        end: "top -70%",
        scrub:1
    }
})
var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(ele){
    ele.addEventListener("mouseenter",function(){
        a.style.scale = 3
        a.style.border = "1px solid white"
        a.style.backgroundColor = "transparent"
        scrub = 2
    })
})
var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(ele){
    ele.addEventListener("mouseleave",function(){
        a.style.scale = 1
        a.style.border = "1px solid #b3ff00"
        a.style.backgroundColor = "#b3ff00"
    })
})


gsap.from("#aboutus img,#in",{
    y : 200,
    opacity : 0,
    duration : 1,
    stagger : 0.4,
    scrollTrigger : {
    trigger :"#aboutus",
    scroller : "body",
    start : "top 60%",
    end : "top 55%",
    marker : true,
    scrub : 3,
        }
    })
    gsap.from("#cards",{
        y : 200,
        opacity : 0,
        duration : 1,
        scrollTrigger : {
        trigger :"#cards",
        scroller : "body",
        start : "top 100%",
        end : "top 95%",
        marker : true,
        scrub : 2,
    
        }
    })
    gsap.from("#colon1",{
        y : -50,
        x : -50,
        scrollTrigger : {
         trigger : "#colon1",
         scroller : "body",
        //  markers : true,
         start : "top 70%",
         end : "top 55%",
         scrub : 2

        }
    })
    gsap.from("#colon2",{
        y : 50,
        x : 50,
        scrollTrigger : {
         trigger : "#colon2",
         scroller : "body",
        //  markers : true,
         start : "top 120%",
         end : "top 95%",
         scrub : 2

        }
    })
    gsap.from("#text",{
        y : 60,
        // x : 30,
        opacity:0,
        scrollTrigger : {
         trigger : "#text",
         scroller : "body",
        //  markers : true,
         start : "top 80%",
         end : "top 55%",
         scrub : 1

        }
    })
    var h2 = document.querySelectorAll("#page4 #elem")
h2.forEach(function(ele){
    ele.addEventListener("mouseenter",function(){
        a.style.scale = 3
        a.style.border = "1px solid white"
        a.style.backgroundColor = "transparent"
        scrub = 2
    })
})
var h2 = document.querySelectorAll("#page4 #elem")
h2.forEach(function(ele){
    ele.addEventListener("mouseleave",function(){
        a.style.scale = 1
        a.style.border = "1px solid #b3ff00"
        a.style.backgroundColor = "#b3ff00"
    })
})
gsap.from("#page4 h1",{
    y:50,
    opacity:0,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 80%",
        end:"top 75%",
        scrub:2,

    }
})