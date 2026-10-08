"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, UserCircle, ChevronDown } from "lucide-react";
import GoogleSignIn from "../Google/GoogleLogin";
import { useAuth } from "../Auth/AuthProvider";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const { user,logout } = useAuth()

    const closeMobileMenu = () => {
        setIsOpen(false);


        setIsProfileOpen(false);
    };
    return (
        <header className="sticky top-0 z-50 w-full border-b border-[#E2E8F0] bg-white">
            <div className="flex h-16 w-full items-center justify-between px-4 sm:px-6 lg:px-8">

                {/* Logo */}
                <Link
                    href="/"
                    onClick={closeMobileMenu}
                    className="flex items-center gap-2"
                >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0F2747] text-sm font-bold text-white">
                        fixIT
                    </div>

                    <span className="text-xl font-bold text-[#0F2747]">
                        fixIT
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-8 md:flex">
                    <Link
                        href="/"
                        className="text-sm font-medium text-[#0F172A] hover:text-[#2563EB]"
                    >
                        Home
                    </Link>
                    <Link
                        href="/services"
                        className="text-sm font-medium text-[#0F172A] hover:text-[#2563EB]"
                    >
                        Services
                    </Link>
                    <Link
                        href="/suppliers"
                        className="text-sm font-medium text-[#0F172A] hover:text-[#2563EB]"
                    >
                        Suppliers
                    </Link>

                    <Link
                        href="/dashboard"
                        className="text-sm font-medium text-[#0F172A] hover:text-[#2563EB]"
                    >
                        Dashboard
                    </Link>

                    <Link
                        href="/about"
                        className="text-sm font-medium text-[#0F172A] hover:text-[#2563EB]"
                    >
                        About Us
                    </Link>

                    {/* Desktop Profile */}
                    <div className="relative">
                        <button
                            onClick={() => setIsProfileOpen(!isProfileOpen)}
                            className="flex items-center text-[#0F172A] hover:text-[#2563EB]"
                        >
                            <UserCircle size={22} />
                        </button>

                        {isProfileOpen && (
                            <div className="absolute right-0 top-10 w-48 rounded-lg border border-[#E2E8F0] bg-white p-2 shadow-lg">
                                <div className="flex items-center gap-2 border-b border-[#E2E8F0] px-3 py-2">
                                    <UserCircle size={28} />
                                    <span className="text-sm font-medium">
                                        {user ? user.name : "Guest"}
                                    </span>

                                </div>
                                {user ? (
                                    <div className="mt-2">
                                        <div className="mb-2 text-sm text-gray-700">
                                            {user.email}
                                        </div>

                                        <button
                                            type="button"
                                            onClick={() => {
                                                logout();
                                                setIsProfileOpen(false);
                                            }}
                                            className="w-full rounded-md bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                ) : (
                                    <Link
                                        href="/"
                                        className="mt-2 block"
                                        onClick={() => setIsProfileOpen(false)}
                                    >
                                        <GoogleSignIn />
                                    </Link>
                                )}
                            </div>
                        )}
                    </div>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => {
                        setIsOpen(!isOpen);
                        setIsProfileOpen(false);
                    }}
                    className="rounded-lg p-2 text-[#0F2747] hover:bg-[#F8FAFC] md:hidden"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <nav className="border-t border-[#E2E8F0] bg-white shadow-lg md:hidden">
                    <div className="flex flex-col gap-1 p-2">

                        <Link
                            href="/"
                            onClick={closeMobileMenu}
                            className="rounded-lg px-4 py-3 text-sm font-medium text-[#0F172A] hover:bg-[#F8FAFC] hover:text-[#2563EB]"
                        >
                            Home
                        </Link>
                        <Link
                            href="/services"
                            onClick={closeMobileMenu}
                            className="rounded-lg px-4 py-3 text-sm font-medium text-[#0F172A] hover:bg-[#F8FAFC] hover:text-[#2563EB]"
                        >
                            Service
                        </Link>
                        <Link
                            href="/suppliers"
                            onClick={closeMobileMenu}
                            className="rounded-lg px-4 py-3 text-sm font-medium text-[#0F172A] hover:bg-[#F8FAFC] hover:text-[#2563EB]"
                        >
                            Suppliers
                        </Link>
                        <Link
                            href="/dashboard"
                            onClick={closeMobileMenu}
                            className="rounded-lg px-4 py-3 text-sm font-medium text-[#0F172A] hover:bg-[#F8FAFC] hover:text-[#2563EB]"
                        >
                            Dashboard
                        </Link>

                        <Link
                            href="/about"
                            onClick={closeMobileMenu}
                            className="rounded-lg px-4 py-3 text-sm font-medium text-[#0F172A] hover:bg-[#F8FAFC] hover:text-[#2563EB]"
                        >
                            About Us
                        </Link>

                        {/* Mobile Profile */}
                        <button
                            onClick={() => setIsProfileOpen(!isProfileOpen)}
                            className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-[#0F172A] hover:bg-[#F8FAFC]"
                        >
                            <span className="flex items-center gap-2">
                                <UserCircle size={20} />
                                Account
                            </span>

                            <ChevronDown
                                size={18}
                                className={`transition-transform ${isProfileOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        {/* Mobile Profile Content */}
                        {isProfileOpen && (
                            <div className="mx-2 mb-2 rounded-lg bg-[#F8FAFC] p-3">
                                {user ? (
                                    <div className="flex items-center gap-2">
                                        <UserCircle size={20} />
                                        <span className="text-sm  font-medium text-[#0F172A]">
                                            {user.email}
                                        </span>
                                    </div>
                                ) : (
                                    <Link
                                        href="/"
                                        onClick={closeMobileMenu}
                                        className="block"
                                    >
                                        <GoogleSignIn />
                                    </Link>
                                )}
                            </div>
                        )}
                    </div>
                </nav>
            )}
        </header>
    );
}