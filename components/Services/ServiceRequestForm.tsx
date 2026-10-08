"use client";

import { useState } from "react";
import { MapPin, Send, Loader2 } from "lucide-react";

export default function ServiceRequestForm() {
    const [locationLoading, setLocationLoading] = useState(false);
    const [location, setLocation] = useState("");

    const getLocation = () => {
        if (!navigator.geolocation) {
            alert("Location is not supported by your browser.");
            return;
        }

        setLocationLoading(true);
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;

                try {
                    const response = await fetch(
                        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
                    );

                    if (!response.ok) {
                        throw new Error("Failed to fetch address");
                    }

                    const data = await response.json();
                    const city =
                        data.address.city ||
                        data.address.town ||
                        data.address.municipality ||
                        data.address.village ||
                        "";
                    setLocation(city);
                } catch (error) {
                    setLocation(`${latitude}, ${longitude}`);
                    console.error(error);
                } finally {
                    setLocationLoading(false);
                }
            },
            () => {
                alert(
                    "Unable to get your location. Please allow location access."
                );
                setLocationLoading(false);
            }
        );


    };

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Connect this to your Django API later
        console.log("Service request submitted");
    };

    return (
        <section className="bg-[#F8FAFC] py-16 sm:py-20">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

                {/* Heading */}
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                        Request a Service
                    </p>

                    <h2 className="mt-3 text-3xl font-bold text-[#0F2747] sm:text-4xl">
                        Tell Us What Needs to Be Repaired
                    </h2>

                    <p className="mt-4 text-slate-600">
                        Fill out the form and provide your location. We will
                        help connect you with a suitable repair professional.
                    </p>
                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
                >
                    <div className="grid gap-6 sm:grid-cols-2">

                        {/* Name */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-[#0F2747]">
                                Name
                            </label>

                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                required
                                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-[#0F2747]">
                                Phone Number
                            </label>

                            <input
                                type="number"
                                name="phone"
                                placeholder="Enter your Phone Number"
                                required
                                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                            />
                        </div>

                        {/* Repair Problem */}
                        <div className="sm:col-span-2">
                            <label className="mb-2 block text-sm font-medium text-[#0F2747]">
                                What needs to be repaired?
                            </label>

                            <textarea
                                name="problem"
                                rows={4}
                                placeholder="Example: My washing machine is not spinning..."
                                required
                                className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                            />
                        </div>

                        {/* Address */}
                        <div className="sm:col-span-2">
                            <label className="mb-2 block text-sm font-medium text-[#0F2747]">
                                Address
                            </label>

                            <div className="flex flex-col gap-3 sm:flex-row">
                                <input
                                    type="text"
                                    name="address"
                                    value={location}
                                    onChange={(e) =>
                                        setLocation(e.target.value)
                                    }
                                    placeholder="Enter your address"
                                    required
                                    className="flex-1 rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                />

                                <button
                                    type="button"
                                    onClick={getLocation}
                                    disabled={locationLoading}
                                    className="flex items-center justify-center gap-2 rounded-lg border border-[#0F2747] px-5 py-3 text-sm font-medium text-[#0F2747] transition hover:bg-[#0F2747] hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    {locationLoading ? (
                                        <>
                                            <Loader2
                                                size={17}
                                                className="animate-spin"
                                            />
                                            Getting...
                                        </>
                                    ) : (
                                        <>
                                            <MapPin size={17} />
                                            Get My Location
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="mt-8 flex w-full items-center justify-center gap-2 rounded-lg bg-[#0F2747] px-6 py-3 font-medium text-white transition hover:bg-blue-700"
                    >
                        <Send size={18} />
                        Request Repair Service
                    </button>
                </form>
            </div>
        </section>
    );
}