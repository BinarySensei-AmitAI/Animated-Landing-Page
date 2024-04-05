var tl = gsap.timeline()
tl.from("nav img, nav h4, nav button", {
    y: -100,
    opacity: 0,
    duration: 0.7,
    stagger: 0.5
})
tl.from("#part-2 h1", {
    y:100,
    opacity: 0,
    duration: 1,
    stagger: 0.5,
})
tl.from("#left-img-1, #left-img-2, #right-img-1, #right-img-2", {
    scale: 0,
    opacity: 0,
    duration: 1,
    stagger: 0.5
})
tl.from("h5", {
    scale: 0,
    opacity: 0
})
tl.to("h5", {
    y: 30,
    yoyo: true,
    duration: 0.5,
    repeat: -1
})