function IconCard({ imgSrc, imgAlt, text }) {  
    return (  
        <div className="flex flex-col items-center">  
            <img src={imgSrc} alt={imgAlt} className="w-12 h-12 mb-2" />  
            <span>{text}</span>  
        </div>  
    );  
} 
export default IconCard;