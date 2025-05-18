import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar2() {
  return (
    <nav className="flex items-center justify-between p-4 bg-white rounded-full">
      <div className="text-xl font-bold">Clāšto</div>
      <div className="hidden md:flex space-x-8">
        <Link href="/" className="hover:text-gray-500">
          Home
        </Link>
        <Link href="/about" className="hover:text-gray-500">
          About
        </Link>
        <Link href="/collection" className="hover:text-gray-500">
          Collection
        </Link>
        <Link href="/feature" className="hover:text-gray-500">
          Feature
        </Link>
        <Link href="/contacts" className="hover:text-gray-500">
          Contacts
        </Link>
      </div>
      <button className="p-1 rounded-full bg-black text-white">
        <Menu size={24} />
      </button>
    </nav>
  );
}
