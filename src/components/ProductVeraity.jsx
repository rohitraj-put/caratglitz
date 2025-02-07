import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function ProductVariety() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  const images = [
    {
      src: "https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2022/04_april/mobilesubcategory/new/fast-ships-2.gif",
      alt: "Fast Shipping",
    },
    {
      src: "https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2024/05_may/india-homepage/focus-block/best-seller.jpg",
      alt: "Best Seller",
    },
    {
      src: "https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2024/05_may/india-homepage/focus-block/new-arrivals.jpg",
      alt: "New Arrivals",
    },
    {
      src: "https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2024/02_feb/ind-homepage/category-slider/solitare.jpg",
      alt: "Solitare",
    },
    {
      src: "https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2024/02_feb/ind-homepage/category-slider/Anklet.jpg",
      alt: "Anklet",
    },
    {
      src: "https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2022/04_april/mobilesubcategory/new/Bangle-1.jpg",
      alt: "Bangle",
    },
    {
      src: "https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2022/04_april/mobilesubcategory/new/Offer.jpg",
      alt: "Offer",
    },
    {
      src: "https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2024/02_feb/ind-homepage/category-slider/Mangalsutra.jpg",
      alt: "Mangalsutra",
    },
    {
      src: "https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2022/04_april/mobilesubcategory/new/Chain-1.jpg",
      alt: "Chain",
    },
    {
      src: "https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2022/04_april/mobilesubcategory/new/band.jpg",
      alt: "Band",
    },
  ];

  return (
    <div className="product_variety">
      {images.map((image, index) => (
        <Link to={"#"} key={index}>
          <div
            className="variety_box rounded-full cursor-pointer overflow-hidden w-[6rem] h-[6rem] max-lg:w-[4rem] max-lg:h-[4rem]"
            key={index}
          >
            <img src={image.src} alt={image.alt} />
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductVariety;
