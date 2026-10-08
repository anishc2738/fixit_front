import Header from "@/components/Home/Header";
import ServiceCTA from "@/components/Services/ServiceCTA";
import ServiceRequest from "@/components/Services/ServiceRequestForm";
import ServiceHero from "@/components/Services/ServiceHero";
export default function ServicePage() {
    return (
            <>
            <Header />
            <ServiceHero />
            <ServiceRequest />
            <ServiceCTA />
            </>
            );

}