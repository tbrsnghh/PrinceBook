function PromotionCard({ bgColor, imgSrc, imgAlt, buttonText }) {  
    return (  
        <div className={`${bgColor} text-white p-4 rounded-lg`}>  
            <img src={imgSrc} alt={imgAlt} className="w-full rounded-lg mb-2" />  
            <button className="bg-red-700 w-full py-2 rounded-lg">{buttonText}</button>  
        </div>  
    );  
}  
export default PromotionCard;