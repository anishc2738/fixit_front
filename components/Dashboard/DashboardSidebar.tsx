"use client";

import { useState } from "react";
import {
  Menu,
  X,
  User,
  ClipboardList,
  Star,
  LogOut,
} from "lucide-react";

interface DashboardProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

export default function DashboardSidebar({
  activePage,
  setActivePage,
}: DashboardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handlePageChange = (page: string) => {
    setActivePage(page);
    setIsOpen(false);
  };

  const handleLogout = () => {
    console.log("Logout clicked");
  };

  return (
    <>
      {/* ================= MOBILE HAMBURGER ================= */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed left-4 top-[72px] z-40 rounded-lg bg-[#0F2747] p-3 text-white shadow-md lg:hidden"
        aria-label="Open dashboard menu"
      >
        <Menu size={22} />
      </button>

      {/* ================= MOBILE OVERLAY ================= */}
      {isOpen && (
        <button
          type="button"
          aria-label="Close dashboard menu"
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      {/* ================= SIDEBAR ================= */}
      <aside
        className={`
          bg-white border-r border-[#E2E8F0]

          /* MOBILE */
          fixed left-0 top-0 z-50
          h-screen w-[280px]
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}

          /* DESKTOP */
          lg:relative
          lg:left-auto
          lg:top-auto
          lg:z-auto
          lg:h-auto
          lg:w-[30%]
          lg:shrink-0
          lg:translate-x-0
          lg:transform-none
          lg:transition-none
        `}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between border-b border-[#E2E8F0] px-6 py-5">
          <div>
            <h2 className="text-xl font-bold text-[#0F2747]">
              My Account
            </h2>

            <p className="mt-1 text-sm text-[#64748B]">
              Manage your account
            </p>
          </div>

          {/* Mobile Close */}
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="rounded-lg p-2 text-[#64748B] transition hover:bg-[#F8FAFC] lg:hidden"
            aria-label="Close dashboard menu"
          >
            <X size={22} />
          </button>
        </div>

        {/* Menu */}
        <nav className="flex flex-col gap-2 p-5">
          {/* Profile */}
          <button
            type="button"
            onClick={() => handlePageChange("dashboard")}
            className={`flex w-full items-center gap-4 rounded-xl px-4 py-4 text-left transition ${
              activePage === "dashboard"
                ? "bg-[#EFF6FF] text-[#2563EB]"
                : "text-[#0F172A] hover:bg-[#F8FAFC]"
            }`}
          >
            <User size={21} />

            <div>
              <p className="font-semibold">Profile</p>
              <p className="text-xs text-[#64748B]">
                View your profile
              </p>
            </div>
          </button>

          {/* My Requests */}
          <button
            type="button"
            onClick={() => handlePageChange("requests")}
            className={`flex w-full items-center gap-4 rounded-xl px-4 py-4 text-left transition ${
              activePage === "requests"
                ? "bg-[#EFF6FF] text-[#2563EB]"
                : "text-[#0F172A] hover:bg-[#F8FAFC]"
            }`}
          >
            <ClipboardList
              size={21}
              className="text-[#2563EB]"
            />

            <div>
              <p className="font-semibold">My Requests</p>
              <p className="text-xs text-[#64748B]">
                View service requests
              </p>
            </div>
          </button>

          {/* My Ratings */}
          <button
            type="button"
            onClick={() => handlePageChange("reviews")}
            className={`flex w-full items-center gap-4 rounded-xl px-4 py-4 text-left transition ${
              activePage === "reviews"
                ? "bg-[#FFFBEB] text-[#F59E0B]"
                : "text-[#0F172A] hover:bg-[#F8FAFC]"
            }`}
          >
            <Star size={21} className="text-[#F59E0B]" />

            <div>
              <p className="font-semibold">My Ratings</p>
              <p className="text-xs text-[#64748B]">
                View your reviews
              </p>
            </div>
          </button>
        </nav>

        {/* Logout */}
        <div className="border-t border-[#E2E8F0] p-5">
          <button
            type="button"
            onClick={handleLogout}
            className="flex w-full items-center justify-center gap-3 rounded-xl border border-[#DC2626]/20 bg-red-50 px-4 py-3 font-semibold text-[#DC2626] transition hover:bg-red-100"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}