import Link from "next/link";


export default function Home() {
  return (
    <main>
      <h1 className="text-4xl font-bold mb-5">CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="./week-2/" className="block">Week 2 Assignment</Link>
      <Link href="./week-3/" className="block">Week 3 Assignment</Link>
    </main>
  );
}
