"use client";

import { useState } from "react";

import DashboardSidebar from "@/components/Dashboard/DashboardSidebar";
import DashboardMain from "@/components/Dashboard/DashboardMain";
import DashboardRequests from "@/components/Dashboard/Requests";
import DashboardReviews from "@/components/Dashboard/Reviews";

export default function DashboardPage() {
  const [activePage, setActivePage] = useState("dashboard");

  return (
    <div className="flex w-full items-start bg-[#F8FAFC]">
      <DashboardSidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <div className="w-full lg:w-[70%]">
        {activePage === "dashboard" && <DashboardMain />}

        {activePage === "requests" && <DashboardRequests />}

        {activePage === "reviews" && <DashboardReviews />}
      </div>
    </div>
  );
}