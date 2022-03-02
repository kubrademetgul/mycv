const navbar = document.querySelector("nav");

function animation() {
  var controller = new ScrollMagic.Controller();

  const t1 = gsap.timeline({ defaults: { ease: Expo.InOut } });

  t1.fromTo(navbar, 1, { y: "-10rem" }, { y: 0 });
  t1.fromTo(
    ".banner-text",
    0.5,
    { x: "-2rem", opacity: 0 },
    { x: 0, opacity: 1 },
    "-=1"
  );
  t1.fromTo(
    ".banner-img",
    0.5,
    { x: "5rem", opacity: 0 },
    { x: 0, opacity: 1 }
  );
  t1.fromTo(".banner-img img", 0.5, { scale: 1.5 }, { scale: 1 });

  // about animations

  const t2 = gsap.timeline({ defaults: { ease: Expo.InOut } });

  t2.fromTo(
    ".about-text",
    0.5,
    { x: "-2rem", opacity: 0 },
    { x: 0, opacity: 1 }
  );
  t2.fromTo(".about-img", 0.5, { x: "5rem", opacity: 0 }, { x: 0, opacity: 1 });
  t2.fromTo(".about-img img", 0.5, { scale: 1.5 }, { scale: 1 });

  new ScrollMagic.Scene({
    triggerElement: "#about",
    triggerHook: 0.5,
    reverse: false,
  })
    .setTween(t2)
    .addTo(controller);

  // card animations

 
}

animation();