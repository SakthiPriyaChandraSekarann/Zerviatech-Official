import Image from "next/image";
import Header from "./Components/header";
import LogoCarousel from "./Components/logocarsoul";
import Abouthome from "./Components/abouthome";
import Services from "./Components/services";
import Products from "./Components/products";
import TestimonialCarousel from "./Components/testimonialcarousel";
import Banner from "./Components/banner";

export default function Home() {
  return (
    <div>
      <Banner />
      <LogoCarousel />
      <Abouthome />
      <Services />
      <Products />
      <TestimonialCarousel />
    </div>
  );
}
