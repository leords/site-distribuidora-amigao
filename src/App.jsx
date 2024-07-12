import React from "react"
import { Header } from "./components/header"
import { CarouselBanner } from "./components/carousel"
import { CarouselCard } from "./components/carouselCard"

export function App() {
  return (
    <div className=" w-[full] h-[1200px] flex flex-col items-center justify-start">
      <div  className="w-[75%] h-auto flex flex-col items-center justify-start">
        <Header />
        <CarouselBanner />
        <CarouselCard />
      </div>
    </div>
  )
}
