// 📂 src/components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-blue-600 text-white py-3 px-6">
            <div className="max-w-5xl mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl font-bold">Shop</Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6">
                    <Link href="/electronics" className="hover:underline">Electronics</Link>
                    <Link href="/clothes" className="hover:underline">Clothes</Link>
                    <Link href="/all" className="hover:underline">All Categories</Link>
                </div>

                {/* Mobile Menu Button */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl">
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-blue-700 p-4 flex flex-col space-y-3">
                    <Link href="/electronics" className="hover:underline" onClick={() => setIsOpen(false)}>
                        Electronics
                    </Link>
                    <Link href="/clothes" className="hover:underline" onClick={() => setIsOpen(false)}>
                        Clothes
                    </Link>
                    <Link href="/all" className="hover:underline" onClick={() => setIsOpen(false)}>
                        Clothes
                    </Link>

                </div>
            )}
        </nav>
    );
}
