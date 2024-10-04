import renderImgWpp from '../assets/img/footer/wpp-msg.png';

export function FloatingButton() {
    return (
        <div className="flex flex-col justify-center items-end w-full max-w-[200px] h-auto pr-2 pb-4 drop-shadow-md animate-bounce">
            <img 
                href=""
                target={""}
                className="w-[100%] h-auto"
                src={renderImgWpp} 
                alt="" 
            />
        </div>
    )
}