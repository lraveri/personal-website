import Link from "next/link";
import NavButton from "@/components/navbar/NavButton";

export default function Navbar() {
    return (
        <nav className="w-full bg-black text-white py-4 border-b border-gray-500">
            <div className="container mx-auto flex justify-center items-center">
                <div className="flex items-center space-x-4">
                    <NavButton href="/blog" label="Blog" />
                    <NavButton href="/projects" label="Projects" />
                    <NavButton href="/experience" label="Experience" />
                    <NavButton href="/about" label="About" />
                </div>
            </div>
        </nav>
    )
}