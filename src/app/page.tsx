import Navbar from "../components/navbar";
import HelloSection from "../components/sections/HelloSection";
import Projects from "../components/sections/Projects";
import AboutMe from "../components/sections/AboutMe";
import Contact from "../components/sections/Contact";
import Footer from "../components/footer";
import Head from "next/head";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home - Matthew Enarle</title>
      </Head>
      <Navbar />
      <section className="py-16 px-4 sm:px-8 lg:px-16">
        <HelloSection />
      </section>
      <section className="py-16 px-4 sm:px-8 lg:px-16">
        <Projects />
      </section>
      <section className="py-16 px-4 sm:px-8 lg:px-16">
        <AboutMe />
      </section>
      <section className="py-16 px-4 sm:px-8 lg:px-16">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
