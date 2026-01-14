
gsap.registerPlugin(ScrollTrigger);

/* INTRO */
gsap.timeline()
  .from(".title span", {
    opacity: 0,
    y: 120,
    rotateX: 70,
    stagger: 0.08,
    duration: 1.4,
    ease: "power4.out"
  })
  .from(".subtitle", {
    opacity: 0,
    y: 40,
    duration: .8
  }, "-=.6")
  .to(".intro", {
    yPercent: -100,
    duration: 1.2,
    ease: "expo.inOut",
    delay: .6
  });

/* SCENES */
gsap.utils.toArray(".image-wrap").forEach((wrap, i) => {

  gsap.fromTo(wrap,
    {
      opacity: 0,
      y: 120,
      rotateY: i % 2 ? -15 : 15,
      clipPath: "circle(30% at 50% 50%)"
    },
    {
      opacity: 1,
      y: 0,
      rotateY: 0,
      clipPath: "polygon(8% 0%,92% 0%,100% 8%,100% 92%,92% 100%,8% 100%,0% 92%,0% 8%)",
      ease: "power4.out",
      scrollTrigger: {
        trigger: wrap,
        start: "top 75%",
        end: "top 30%",
        scrub: true
      }
    }
  );
});
