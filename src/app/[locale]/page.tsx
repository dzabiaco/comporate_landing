import { Html, Head, Main, NextScript } from "next/document";
import Header from "@/app/components/Header";
import {Fragment} from "react";
import {useTranslations} from "next-intl";
import TheHeader from "@/app/components/TheHeader";
import HomeSection from "@/app/components/HomeSection";
import FeaturesSection from "@/app/components/FeaturesSection";
import Benefits from "@/app/components/Benefits";
import CTA from "@/app/components/CTA";
import Pricing from "@/app/components/Pricing";
import FAQ from "@/app/components/FAQ";
import Subscribe from "@/app/components/Subscribe";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";


export default function Home() {
  return (
      <Fragment>
        {/* <Header/> */}
        <TheHeader/>
        <HomeSection/>
        <main className="main-content">
          <FeaturesSection/>
          <Benefits/>
          <CTA/>
          <Pricing/>
          <FAQ/>
          <Subscribe/>
          <Contact/>
        </main>
        <Footer/>
      </Fragment>
  );
}
