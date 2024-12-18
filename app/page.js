import Link from "next/link";


export default function Home() {
  return (
    <main className="flex m-20 p-10">
      <div>
      <h1 className="text-4xl font-bold mb-5">CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="./week-2/" className="block hover:underline hover:text-green-500">Week 2 Assignment</Link>
      <Link href="./week-3/" className="block hover:underline hover:text-green-500">Week 3 Assignment</Link>
      <Link href="./week-4/" className="block hover:underline hover:text-green-500">Week 4 Assignment</Link>
      <Link href="./week-5/" className="block hover:underline hover:text-green-500">Week 5 Assignment</Link>
      <Link href="./week-6/" className="block hover:underline hover:text-green-500">Week 6 Assignment</Link>
      <Link href="./week-7/" className="block hover:underline hover:text-green-500">Week 7 Assignment</Link>
      <Link href="./week-8/" className="block hover:underline hover:text-green-500">Week 8 Assignment</Link>
      <Link href="./week-9/" className="block hover:underline hover:text-green-500">Week 9 Assignment</Link>
      <Link href="./week-10/" className="block hover:underline hover:text-green-500">Week 10 Assignment</Link>
      </div>
    </main>
  );
}
