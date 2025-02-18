import type { Metadata } from "next";
import Navbar from "@/components/navbar"; // Adjust the path as needed
import Footer from "@/components/footer"; // Adjust the path as needed

export const metadata: Metadata = {
  title: "Projects | Matthew Enarle",
  description: "Explore Matthew Enarle's projects, showcasing his skills and expertise.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div >
      <Navbar />
      <main className="flex-grow p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
        {children} {/* The content specific to the Projects page */}
      </main>
      <Footer />
    </div>
  );
}
