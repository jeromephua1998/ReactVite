import React, { useState } from "react";
import { Grid, Pagination } from "@mui/material";
import "./disc.css";

const images = [
  { src: "https://www.actioncity.com.sg/cdn/shop/files/Untitleddesign_16_1800x1800.jpg?v=1702454181", description: "BE@RBRICK Robocop Murphy Head Ver. 1000%", discountprice: "$2050.00", price: "$1,699.90" },
  { src: "https://www.actioncity.com.sg/cdn/shop/files/LBWKxBearbrickRX-3ModelLimitedEdition1000_1800x1800.jpg?v=1702287343", description: "LBWK x BE@RBRICK RX-3 Model Limited Edition 1000%", discountprice: "$2050.00", price: "$1,699.90" },
  { src: "https://www.actioncity.com.sg/cdn/shop/files/Untitleddesign_7_b5e0c602-26cf-44c3-9256-0889c38892e5_1800x1800.png.jpg?v=1702455675", description: "BE@RBRICK Sorayama 2G Pink Gold Chrome 1000%", discountprice: "$2050.00", price: "$1,699.90" },
  { src: "https://www.actioncity.com.sg/cdn/shop/files/BearbrickManekinekoGoldCostumeEdition1000_1800x1800.webp.jpg?v=1702283720", description: "BE@RBRICK Manekineko Gold Costume Edition 1000%", discountprice: "$2050.00", price: "$1,699.90" },
  { src: "https://www.actioncity.com.sg/cdn/shop/files/Untitleddesign_15_61557cf2-783d-4d6c-95ca-aa672563b732_1800x1800.png.jpg?v=1702456535", description: "BE@RBRICK Tokyo Skytree Daruma 1000%", discountprice: "$2050.00", price: "$1,699.90" },
  { src: "https://www.actioncity.com.sg/cdn/shop/files/BearbrickWolverine_BrownVer._1000_1_1800x1800.jpg?v=1689833436", description: "BE@RBRICK Wolverine (Brown Ver.) 1000%", discountprice: "$2050.00", price: "$1,699.90" },
  { src: "https://www.actioncity.com.sg/cdn/shop/files/ezgif.com-webp-to-jpg_29_1800x1800.jpg?v=1687503272", description: "BE@RBRICK Snoopy Flying Ace 1000%", discountprice: "$2050.00", price: "$1,699.90" },
  { src: "https://www.actioncity.com.sg/cdn/shop/files/project1-6_4530956583099_1800x1800.jpg?v=1687508106", description: "BE@RBRICK My First B@by Jester 1000%", discountprice: "$2050.00", price: "$1,699.90" },
  { src: "https://www.actioncity.com.sg/cdn/shop/files/1045405929_1800x1800.jpg?v=1687511317", description: "BE@RBRICK BAPE Clear ABC Camo Shark Pink 1000%", discountprice: "$2050.00", price: "$1,699.90" },
  { src: "https://www.actioncity.com.sg/cdn/shop/files/1045405929_1800x1800.jpg?v=1687511317", description: "BE@RBRICK BAPE Clear ABC Camo Shark Pink 1000%", discountprice: "$2050.00", price: "$1,699.90" },
];

const itemsPerPage = 9; 

const Disc = () => {
  const [currentPage, setCurrentPage] = useState(1);

 
  const totalPages = Math.ceil(images.length / itemsPerPage);

 
  const currentImages = images.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {currentImages.map((item, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <div className="grid-image-container">
              <img src={item.src} alt={`Image ${index + 1}`} className="grid-img" />
              <p className="desc">{item.description}</p>
              <div className="price-container">
                <div className="discount-price">{item.discountprice}</div>
                <div className="price">{item.price}</div>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>

    

        <Pagination count={totalPages} page={currentPage} onChange={handlePageChange} color="primary" className="pg2"/>

    </div>
  );
};

export default Disc;