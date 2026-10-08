import Header from "@/components/Home/Header";
import WhoWeAre from "@/components/About/Whoweare";
import ForSuppliers from "@/components/About/ForSuppliers";
import ForCustomers from "@/components/About/ForCustomers";
import AboutCTA from "@/components/About/AboutCTA";


export default function AboutPage() {
    return (
        <>
        <Header />
        < WhoWeAre />
        <ForCustomers />
        <ForSuppliers />
        <AboutCTA />
        </>
    );
}