import React from "react";

function Head() {

  const navItems = [
    {
      name:"swiggy corporate",
      image:"fi-rr-shopping-bag"

    },
    {
      name:"Search",
      image:"fi-rr-search"

    },
    {
      name:"Offers",
      image:"fi-rr-badge-percent"

    },
    {
      name:"Help",
      image:"fi-sr-life-ring"

    },
    {
      name:"Sign in",
      image:"fi-rr-user"

    },
    {
      name:"Cart",
      image:"fi-rr-shopping-cart-add"

    },
 
  ];
  

  return (
    <div className="w-full shadow-md h-20 flex justify-center items-center">
      <div className="w-[80%] flex justify-between">
        <div className="flex items-center">
          <img
            className="w-22"
            src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png"
            alt=""
          />
          <div className="flex items-center gap-2">
            <p className="font-medium border-b-2 border-black">others</p>
            <i className="fi text-xl text-orange-500 mt-2.5 fi-rs-angle-small-down"></i>
          </div>
        </div> 

        <div className="flex  items-center gap-14">
          {navItems.map((data, i) => {
            return (
              <div className="flex items-center gap-3" key={i}>
                <i className={"mt-1 fi " + data.image}></i>
                <p className="text-lg font-medium text-gray-700 ">{data.name}</p>
              </div>
              )
            })}
        </div>
      </div>
    </div>
  );
}

export default Head;
