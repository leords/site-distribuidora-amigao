import { Header } from "./components/header"
import { CarouselBanner } from "./components/carousel"
import { CarouselCard } from "./components/carouselCard"
import { History } from "./components/history"
import { Numbers } from "./components/numbers"
import { Footer } from "./components/footer"
import { FloatingButton } from "./components/floatingButton"
import { Delivery } from "./components/delivery"

export function App() {
  return (
    <div className=" w-[full] h-auto flex flex-col items-center justify-start">
        <div className="w-full h-[10px] flex flex-col sticky items-end justify-end top-[96%] z-10">
          <FloatingButton />
        </div>
        <div id="header" className="w-[100%]">
          <Header />  
        </div>
        <div id="banner" className="w-[100%]">
          <CarouselBanner />  
        </div>
        <div id="history" className="w-[100%]">
          <History />  
        </div>
        <div id="numbers" className="w-[100%]">
          <Numbers />  
        </div>
        <div id="marcas" className="w-[100%]">
          <CarouselCard />  
        </div>
        <div id="delivery" className="w-[100%]">
          <Delivery />
        </div>
        <div className="w-[100%]">
          <Footer />  
        </div>
    </div>
  )
}
