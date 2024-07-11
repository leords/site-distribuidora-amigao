import React from "react"
import { Header } from "./components/header"
import { Carousel } from "./components/carousel"

export function App() {
  return (
    <div className=" w-[full] h-[1200px] flex flex-col items-center justify-start bg-red-light">
      <div  className="w-[80%] flex flex-col items-center justify-start">
        <Header />
        <Carousel />
      </div>
    </div>
  )
}
