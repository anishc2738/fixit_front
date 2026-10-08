import Header from "@/components/Home/Header"
import Footer from "@/components/Home/Footer"

export default function DashboradLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}