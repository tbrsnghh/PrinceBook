import React from 'react'
const BannerMini = ({ src, alt }) => (
    <div className="flex-1">
        <img src={src} alt={alt} className="w-full rounded-lg" />
    </div>
);

const PromotionCard = ({ bgColor, imgSrc, imgAlt, buttonText }) => (
    <div className={`${bgColor} text-white p-4 rounded-lg`}>
        <img src={imgSrc} alt={imgAlt} className="w-full rounded-lg mb-2" />
        <button className="bg-red-700 w-full py-2 rounded-lg">{buttonText}</button>
    </div>
);

const IconCard = ({ imgSrc, imgAlt, text }) => (
    <div className="flex flex-col items-center">
        <img src={imgSrc} alt={imgAlt} className="w-12 h-12 mb-2" />
        <span>{text}</span>
    </div>
);

const Banner = () => {
    return (
        <div className="bg-white p-4 text-black">
            <div className="flex justify-center mb-4">
                <div className="w-full max-w-6xl">
                    <div className="flex space-x-4">
                        <BannerMini src="https://cdn0.fahasa.com/media/magentothem/banner7/TrangChuongTrinhThang9__HeroBanner_TrungThu_SlideBanner_840x320_2.jpg" alt="Hot Wheels banner with cars" />
                        <BannerMini src="https://cdn0.fahasa.com/media/wysiwyg/Thang-09-2024/Resize_TrangDoiTacThang09_SubBanner_392x156.jpg" alt="Promotion banner for September" />
                    </div>
                    <div className="flex space-x-4 mt-4">
                        <BannerMini src="https://cdn0.fahasa.com/media/magentothem/banner7/Trangbopviet_0924_840X320.jpg" alt="Promotion banner for VNPay" />
                    </div>
                    <div className="grid grid-cols-3 gap-4 mt-4">
                        <PromotionCard
                            bgColor="bg-black"
                            imgSrc="https://placehold.co/300x150"
                            imgAlt="Colorful Mid-Autumn Festival books"
                            buttonText="MUA NGAY"
                        />
                        <PromotionCard
                            bgColor="bg-black"
                            imgSrc="https://placehold.co/300x150"
                            imgAlt="Back to school products"
                            buttonText="MUA NGAY"
                        />
                        <PromotionCard
                            bgColor="bg-black"
                            imgSrc="https://placehold.co/300x150"
                            imgAlt="Mid-Autumn Festival toys with 50% discount"
                            buttonText="MUA NGAY"
                        />
                        <PromotionCard
                            bgColor="bg-white"
                            imgSrc="https://placehold.co/300x150"
                            imgAlt="Back to school book discounts"
                            buttonText="MUA NGAY"
                            borderColor="border-black"
                            buttonTextColor="text-black"
                        />
                    </div>
                    <div className="flex justify-around mt-4">
                        <IconCard imgSrc="https://placehold.co/50x50" imgAlt="Phá Cỗ Trăng Rằm icon" text="Phá Cỗ Trăng Rằm" />
                        <IconCard imgSrc="https://placehold.co/50x50" imgAlt="MCBooks icon" text="MCBooks" />
                        <IconCard imgSrc="https://placehold.co/50x50" imgAlt="Balo icon" text="Balo" />
                        <IconCard imgSrc="https://placehold.co/50x50" imgAlt="Sản Phẩm Được Trợ Giá icon" text="Sản Phẩm Được Trợ Giá" />
                        <IconCard imgSrc="https://placehold.co/50x50" imgAlt="Manga icon" text="Manga" />
                        <IconCard imgSrc="https://placehold.co/50x50" imgAlt="Flash Sale icon" text="Flash Sale" />
                        <IconCard imgSrc="https://placehold.co/50x50" imgAlt="Mã Giảm Giá icon" text="Mã Giảm Giá" />
                        <IconCard imgSrc="https://placehold.co/50x50" imgAlt="Back to School icon" text="Back to School" />
                        <IconCard imgSrc="https://placehold.co/50x50" imgAlt="Phiên Chợ Sách Cũ icon" text="Phiên Chợ Sách Cũ" />
                        <IconCard imgSrc="https://placehold.co/50x50" imgAlt="Sản Phẩm Mới icon" text="Sản Phẩm Mới" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner

