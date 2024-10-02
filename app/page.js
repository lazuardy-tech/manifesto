"use client";

import { useEffect } from "react";
import { boot } from "@/app/utils";
import Link from "next/link";

export default function Page() {
  useEffect(() => boot());

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
