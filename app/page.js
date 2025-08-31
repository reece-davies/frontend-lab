import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-xl">Page list</h1>
      <ul>
        <li><Link className="text-blue-600 underline hover:text-blue-800" href="/CenterDiv">CenterDiv</Link></li>
        <li><Link className="text-blue-600 underline hover:text-blue-800" href="/Navbars">Navbars</Link></li>
        <li><Link className="text-blue-600 underline hover:text-blue-800" href="/HeaderSection">HeaderSection</Link></li>
        <li><Link className="text-blue-600 underline hover:text-blue-800" href="/MerakiUIAlerts">MerakiUIAlerts</Link></li>
        <li><Link className="text-blue-600 underline hover:text-blue-800" href="/ReactBitsTesting">ReactBitsTesting</Link></li>
        <li><Link className="text-blue-600 underline hover:text-blue-800" href="/Flexbox">Flexbox</Link></li>
        <li><Link className="text-blue-600 underline hover:text-blue-800" href="/ResponsiveLayout">ResponsiveLayout</Link></li>
        <li><Link className="text-blue-600 underline hover:text-blue-800" href="/RadixIcons">RadixIcons</Link></li>
      </ul>
    </div>
  );
}
