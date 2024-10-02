"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Link from "next/link";

export default function Page() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (typeof document === "undefined") return;

    const WebFont = require("webfontloader");
    const Splitting = require("splitting");

    const preloadFonts = (id) => {
      return new Promise((resolve) => {
        WebFont.load({
          typekit: {
            id: id,
          },
          active: resolve,
        });
      });
    };

    const wrapElements = (elems, wrapType, wrapClass) => {
      elems.forEach((char) => {
        const wrapEl = document.createElement(wrapType);
        wrapEl.classList = wrapClass;
        char.parentNode.appendChild(wrapEl);
        wrapEl.appendChild(char);
      });
    };

    const init = () => {
      // initialize title elements
      const fx1Titles = [
        ...document.querySelectorAll(
          ".content__title[data-splitting][data-effect1]",
        ),
      ];
      const fx2Titles = [
        ...document.querySelectorAll(
          ".content__title[data-splitting][data-effect2]",
        ),
      ];
      const fx3Titles = [
        ...document.querySelectorAll(
          ".content__title[data-splitting][data-effect3]",
        ),
      ];
      const fx4Titles = [
        ...document.querySelectorAll(
          ".content__title[data-splitting][data-effect4]",
        ),
      ];
      const fx5Titles = [
        ...document.querySelectorAll(
          ".content__title[data-splitting][data-effect5]",
        ),
      ];
      const fx6Titles = [
        ...document.querySelectorAll(
          ".content__title[data-splitting][data-effect6]",
        ),
      ];
      const fx7Titles = [
        ...document.querySelectorAll(
          ".content__title[data-splitting][data-effect7]",
        ),
      ];
      const fx8Titles = [
        ...document.querySelectorAll(
          ".content__title[data-splitting][data-effect8]",
        ),
      ];
      const fx9Titles = [
        ...document.querySelectorAll(
          ".content__title[data-splitting][data-effect9]",
        ),
      ];
      const fx10Titles = [
        ...document.querySelectorAll(
          ".content__title[data-splitting][data-effect10]",
        ),
      ];
      const fx11Titles = [
        ...document.querySelectorAll(
          ".content__title[data-splitting][data-effect11]",
        ),
      ];
      const fx12Titles = [
        ...document.querySelectorAll(
          ".content__title[data-splitting][data-effect12]",
        ),
      ];
      const fx13Titles = [
        ...document.querySelectorAll(
          ".content__title[data-splitting][data-effect13]",
        ),
      ];
      const fx14Titles = [
        ...document.querySelectorAll(
          ".content__title[data-splitting][data-effect14]",
        ),
      ];
      const fx15Titles = [
        ...document.querySelectorAll(
          ".content__title[data-splitting][data-effect15]",
        ),
      ];

      // initialize lenis smooth scrolling
      let lenis;
      const initSmoothScrolling = () => {
        lenis = new Lenis({
          lerp: 0.2,
          smooth: true,
        });
        lenis.on("scroll", () => ScrollTrigger.update());
        const scrollFn = (time) => {
          lenis.raf(time);
          requestAnimationFrame(scrollFn);
        };
        requestAnimationFrame(scrollFn);
      };

      // initialize sGSAP Scroll Triggers
      const scroll = () => {
        fx1Titles.forEach((title) => {
          const chars = title.querySelectorAll(".char");

          gsap.fromTo(
            chars,
            {
              "will-change": "opacity, transform",
              opacity: 0,
              scale: 0.6,
              rotationZ: () => gsap.utils.random(-20, 20),
            },
            {
              ease: "power4",
              opacity: 1,
              scale: 1,
              rotation: 0,
              stagger: 0.4,
              scrollTrigger: {
                trigger: title,
                start: "center+=20% bottom",
                end: "+=50%",
                scrub: true,
              },
            },
          );
        });

        fx2Titles.forEach((title) => {
          const chars = title.querySelectorAll(".char");

          gsap.fromTo(
            chars,
            {
              "will-change": "opacity, transform",
              opacity: 0,
              yPercent: 120,
              scaleY: 2.3,
              scaleX: 0.7,
              transformOrigin: "50% 0%",
            },
            {
              duration: 1,
              ease: "back.inOut(2)",
              opacity: 1,
              yPercent: 0,
              scaleY: 1,
              scaleX: 1,
              stagger: 0.03,
              scrollTrigger: {
                trigger: title,
                start: "center bottom+=50%",
                end: "bottom top+=40%",
                scrub: true,
              },
            },
          );
        });

        fx3Titles.forEach((title) => {
          const chars = title.querySelectorAll(".char");

          gsap.fromTo(
            chars,
            {
              "will-change": "transform",
              transformOrigin: "50% 0%",
              scaleY: 0,
            },
            {
              ease: "back",
              opacity: 1,
              scaleY: 1,
              yPercent: 0,
              stagger: 0.03,
              scrollTrigger: {
                trigger: title,
                start: "center bottom-=5%",
                end: "top top-=20%",
                scrub: true,
              },
            },
          );
        });

        fx4Titles.forEach((title) => {
          const words = title.querySelectorAll(".word");

          for (const word of words) {
            const chars = word.querySelectorAll(".char");

            gsap.fromTo(
              chars,
              {
                "will-change": "opacity, transform",
                x: (position, _, arr) => 150 * (position - arr.length / 2),
              },
              {
                ease: "power1.inOut",
                x: 0,
                stagger: {
                  grid: "auto",
                  from: "center",
                },
                scrollTrigger: {
                  trigger: word,
                  start: "center bottom+=30%",
                  end: "top top+=15%",
                  scrub: true,
                },
              },
            );
          }
        });

        fx5Titles.forEach((title) => {
          const chars = title.querySelectorAll(".char");

          gsap.fromTo(
            chars,
            {
              "will-change": "opacity, transform",
              opacity: 0,
              xPercent: () => gsap.utils.random(-200, 200),
              yPercent: () => gsap.utils.random(-150, 150),
            },
            {
              ease: "power1.inOut",
              opacity: 1,
              xPercent: 0,
              yPercent: 0,
              stagger: { each: 0.05, grid: "auto", from: "random" },
              scrollTrigger: {
                trigger: title,
                start: "center bottom+=10%",
                end: "bottom center",
                scrub: 0.9,
              },
            },
          );
        });

        fx6Titles.forEach((title) => {
          const words = title.querySelectorAll(".word");

          for (const word of words) {
            const chars = word.querySelectorAll(".char");

            chars.forEach((char) =>
              gsap.set(char.parentNode, { perspective: 2000 }),
            );

            gsap.fromTo(
              chars,
              {
                "will-change": "opacity, transform",
                opacity: 0,
                rotationX: -90,
                yPercent: 50,
              },
              {
                ease: "power1.inOut",
                opacity: 1,
                rotationX: 0,
                yPercent: 0,
                stagger: {
                  each: 0.03,
                  from: 0,
                },
                scrollTrigger: {
                  trigger: word,
                  start: "center bottom+=40%",
                  end: "bottom center-=30%",
                  scrub: 0.9,
                },
              },
            );
          }
        });

        fx7Titles.forEach((title) => {
          const words = title.querySelectorAll(".word");

          for (const word of words) {
            const chars = word.querySelectorAll(".char");

            chars.forEach((char) =>
              gsap.set(char.parentNode, { perspective: 2000 }),
            );

            gsap.fromTo(
              chars,
              {
                "will-change": "opacity, transform",
                transformOrigin: "100% 50%",
                opacity: 0,
                rotationY: -90,
                z: -300,
              },
              {
                ease: "expo",
                opacity: 1,
                rotationY: 0,
                z: 0,
                stagger: { each: 0.06, from: "end" },
                scrollTrigger: {
                  trigger: word,
                  start: "bottom bottom+=20%",
                  end: "bottom top",
                  scrub: 1,
                },
              },
            );
          }
        });

        const lettersAndSymbols = [
          "a",
          "b",
          "c",
          "d",
          "e",
          "f",
          "g",
          "h",
          "i",
          "j",
          "k",
          "l",
          "m",
          "n",
          "o",
          "p",
          "q",
          "r",
          "s",
          "t",
          "u",
          "v",
          "w",
          "x",
          "y",
          "z",
          "!",
          "@",
          "#",
          "$",
          "%",
          "^",
          "&",
          "*",
          "-",
          "_",
          "+",
          "=",
          ";",
          ":",
          "<",
          ">",
          ",",
        ];
        fx8Titles.forEach((title) => {
          const chars = title.querySelectorAll(".char");

          chars.forEach((char, position) => {
            let initialHTML = char.innerHTML;

            gsap.fromTo(
              char,
              {
                opacity: 0,
              },
              {
                duration: 0.03,
                innerHTML: () =>
                  lettersAndSymbols[
                    Math.floor(Math.random() * lettersAndSymbols.length)
                  ],
                repeat: 1,
                repeatRefresh: true,
                opacity: 1,
                repeatDelay: 0.03,
                delay: (position + 1) * 0.18,
                onComplete: () =>
                  gsap.set(char, { innerHTML: initialHTML, delay: 0.03 }),
                scrollTrigger: {
                  trigger: title,
                  start: "top bottom",
                  end: "bottom center",
                  toggleActions: "play resume resume reset",
                  onEnter: () => gsap.set(char, { opacity: 0 }),
                },
              },
            );
          });
        });

        fx9Titles.forEach((title) => {
          const words = title.querySelectorAll(".word");

          for (const word of words) {
            const chars = word.querySelectorAll(".char");

            gsap.fromTo(
              chars,
              {
                "will-change": "transform",
                scaleX: 0,
                x: (_, target) =>
                  window.innerWidth / 2 -
                  target.offsetLeft -
                  target.offsetWidth / 2,
              },
              {
                ease: "power1.inOut",
                scaleX: 1,
                x: 0,
                scrollTrigger: {
                  trigger: word,
                  start: "top bottom",
                  end: "top top",
                  scrub: true,
                },
              },
            );
          }
        });

        fx10Titles.forEach((title) => {
          const chars = title.querySelectorAll(".char");

          gsap.fromTo(
            chars,
            {
              "will-change": "opacity",
              opacity: 0,
              filter: "blur(20px)",
            },
            {
              duration: 0.25,
              ease: "power1.inOut",
              opacity: 1,
              filter: "blur(0px)",
              stagger: { each: 0.05, from: "random" },
              scrollTrigger: {
                trigger: title,
                start: "top bottom",
                end: "center center",
                toggleActions: "play resume resume reset",
              },
            },
          );
        });

        fx11Titles.forEach((title) => {
          const chars = title.querySelectorAll(".char");
          wrapElements(chars, "span", "char-wrap");

          gsap.fromTo(
            chars,
            {
              "will-change": "transform",
              transformOrigin: "0% 50%",
              xPercent: 105,
            },
            {
              duration: 1,
              ease: "expo",
              xPercent: 0,
              stagger: 0.042,
              scrollTrigger: {
                trigger: title,
                start: "top bottom",
                end: "top top+=10%",
                toggleActions: "play resume resume reset",
              },
            },
          );
        });

        fx12Titles.forEach((title) => {
          const chars = title.querySelectorAll(".char");
          wrapElements(chars, "span", "char-wrap");

          gsap.fromTo(
            chars,
            {
              "will-change": "transform",
              xPercent: -250,
              rotationZ: 45,
              scaleX: 6,
              transformOrigin: "100% 50%",
            },
            {
              duration: 1,
              ease: "power2",
              xPercent: 0,
              rotationZ: 0,
              scaleX: 1,
              stagger: -0.06,
              scrollTrigger: {
                trigger: title,
                start: "top bottom+=10%",
                end: "bottom top+=10%",
                scrub: true,
              },
            },
          );
        });

        fx13Titles.forEach((title) => {
          const chars = title.querySelectorAll(".char");

          chars.forEach((char) =>
            gsap.set(char.parentNode, { perspective: 2000 }),
          );

          gsap.fromTo(
            chars,
            {
              "will-change": "opacity, transform",
              opacity: 0,
              rotationY: 180,
              xPercent: -40,
              yPercent: 100,
            },
            {
              ease: "power4.inOut()",
              opacity: 1,
              rotationY: 0,
              xPercent: 0,
              yPercent: 0,
              stagger: {
                each: -0.03,
                from: 0,
              },
              scrollTrigger: {
                trigger: title,
                start: "center bottom",
                end: "bottom center-=30%",
                scrub: 0.9,
              },
            },
          );
        });

        fx14Titles.forEach((title) => {
          const chars = title.querySelectorAll(".char");

          gsap
            .timeline()
            .fromTo(
              title,
              {
                "will-change": "transform",
                xPercent: 100,
              },
              {
                ease: "none",
                xPercent: 0,
                scrollTrigger: {
                  trigger: title,
                  scrub: true,
                  start: "center center",
                  end: "+=100%",
                  pin: title.parentNode,
                },
              },
            )
            .fromTo(
              chars,
              {
                "will-change": "transform",
                scale: 3,
                yPercent: -900,
              },
              {
                ease: "back(2)",
                scale: 1,
                yPercent: 0,
                stagger: 0.05,
                scrollTrigger: {
                  trigger: title,
                  start: "center center",
                  end: "+=100%",
                  scrub: 1.9,
                },
              },
              0,
            );
        });

        fx15Titles.forEach((title) => {
          const chars = title.querySelectorAll(".char");

          chars.forEach((char) =>
            gsap.set(char.parentNode, { perspective: 2000 }),
          );

          gsap
            .timeline()
            .fromTo(
              title,
              {
                "will-change": "transform",
                xPercent: -80,
              },
              {
                ease: "none",
                xPercent: 0,
                scrollTrigger: {
                  trigger: title,
                  scrub: true,
                  start: "center center",
                  end: "+=100%",
                  pin: title.parentNode,
                },
              },
            )
            .fromTo(
              chars,
              {
                "will-change": "opacity, transform",
                transformOrigin: "50% 50% -200px",
                rotationX: 380,
                opacity: 0,
              },
              {
                ease: "expo.inOut",
                rotationX: 0,
                z: 0,
                opacity: 1,
                stagger: -0.03,
                scrollTrigger: {
                  trigger: title,
                  start: "center center",
                  end: "+=140%",
                  scrub: 1.2,
                },
              },
              0,
            );
        });
      };

      // preload images and fonts
      preloadFonts("cvn8slu").then(() => {
        // remove loader (loading class)
        document.body.classList.remove("loading");
        // start Lenis (smooth scrolling)
        initSmoothScrolling();
        // start GSAP Scroll Triggers
        scroll();
      });
    };

    const boot = () => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(".box", {
        scrollTrigger: {
          trigger: ".box",
          start: "top center",
          end: "top 100px",
          scrub: true,
        },
        x: 500,
      });
      Splitting();
      init();
    };

    boot();
  });

  return (
    <>
      <div className="frame">
        <div className="frame__title">
          <Link
            aria-label="Go to The Lazuardy Website"
            className="frame__title-back"
            href="https://lazuardy.tech"
            target="_blank"
          >
            <span>lazuardy.tech</span>
            <svg width="18px" height="18px" viewBox="0 0 24 24">
              <path
                vector-effect="non-scaling-stroke"
                d="M18.25 15.5a.75.75 0 00.75-.75v-9a.75.75 0 00-.75-.75h-9a.75.75 0 000 1.5h7.19L6.22 16.72a.75.75 0 101.06 1.06L17.5 7.56v7.19c0 .414.336.75.75.75z"
              ></path>
            </svg>
          </Link>
        </div>
        <span className="frame__prev"></span>
        <nav className="frame__demos">
          <Link
            aria-label="Go to The Lazuardy Manifesto Repository"
            className="frame__title-back"
            href="https://github.com/lazuardy-tech/manifesto"
            target="_blank"
          >
            GitHub
          </Link>
        </nav>
      </div>
      <div className="intro">
        <h1 className="intro__title">
          <span className="intro__title-pre">The Lazuardy Manifesto</span>
          <span className="intro__title-sub">for Software Development.</span>
        </h1>
        <span className="intro__info">Please scroll and read moderately</span>
      </div>
      <div className="content content--highlight">
        <p>
          My legacy &#x2014;
          <br />
          What will it be?
          <br />
          Flowers in spring,
          <br />
          The cuckoo in summer,
          <br />
          And the crimson maples
          <br />
          Of autumn...
        </p>
      </div>
      <div className="content">
        <h2
          className="content__title content__title--small"
          data-splitting
          data-effect1
        >
          <span>Beyond</span>
          <span className="font-6">meaning</span>
        </h2>
        <p>
          Studying texts and stiff meditation can make you lose your Original
          Mind. A solitary tune by a fisherman, though, can be an invaluable
          treasure. Dusk rain on the river, the moon peeking in and out of the
          clouds; Elegant beyond words, he chants his songs night after night.
        </p>
        <p>
          This treasure was discovered in a bamboo thicket &mdash; I washed the
          bowl in a spring and then mended it. After morning meditation, I take
          my gruel in it; At night, it serves me soup or rice. Cracked, worn,
          weather-beaten, and misshapen But still of noble stock!
        </p>
      </div>
      <div className="content">
        <h2 className="content__title" data-splitting data-effect2>
          <span className="font-2">Heavenly</span>
          <span className="font-4">pleasure</span>
        </h2>
      </div>
      <div className="content">
        <p>
          I watch people in the world
          <br />
          Throw away their lives lusting after things,
          <br />
          Never able to satisfy their desires,
          <br />
          Falling into deeper despair
          <br />
          And torturing themselves.
          <br />
          Even if they get what they want
          <br />
          How long will they be able to enjoy it?
          <br />
          For one heavenly pleasure
          <br />
          They suffer ten torments of hell,
          <br />
          Binding themselves more firmly to the grindstone.
          <br />
          Such people are like monkeys
          <br />
          Frantically grasping for the moon in the water
          <br />
          And then falling into a whirlpool.
          <br />
          How endlessly those caught up in the floating world suffer.
          <br />
          Despite myself, I fret over them all night
          <br />
          And cannot staunch my flow of tears.
        </p>
      </div>
      <div className="content">
        <h2
          className="content__title content__title--sides"
          data-splitting
          data-effect3
        >
          <span className="font-7">The blossoms</span>
          <span className="font-1">have fallen</span>
        </h2>
      </div>
      <div className="content">
        <p>
          The world before my eyes is wan and wasted, just like me. The earth is
          decrepit, the sky stormy, all the grass withered. No spring breeze
          even at this late date, Just winter clouds swallowing up my tiny reed
          hut.
        </p>
        <p>
          The wind has settled, the blossoms have fallen; Birds sing, the
          mountains grow dark &mdash; This is the wondrous power of Buddhism.
        </p>
      </div>
      <div className="content content--full">
        <h2 className="content__title" data-splitting data-effect4>
          <span className="font-larger">Human</span>
          <span className="font-upper font-sub font-7">gratitude</span>
        </h2>
      </div>
      <div className="content">
        <p>
          The tree was barren of leaves but you brought a new spring. Long green
          sprouts, verdant flowers, fresh promise. Mori, if I ever forget my
          profound gratitude to you, Let me burn in hell forever.
        </p>
        <p>
          In a dilapidated three-room hut I&apos;ve grown old and tired; This
          winter cold is the Worst I&apos;ve ever suffered through. I sip thin
          gruel, waiting for the Freezing night to pass. Can I last until spring
          finally arrives? Unable to beg for rice, How will I survive the chill?
          Even meditation helps no longer; Nothing left to do but compose poems
          In memory of deceased friends.
        </p>
      </div>
      <div className="content">
        <h2 className="content__title" data-splitting data-effect5>
          <span className="font-7">Intentionally</span>
          <span className="font-6">dramatic</span>
        </h2>
      </div>
      <div className="content">
        <p>
          First blooming in the Western Paradise, The lotus has delighted us for
          ages. Its white petals are covered with dew, its jade green leaves
          spread out over the pond, And its pure fragrance perfumes the wind.
          Cool and majestic, it raises from the murky water. The sun sets behind
          the mountains But I remain in the darkness, too captivated to leave.
        </p>
      </div>
      <div className="content">
        <h2
          className="content__title content__title--small"
          data-splitting
          data-effect6
        >
          <span className="font-3">Blooming</span>
          <span className="font-6">flowers</span>
        </h2>
        <p>
          My house is buried in the deepest recess of the forest Every year, ivy
          vines grow longer than the year before. Undisturbed by the affairs of
          the world I live at ease, Woodmen’s singing rarely reaching me through
          the trees. While the sun stays in the sky, I mend my torn clothes And
          facing the moon, I read holy texts aloud to myself. Let me drop a word
          of advice for believers of my faith. To enjoy life&apos;s immensity,
          you do not need many things.
        </p>
      </div>
      <div className="content">
        <h2 className="content__title" data-splitting data-effect7>
          <span className="font-3">Unfolding</span>
          <span className="font-4">Elegantly</span>
          <span className="font-7">Naturally</span>
        </h2>
      </div>
      <div className="content">
        <p>
          An old grave hidden away at the foot of a deserted hill, Overrun with
          rank weeds growing unchecked year after year; There is no one left to
          tend the tomb, And only an occasional woodcutter passes by. Once I was
          his pupil, a youth with shaggy hair, Learning deeply from him by the
          Narrow River.
        </p>
      </div>
      <div className="content">
        <h2 className="content__title" data-splitting data-effect8>
          <span className="font-8">Midnight</span>
        </h2>
      </div>
      <div className="content">
        <p>
          Too lazy to be ambitious, I let the world take care of itself. Ten
          days&apos; worth of rice in my bag; a bundle of twigs by the
          fireplace. Why chatter about delusion and enlightenment? Listening to
          the night rain on my roof, I sit comfortably, with both legs stretched
          out.
        </p>
      </div>
      <div className="content content--full">
        <h2 className="content__title" data-splitting data-effect9>
          <span className="font-larger font-12">Moon</span>
          <span className="font-upper font-sub font-1">Transportation</span>
        </h2>
      </div>
      <div className="content">
        <p>
          Yes, I’m truly a dunce Living among trees and plants. Please don’t
          question me about illusion and enlightenment -- This old fellow just
          likes to smile to himself. I wade across streams with bony legs, And
          carry a bag about in fine spring weather. That’s my life, And the
          world owes me nothing.
        </p>
      </div>
      <div className="content">
        <h2 className="content__title" data-splitting data-effect10>
          <span className="font-7">Lucid</span>
          <span className="font-4">Dreaming</span>
          <span className="font-medium font-1">Diaries</span>
        </h2>
      </div>
      <div className="content">
        <p>
          In my youth I put aside my studies And I aspired to be a saint. Living
          austerely as a mendicant monk, I wandered here and there for many
          springs. Finally I returned home to settle under a craggy peak. I live
          peacefully in a grass hut, Listening to the birds for music. Clouds
          are my best neighbors. Below a pure spring where I refresh body and
          mind; Above, towering pines and oaks that provide shade and brushwood.
          Free, so free, day after day -- I never want to leave!
        </p>
      </div>
      <div className="content">
        <h2 className="content__title" data-splitting data-effect11>
          <span className="font-3 font-height">The Routine</span>
        </h2>
      </div>
      <div className="content">
        <p>
          In stubborn stupidity, I live on alone befriended by trees and herbs.
          Too lazy to learn right from wrong, I laugh at myself, ignoring
          others. Lifting my bony shanks, I cross the stream, a sack in my hand,
          blessed by spring weather. Living thus, I want for nothing, at peace
          with all the world.
        </p>
        <p>
          Your finger points to the moon, but the finger is blind until the moon
          appears. What connection has moon and finger? Are they separate
          objects or bound? This is a question for beginners wrapped in seas of
          ignorance. Yet one who looks beyond metaphor knows there is no finger;
          there is no moon.
        </p>
      </div>
      <div className="content">
        <h2 className="content__title" data-splitting data-effect12>
          <span className="font-9 font-height">Night Time</span>
        </h2>
      </div>
      <div className="content">
        <p>
          Returning to my native village after many years’ absence: I put up at
          a country inn and listen to the rain. One robe, one bowl is all I
          have. I light incense and strain to sit in meditation; All night a
          steady drizzle outside the dark window &mdash; Inside, poignant
          memories of these long years of pilgrimage.
        </p>
      </div>
      <div className="content">
        <h2 className="content__title" data-splitting data-effect13>
          <span className="font-5">Megascrapers</span>
        </h2>
      </div>
      <div className="content">
        <p>
          The city lights flicker and gleam, But true peace is found in
          stillness. A leaf falling, a drop of dew, Remind us to let go and find
          beauty in the moment. The rat race of desire, A never-ending cycle of
          pain, Why chase after illusions, When true happiness is found within.
          Like a fish swimming in the depths of a clear pond, We must dive deep
          within ourselves, To discover the pearl of true contentment. So let us
          cast aside our wants and needs, And find solace in simplicity.
        </p>
      </div>
      <div className="content">
        <h2 className="content__title" data-splitting data-effect14>
          <span className="font-11">Futuristic</span>
        </h2>
      </div>
      <div className="content">
        <p>
          The universe is a vast and mysterious place, and yet everything is
          interconnected, everything is energy. Einstein&apos;s theory of
          relativity tells us that matter and energy are interchangeable, that
          everything is made up of tiny particles of energy vibrating at
          different frequencies. And this means that every living being, every
          rock, every star, every molecule is connected by an invisible web of
          energy.
        </p>
      </div>
      <div className="content">
        <h2 className="content__title" data-splitting data-effect15>
          <span className="font-10">Unintelligible</span>
        </h2>
      </div>
      <div className="content">
        <p>
          It is not easy to let go of our attachment to material possessions and
          desires. It takes discipline, focus and a certain level of detachment
          from the world around us. But by taking the time to slow down and
          appreciate the beauty of nature, and by quieting the mind and
          listening to the inner voice, we can find the path to true
          fulfillment.
        </p>
      </div>
      <div className="intro">
        <p>
          <a className="line" href="index2.html">
            View more effects
          </a>
        </p>
      </div>
    </>
  );
}
