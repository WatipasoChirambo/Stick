import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Map from "../components/Map";
import Hero from "../components/Hero";
import Levels from "../components/Levels";
import Trending from "../components/Trending";
import Footer from "../components/Footer";
import ReMembers from "../components/ReMembers";
import Brief from "../components/Brief";
import Services from "../components/Services/Services";
import Requirements from "../components/Extras/Requirements";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero className="px-10" />
      <Levels />
      <Services />
      <Trending />
      <Requirements />
      <ReMembers />
      <div className="lg:hidden">
        <Brief />
      </div>
      <Footer />
    </div>
  );
}
