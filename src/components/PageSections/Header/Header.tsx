import {FC} from "react";
import Link from "next/link";

export const Header: FC = () => {
  const headerStyles =
    `bg-gradient-to-b from-blue-bg-header to-blue-bg-main 
    flex justify-between items-center 
    p-16`;

  return (
    <header className={headerStyles}>
      <div>
        <Link href={`/`} className={`no-underline`}>
          <h1
            className={`text-4xl font-bold text-purple-main`}
          >
            OWOP
          </h1>
        </Link>
      </div>
      <nav className={`flex gap-x-16 text-2xl items-center`}>
        <Link href={`/about`}>About</Link>
        <Link href={`/contact`}>Contact</Link>
      </nav>
    </header>
  );
};