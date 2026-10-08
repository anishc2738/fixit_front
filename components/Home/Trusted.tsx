import Image from "next/image";
import { MapPin } from "lucide-react";

const suppliers = [
  {
    name: "ABC Electronics",
    address: "Kathmandu, Nepal",
    image: "/sup-1.jpg",
  },
  {
    name: "Tech World Nepal",
    address: "Lalitpur, Nepal",
    image: "/sup-2.png",
  },
  {
    name: "Smart Electronics",
    address: "Bhaktapur, Nepal",
    image: "/sup-3.png",
  },
  {
    name: "Digital Hub",
    address: "Pokhara, Nepal",
    image: "/sup-4.jpg",
  },
  {
    name: "Electro Mart",
    address: "Biratnagar, Nepal",
    image: "/sup-5.jpg",
  },
];

export default function Trusted() {
  return (
    <section className="w-full bg-white px-4 py-14 sm:px-6 lg:px-8">
      <div className="w-full">

        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#0F2747] sm:text-3xl">
            Our Trusted Suppliers
          </h2>

          <p className="mt-2 max-w-xl text-sm leading-6 text-[#64748B] sm:text-base">
            Explore trusted suppliers connected with our inventory network.
          </p>
        </div>

        {/* Horizontal Scroll */}
        <div className="flex gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

          {suppliers.map((supplier) => (
            <div
              key={supplier.name}
              className="group min-w-[250px] flex-shrink-0 overflow-hidden rounded-xl border border-[#E2E8F0] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#2563EB]/30 hover:shadow-md sm:min-w-[280px]"
            >

              {/* Supplier Image */}
              <div className="relative h-44 w-full overflow-hidden bg-[#F8FAFC]">
                <Image
                  src={supplier.image}
                  alt={`${supplier.name} supplier`}
                  fill
                  sizes="(max-width: 640px) 250px, 280px"
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              {/* Supplier Information */}
              <div className="p-5">

                <h3 className="text-base font-semibold text-[#0F2747]">
                  {supplier.name}
                </h3>

                <div className="mt-2 flex items-center gap-2 text-sm text-[#64748B]">
                  <MapPin
                    size={16}
                    className="flex-shrink-0 text-[#06B6D4]"
                  />

                  <span>{supplier.address}</span>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}