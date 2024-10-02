"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Link from "next/link";

export default function Page() {
  useEffect(() => {
    const WebFont = require("webfontloader");
    const Splitting = require("splitting");

    gsap.registerPlugin(ScrollTrigger);

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
      // initialize splitting
      Splitting();

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
        // start Lenis (smooth scrolling)
        initSmoothScrolling();
        // start GSAP Scroll Triggers
        scroll();
      });
    };

    const boot = () => {
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
          We are uncovering the bitter truth and
          <br />
          the better way of software development
          <br />
          by improving The Agile Manifesto,
          <br />
          by adding a new valuable values.
          <br />
          <br />
          Through this work we have come to these values and conclusions,
        </p>
      </div>
      <div className="content">
        <h2
          className="content__title content__title--small"
          data-splitting
          data-effect1
        >
          <span className="font-4">Result</span>
          <span className="font-3">Driven</span>
          <span className="font-3">Development</span>
        </h2>
        <p>
          Prioritize results over strict adherence to processes or methods. The
          team is measured on what they accomplish, not how they get there
        </p>
        <p>
          Each sprint is defined by clear, measurable targets. The team is free
          to manage their time and workload however they choose, as long as they
          meet those targets by the end of the sprint. This fosters trust and
          autonomy while maintaining focus on delivering value.
        </p>
        <p>
          If someone chooses to take extra time off during the week, they can
          still complete their tasks at their own pace, as long as the
          agreed-upon result is delivered by the deadline.
        </p>
      </div>
      <div className="content">
        <h2 className="content__title" data-splitting data-effect2>
          <span className="font-2">Building Trust</span>
          <span className="font-4">over Restricting Rules</span>
        </h2>
      </div>
      <div className="content">
        <p>
          Foster autonomy and accountability within the team by creating a
          culture of trust rather than relying on rigid rules and regulations.
          Instead of micromanaging or enforcing strict policies, team members
          are trusted to make responsible decisions and manage their own work
          effectively.
          <br />
          <br />
          Encourage an environment where team members feel empowered to take
          initiative and ownership of their work. Trust is built through
          transparency, open communication, and mutual respect, while excessive
          rules are minimized to prevent stifling creativity or flexibility.
          <br />
          <br />
          Instead of enforcing mandatory check-ins or monitoring working hours,
          the team is trusted to manage their time and communicate any issues
          proactively. This approach leads to more freedom, as long as the
          results are achieved.
        </p>
      </div>
      <div className="content content--full">
        <h2 className="content__title" data-splitting data-effect4>
          <span className="font-larger">Error as a value</span>
        </h2>
      </div>
      <div className="content">
        <p>
          <i>Mistakes are not failures but valuable learning experiences</i>{" "}
          &mdash; This mindset encourages experimentation, innovation, and
          continuous improvement by allowing the team to make errors without
          fear of punishment. The focus is on learning from these mistakes to
          avoid repeating them and finding new ways to improve.
        </p>
        <p>
          Create a culture where team members are not afraid to take risks or
          try new approaches, knowing that if they make a mistake, it will be
          treated as an opportunity to learn and refine their methods. Encourage
          open discussion of errors in retrospectives, so that lessons are
          shared across the team.
        </p>
        <p>
          Instead of penalizing a team member for a failed experiment or a bug
          in the code, the team could conduct a &quot;post-mortem&quot; analysis
          to identify what went wrong, how it can be fixed, and what can be done
          to prevent similar issues in the future. This shifts the focus from
          blame to problem-solving.
        </p>
      </div>
      <div className="content">
        <h2 className="content__title" data-splitting data-effect8>
          <span className="font-8">Simplicity</span>
          <span className="font-8">over</span>
          <span className="font-8">Complexity</span>
        </h2>
      </div>
      <div className="content">
        <p>
          Embrace simplicity in both design and execution, reducing unnecessary
          complexity wherever possible. The simplest solution is often the best,
          as it leads to faster delivery, easier maintenance, and fewer errors.
          This value encourages the team to focus on what is essential and
          eliminate unnecessary steps or features that don’t contribute to the
          goal.
        </p>
        <p>
          Teams should constantly assess their work for opportunities to
          simplify processes, designs, or workflows. By focusing on simplicity,
          you ensure that energy is directed toward delivering value rather than
          managing unnecessary complexity.
        </p>
        <p>
          When planning features or solving problems, the team should ask,
          &quot;Is there a simpler way to achieve this?&quot; Simplifying user
          flows, reducing dependencies, and using lightweight tools are all ways
          to keep complexity in check.
        </p>
      </div>
      <div className="intro">
        <p>
          <Link
            className="line"
            href="https://agilemanifesto.org"
            target="_blank"
          >
            The Agile Manifesto
          </Link>
          <br />
          <br />
          <Link
            className="line"
            href="https://agilemanifesto.org"
            target="_blank"
          >
            Our Principle
          </Link>
          <br />
          <br />
          <Link
            className="line"
            href="https://agilemanifesto.org"
            target="_blank"
          >
            Why Lazuardy Manifesto?
          </Link>
        </p>
      </div>
      <div className="intro">
        <p>
          <span>Ezra Lazuardy</span>
          <br />
          <br />
          <span>Bintang Kumarasakti</span>
          <br />
          <br />
          <span>Daffa Abhyasa</span>
          <br />
          <br />
          <br />
          <br />
          <code>Signed at 01/10/2024</code>
        </p>
      </div>
    </>
  );
}
