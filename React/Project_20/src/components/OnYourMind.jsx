import React, { useEffect, useState } from "react";
// import { Data } from "../utils/Data";

function OnYourMind() {
const [data, setData] = useState([]);

  const [Value, setValue] = useState(0)
  const [scrollWidth, setScrollWidth] = useState(0)


  

 
  useEffect(() => {

    async function fetchData() {
    try {
      const res = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
        {
          headers: {
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124.0.0.0 Safari/537.36",
            "Accept": "application/json",
            "Referer": "https://www.swiggy.com/",

          },
        }
      );

      const result = await res.json();
      console.log(result)
   
      const SData = result?.data?.cards[0]?.card?.card?.imageGridCards?.info || [];
      setData(SData);
      console.log("Sdata =",SData)
    
      const containtWidth = (window.innerWidth * 0.8)
      const totalWidth = SData.length * 174;
      setScrollWidth(totalWidth - containtWidth)
      
   
    
    // setData(result);
  } catch (err) {
    console.error("Error fetching browser-style data:", err);
  }
}

fetchData();


  }, []);


  function handlePrev() {
    setValue((prev) => Math.max(prev - 700, 0))
  }

  function handleNext() {
    // const containtWidth = (window.innerWidth * 0.8);
    // const totalWidth = data.length * 176;
    // const scrollWidth = totalWidth - containtWidth;


    setValue((prev) => Math.min(prev +  700, scrollWidth) )
  }
  return (
    <div>
         <div className="flex justify-between mt-3">
        
        
          <h1 className="font-medium text-2xl">What's on your mind?</h1>
          <div className="flex gap-3">
            <div
              onClick={handlePrev}
              className={
                `bg-gray-200 rounded-full w-8 h-8 flex justify-center items-center ` +
                (Value <= 0 ? "bg-gray-50" : "bg-gray-300")
              }
            >
              <i
                className={
                  `fi text-xl cursor-pointer fi-rr-arrow-small-left ` +
                  (Value <= 0 ? "text-gray-300" : "text-gray-800")
                }
              ></i>
            </div>
            <div
              onClick={handleNext}
              className={
                `bg-gray-200 rounded-full w-8 h-8 flex justify-center items-center ` +
                (Value >= scrollWidth ? "bg-gray-50" : "bg-gray-300")
              }
            >
              <i
                className={
                  `fi text-xl cursor-pointer fi-rr-arrow-small-right ` +
                  (Value >= scrollWidth ? "text-gray-300" : "text-gray-800")
                }
              ></i>
            </div>
          </div>
          </div>
        <div
          className="flex mt-2 transform duration-600"
          style={{ transform: `translateX(-${Value}px)` }}
        >
          {data.map((item, i) => (
            <img
              className="w-[174px]"
              key={i}
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_265,h_310/${item.imageId}`}
              alt=""
            />
          ))}
        </div>
        <hr className="border border-gray-200" />
      </div>
  );
}

export default OnYourMind;
