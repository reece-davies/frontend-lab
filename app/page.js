import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-xl">Page list</h1>
      <ul>
        <li><Link className="text-blue-600 underline hover:text-blue-800" href="/test">Itm1</Link></li>
        <li><Link className="text-blue-600 underline hover:text-blue-800" href="/">Itm2</Link></li>
        <li><Link className="text-blue-600 underline hover:text-blue-800" href="/">Itm3</Link></li>
      </ul>
    </div>
  );
}
