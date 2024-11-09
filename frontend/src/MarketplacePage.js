import React, { useState } from "react";

const MarketplacePage = () => {
  const [marketplaceData, setMarketplaceData] = useState([
    {
      user: "John Doe",
      photo:
        "https://media.istockphoto.com/id/495357936/photo/empy-liquor-bottle-on-a-white-background.jpg?s=1024x1024&w=is&k=20&c=8Owoft9xu_9Oo-hiTHHU0ASwLrsulcY7oSC5ur6gtP0=",
      recyclingItem: "Glass Bottles",
      bidAmount: 120.0,
      price: 150.0,
      volume: 1000,
      value: 1.50,
    },
    {
      user: "Emma Patel",
      photo:
        "https://www.thecarycompany.com/media/catalog/product/7/o/7oz_200ml_clear-pp-plastic-round-tamper-evident-container_89mm_34wrc7_1.jpg?quality=95&fit=bounds&height=700&width=700&canvas=700:700",
      recyclingItem: "Plastic Containers",
      bidAmount: 250.0,
      price: 2700.0,
      volume: 800,
      value: 2.20,
    },
    {
      user: "Michael Brown",
      photo:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSSDSZNIw-r3BLs9gkX5XdZmDSJW4DQHk9TkH_J_bwKKxha9eznbPFexm3ahvU649l5u7ETf14opXF6-uP0aIJoJ6qwtnke",
      recyclingItem: "Aluminum Cans",
      bidAmount: 95.0,
      price: 200.0,
      volume: 500,
      value: 1.10,
    },
    {
      user: "Sophia Johnson",
      photo:
        "https://i5.walmartimages.com/seo/UBoxes-Large-6-Pack-Moving-Cardboard-Boxes-20-x-20-x-15-inches_e5a12440-7d3c-4a38-b5da-440bbff9f262.d27a68f67553fda9021157e562c728df.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
      recyclingItem: "Cardboard Boxes",
      bidAmount: 180.0,
      price: 300.0,
      volume: 600,
      value: 1.80,
    },
    {
      user: "Lucas Wright",
      photo:
        "https://consolidatedresources.com/wp-content/uploads/2021/02/auto-11439_1280.jpg",
      recyclingItem: "Scrap Metal",
      bidAmount: 500.0,
      price: 600.0,
      volume: 1500,
      value: 9.00,
    },
    {
      user: "Nina Torres",
      photo:
        "https://i.etsystatic.com/8233493/r/il/06da49/3334985114/il_570xN.3334985114_mt6f.jpg",
      recyclingItem: "Paper Waste",
      bidAmount: 75.0,
      price: 100.0,
      volume: 2000,
      value: 2.00,
    },
    {
      user: "Tom Nguyen",
      photo:
        "https://www.macworld.com/wp-content/uploads/2023/01/how-to-fix-a-cracked-iphone-or-ipad-screen-main3.png",
      recyclingItem: "Electronic Waste",
      bidAmount: 300.0,
      price: 350.0,
      volume: 1200,
      value: 4.20,
    },
    {
      user: "Amelia Brown",
      photo:
        "https://cdn.shopify.com/s/files/1/0981/9342/products/aa-used-tire-paint-5-gal-super-concentrated-chemicals-261.webp",
      recyclingItem: "Used Tires",
      bidAmount: 220.0,
      price: 250.0,
      volume: 800,
      value: 2.10,
    },
  ]);

  const [showBidInput, setShowBidInput] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const handleBidClick = (index) => {
    if (showBidInput === index) {
      const newBidAmount = parseFloat(inputValue);
      if (newBidAmount && newBidAmount > marketplaceData[index].bidAmount) {
        // Update the bid amount for the specific item if the new bid is higher
        const updatedData = marketplaceData.map((item, i) =>
          i === index ? { ...item, bidAmount: newBidAmount } : item
        );
        setMarketplaceData(updatedData);
      } else if (
        newBidAmount &&
        newBidAmount <= marketplaceData[index].bidAmount
      ) {
        alert("The new bid must be higher than the current bid amount.");
      }
      setShowBidInput(null); // Hide the input field after updating
      setInputValue(""); // Reset input value
    } else {
      setShowBidInput(index); // Show input field for the clicked item
    }
  };

  return (
    <div className="flex flex-wrap justify-center">
      {marketplaceData.map((project, index) => (
        <div
          key={index}
          className="max-w-sm rounded overflow-hidden shadow-lg m-4"
        >
          <img
            className="w-full"
            src={project.photo}
            alt={`${project.user}'s upload`}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{project.user}</div>
            <p className="text-gray-700 text-base font-bold inline">Recycling Item: </p>
            <p className="text-gray-700 text-base inline">{project.recyclingItem}</p><br/>
            <p className="text-gray-700 text-base font-bold inline">Bid Amount: </p>
            <p className="text-gray-700 text-base inline">${project.bidAmount}</p><br/>
            <p className="text-gray-700 text-base font-bold inline">Price: </p>
            <p className="text-gray-700 text-base inline">${project.price}</p><br/>
            <p className="text-gray-700 text-base font-bold inline">Volume: </p>
            <p className="text-gray-700 text-base inline">{project.volume} units</p><br/>
            <p className="text-gray-700 text-base font-bold inline">Total Value: </p>
            <p className="text-gray-700 text-base inline">${project.value}</p>
          </div>
          <div className="px-6 pt-4 pb-2 flex items-center gap-2">
            {showBidInput === index && (
              <input
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="border p-1"
                placeholder="Enter amount..."
              />
            )}
            <button
              onClick={() => handleBidClick(index)}
              className="bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
            >
              {showBidInput === index ? "Submit" : "Bid"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MarketplacePage;
