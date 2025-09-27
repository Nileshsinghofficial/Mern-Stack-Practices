import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function InPageNavigation({ teams, children, onTeamChange }) {
  const [activeTeam, setActiveTeam] = useState(0);

  const childrenArray = React.Children.toArray(children);

  let tabLineRef = useRef();
  let btnRef = useRef();

  useEffect(() => handleClick(0, btnRef.current), []);

  function handleClick(index, btn) {
    let { offsetWidth, offsetLeft } = btn;

    tabLineRef.current.style.width = offsetWidth + "px";
    tabLineRef.current.style.left = offsetLeft + "px";
    setActiveTeam(index);
    if (onTeamChange) {
      onTeamChange(index);
    }
  }

  return (
    <div className="w-full">
    <div className={"bg-blue-800 w-full  flex justify-between items-end " + (teams.length > 2 ? "h-[100px] " : "h-[50px] ")}>
      {teams.length > 2
        ? teams.map(({ path, title }, index) => (
            <Link key={index} to={path}>
              <button
                ref={index == 0 ? btnRef : null}
                className={
                  "mr-1 font-bold px-7 py-5 lg:px-16  text-sm hover:bg-gray-200/20 " +
                  (activeTeam === index ? "text-white bg-gray-200/20 " : "text-gray-200")
                }
                key={index}
                onClick={(e) => handleClick(index, e.target)}
              >
                {title}
              </button>
            </Link>
          ))
        : teams.map((data, index) => (
            <button
              ref={index == 0 ? btnRef : null}
              className={
                "bg-black border border-gray-500  w-[50%] h-full   px-10 " +
                (activeTeam === index ? "text-white" : "text-gray-400")
              }
              key={index}
              onClick={(e) => handleClick(index, e.target)}
            >
              {data}
            </button>
          ))}
      <hr ref={tabLineRef} className="border-white absolute border-2 duration-300"/>
      </div>

      {teams.length > 2 ? "" : childrenArray[activeTeam]}
    </div>
  );
}

export default InPageNavigation;
