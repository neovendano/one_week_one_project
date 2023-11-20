import Link from "next/link";
import {Header} from "@/components/PageSections/Header/Header";

export default function About() {
  return (
    <main className="flex flex-col items-center px-24 gap-24">
      <h2 className={`text-5xl`}>
        About platform
      </h2>

      <p className={`text-2xl`}>
        {`
            I\`ve got an idea, while I was in job seeking process: 
            employers refuse because of lack of my experience and portfolio projects,
            and I don\'t have any practice when I wait for interviews and new test tasks.
            So what if I create as much pet projects as I can?
            Can I create new project EVERY WEEK?
          `}
      </p>

      <h3 className={`text-4xl mb-16`}>
        One week - One project
      </h3>

      <p className={`text-2xl`}>
        {`
            This website will be a platform for publishing my weekly projects -
            some kind of web-portfolio.
            Today is Wednesday 15.11.2023, 1st day of OWOP,
            and my first campaign will be basic version of this website.
          `}
      </p>

      <div className={`text-2xl`}>
        <p>
          My main goals as a participant of OWOP:
        </p>

        <ul>
          <li>- Expand my portfolio with a HUGE amount of code</li>
          <li>- Test my working speed and proficiency</li>
          <li>- Upgrade my skills by studying new technologies and practicing with already known ones</li>
          <li>- Train creativity: which app should i develop next week</li>
          <li>- Train creativity: which app should i develop next week</li>
          <li>- Develop this platform as some sort of my own business card</li>
        </ul>
      </div>
    </main>
  );
}