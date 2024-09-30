import Link from "next/link";


export default function Home() {
  return (
    <main className="m-10">
      <h1 className="text-4xl font-bold mb-5">CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="./week-2/" className="block hover:underline hover:text-green-500">Week 2 Assignment</Link>
      <Link href="./week-3/" className="block hover:underline hover:text-green-500">Week 3 Assignment</Link>
      <Link href="./week-4/" className="block hover:underline hover:text-green-500">Week 4 Assignment</Link>
    </main>
  );
}
