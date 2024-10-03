import renderImgWpp from '../assets/img/footer/wpp-msg.png';

export function FloatingButton() {
    return (
        <div className="flex flex-col justify-center items-end w-full max-w-[520px] h-auto pr-4 pb-4 drop-shadow-md animate-bounce">
            <img 
                href=""
                target={""}
                className="w-[90%] h-auto max-w-[90%] md:max-w-[65%] lg:max-w-[40%]"
                src={renderImgWpp} 
                alt="" 
            />
        </div>
    )
}