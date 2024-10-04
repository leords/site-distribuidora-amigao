
export function Card(Props) {
    return (
        <div className="flex flex-col items-center justify-center w-[360px] h-[240px] md:w-[300px] md:h-[220px] lg:w-[280px] lg:h-[200px] rounded-tl-2xl rounded-br-2xl p-4 border-1 border-gray-300 bg-white">
          <img 
            className="w-[240px] h-auto md:w-[200px] lg:w-[180px] object-contain" 
            src={Props.image} 
            alt="Imagem referente à marca." 
          />
        </div>
      )
}