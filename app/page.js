"use client";

import Link from "next/link";
import { useEffect } from "react";
import { init } from "@/app/utils";

export default function Page() {
  useEffect(() => {
    init();
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
          <span className="intro__title-sub">for Software Development</span>
        </h1>
        <span className="intro__info">Please scroll and read moderately</span>
      </div>
      <div className="content content--highlight">
        <p>
          <br />
          <br />
          We are uncovering the bitter truth and
          <br />
          the better way for software development
          <br />
          by improving{" "}
          <Link
            href="https://agilemanifesto.org"
            className="line"
            target="_blank"
          >
            The Agile Manifesto.
          </Link>
          <br />
          <br />
          Through this work we have come to these 4 new valuable elements and
          conclusions.
          <br />
          <br />
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
          team is measured on what they accomplish, not how they get there.
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
      <div className="content">
        <p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          While we introduce those 4 new elements,
          <br />
          we also keep the 4 core:
          <br />
          <br />
          1. <u>Individuals and interactions</u> over processes and tools.
          <br />
          <br />
          2. <u>Working software</u> over comprehensive documentation.
          <br />
          <br />
          3. <u>Customer collaboration</u> over contract negotiation.
          <br />
          <br />
          4. <u>Responding to change</u> over following a plan.
          <br />
          <br />
          That is, while there is value in the items on the right,
          <br />
          we value the items on the left more.
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
            href="https://agilemanifesto.org/principles.html"
            target="_blank"
          >
            The Agile Manifesto&apos;s Principle
          </Link>
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
