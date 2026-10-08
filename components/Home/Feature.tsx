import {
  Boxes,
  Truck,
  ClipboardList,
  Users,
} from "lucide-react";

const features = [
  {
    name: "Inventory Management",
    description: "Track products and stock levels",
    icon: Boxes,
    iconColor: "text-[#2563EB]",
    iconBg: "bg-[#2563EB]/10",
  },
  {
    name: "Supplier Management",
    description: "Manage suppliers and purchases",
    icon: Truck,
    iconColor: "text-[#06B6D4]",
    iconBg: "bg-[#06B6D4]/10",
  },
  {
    name: "Order Management",
    description: "Manage orders efficiently",
    icon: ClipboardList,
    iconColor: "text-[#F59E0B]",
    iconBg: "bg-[#F59E0B]/10",
  },
  {
    name: "Customer Management",
    description: "Connect with your customers",
    icon: Users,
    iconColor: "text-[#16A34A]",
    iconBg: "bg-[#16A34A]/10",
  },
];

export default function Feature() {
  return (
    <section className="w-full bg-[#F8FAFC] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-5">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.name}
                className="group flex min-h-[170px] flex-1 basis-[240px] flex-col items-center justify-center rounded-xl border border-[#E2E8F0] bg-white px-5 py-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#2563EB]/30 hover:shadow-md"
              >
                {/* Icon */}
                <div
                  className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl ${feature.iconBg} transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon
                    size={28}
                    strokeWidth={1.8}
                    className={feature.iconColor}
                  />
                </div>

                {/* Name */}
                <h3 className="text-base font-semibold text-[#0F2747]">
                  {feature.name}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm text-[#64748B]">
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}