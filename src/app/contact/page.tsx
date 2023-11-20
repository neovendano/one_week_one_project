import Link from "next/link";
import {Header} from "@/components/PageSections/Header/Header";
import {Footer} from "@/components/PageSections/Footer/Footer";

export default function About() {
  return (
    <main className="flex flex-col items-center px-16 gap-16">
      <h2 className={`text-5xl`}>
        Contact me
      </h2>

      <div className={`flex justify-between gap-16`}>
        <div className={`flex flex-col gap-8`}>
          <h3 className={`text-3xl`}>
            Viktor Kolesnyk
          </h3>
          <ul className={`text-2xl`}>
            <li>Frontend/Fullstack JS developer</li>
            <li>Computer Science Bachelor (currently - Master degree student)</li>
            <li>Part-time software developer in Mage Inc., known as Ironic</li>
          </ul>
        </div>

        <div className={`flex flex-col gap-8`}>
          <h3 className={`text-3xl`}>
            Contacts
          </h3>
          <ul className={`text-2xl`}>
            <li>
              {`Phone Number: `}
              <Link href={`tel:+380663483452`}>
                +380-66-348-34-52
              </Link>
            </li>
            <li>
              {`Mail: `}
              <Link href={`mailto:kolesnyk.vik.mi@gmail.com`}>
                kolesnyk.vik.mi@gmail.com
              </Link>
            </li>
            <li>
              {`GitHub: `}
              <Link href={`https://github.com/neovendano`}>
                neovendano
              </Link>
            </li>
            <li>
              {`LinkedIn: `}
              <Link href={`https://www.linkedin.com/in/viktor-kolesnyk-4a9924236/`}>
                Viktor Kolesnyk
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}