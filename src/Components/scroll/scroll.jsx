import React from "react";
import "./scroll.css";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const images = [
  { id: 1,name: "Bearbrick 1", img: "https://www.actioncity.com.sg/cdn/shop/files/1_4d1635a9-0b59-4448-b057-6b77f05b0806_1800x1800.jpg?v=1716865610" },
  { id: 2, name: "Bearbrick 1", img: "https://www.actioncity.com.sg/cdn/shop/files/Untitleddesign_3_83e3c87f-b762-49d6-b2e3-00272b022b80_1800x1800.jpg?v=1704360790" },
  { id: 3, name: "Bearbrick 1", img: "https://scarce.co/cdn/shop/products/bear_Mazinger-Z_400.jpg?v=1690244271" },
  { id: 4, name: "Bearbrick 1", img: "https://www.actioncity.com.sg/cdn/shop/files/1_4bc3e121-894f-49b5-904e-9b0eb412fc80_1800x1800.jpg?v=1711438947" },
  { id: 5,name: "Bearbrick 1", img: "https://www.actioncity.com.sg/cdn/shop/files/0102_180527_fwfwk6_y_3_6f32035f-4942-4c94-a3d6-0208d8f89281_1800x1800.jpg?v=1687504557" },
  { id: 6,name: "Bearbrick 1", img: "https://www.actioncity.com.sg/cdn/shop/files/0026_170424_ckgya3_h_1800x1800.jpg?v=1687504041" },
  { id: 7,name: "Bearbrick 1", img: "https://www.actioncity.com.sg/cdn/shop/files/0009_180827_vmug90_y_3_1800x1800.jpg?v=1687504370" },
];

function Scroll() {
  const slideLeft = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 400;
  };

  const slideRight = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 400;
  };

  return (
    <div className="scroll-wrapper">
      <MdChevronLeft className="arrow" onClick={slideLeft} size={70} />
      <div id="slider" className="scroll-container">
        {images.map((item) => (
          <img
            key={item.id}
            className="image"
            src={item.img}
            alt={`Item ${item.id}`}
          />
        ))}
      </div>
      <MdChevronRight className="arrow" onClick={slideRight} size={70} />
    </div>
  );
}

export default Scroll;