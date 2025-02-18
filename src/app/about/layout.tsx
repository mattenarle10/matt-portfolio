import type { Metadata } from "next";
import Navbar from "@/components/navbar"; // Adjust the path as needed
import Footer from "@/components/footer"; // Adjust the path as needed

export const metadata: Metadata = {
  title: "About | Matthew Enarle",
  description: "Learn more about Matthew Enarle, his skills, experiences, and projects.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <main>{children}</main> {/* The content specific to the About page */}
      <Footer />
    </div>
  );
}
