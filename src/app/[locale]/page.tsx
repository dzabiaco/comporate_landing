import { Html, Head, Main, NextScript } from "next/document";
import Header from "@/app/components/Header";
import HomeSection from "@/app/components/HomeSection";
import {Fragment} from "react";
import {useTranslations} from "next-intl";
import About from "@/app/components/About";
import Skills from "@/app/components/Skills";
import Services from "@/app/components/Services";
import Testimonials from "@/app/components/Testimonials";
import Blog from "@/app/components/Blog/Blog";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
      <Fragment>
        <Header/>
        <HomeSection/>
        <About/>
        {/*<Skills/>*/}
        <Services/>
        <Testimonials/>
          {/*<Blog/>*/}
          <Contact/>
          <Footer/>
      </Fragment>
  );
}
