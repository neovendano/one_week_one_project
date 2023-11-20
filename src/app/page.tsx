import Link from "next/link";
import {Header} from "@/components/PageSections/Header/Header";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Link href={`/about`}>About</Link>
    </main>
  )
}
