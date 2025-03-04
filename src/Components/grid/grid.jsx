import React from "react";
import "./grid.css";

const categories = [
  {
    to: "categories/bearbricks",
    imgSrc:
      "https://www.giuseppezanotti.com/media/contentmanager/content/3_12.jpg",
    alt: "Bearbricks",
    description: "Bearbrick Collection",
  },
  {
    to: "categories/labubu",
    imgSrc:
      "https://images.lifestyleasia.com/wp-content/uploads/sites/3/2024/09/12171513/3_AI3zhoXLZR_1200x1200-806x806.jpg",
    alt: "Labubu",
    description: "Labubu Selection",
  },
  {
    to: "categories/exclusives",
    imgSrc:
      "https://media.karousell.com/media/photos/products/2024/5/20/super_rare_limited_edition_100_1716223487_fb6fbd79_progressive.jpg",
    alt: "Exclusives",
    description: "Molly Pop Marts",
  },
];

const Grid = () => {
  return (
    <div className="grid-container">
      {categories.map((category, index) => (
        <div key={index} className={`grid-item item-${index + 1}`}>
          <a href={category.to}>
            <div className="grid-overlay"></div>
            <img src={category.imgSrc} alt={category.alt} className="grid-image" />
            <p className="grid-description">{category.description}</p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Grid;
