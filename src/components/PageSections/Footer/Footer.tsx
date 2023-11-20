import {FC} from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Footer: FC = () => {
  const footerStyles =
    `bg-gradient-to-t from-blue-bg-footer to-blue-bg-main
    flex justify-between items-center 
    px-8 py-1`;

  return (
    <footer className={footerStyles}>
      <div>
        <p>© One Week - One Project 2023. All rights are NOT reserved `cause I don`t know how to.</p>
      </div>
      <div className={`flex gap-2`}>
        <Link href={`https://github.com/neovendano`}>
          <FontAwesomeIcon icon={faSquareGithub} size={`2xl`}/>
        </Link>
        <Link href={`https://www.linkedin.com/in/viktor-kolesnyk-4a9924236/`}>
          <FontAwesomeIcon icon={faLinkedin} size={`2xl`}/>
        </Link>
      </div>
    </footer>
  )
}