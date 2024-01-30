import React, { useState } from "react";

function Tabs({ tabsContent, onChange }) {
  let [tabIndex, setTabIndex] = useState(0);
  let getCurrentIndex = (getIndex) => {
    setTabIndex(getIndex);
    onChange(getIndex);
  };
  return (
    <div className="h-screen w-screen relative ">
      <div className="h-4/5 w-1/2 -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2  border-2 border-solid border-black">
        <div className="flex">
          {tabsContent.map((element, index) => {
            return (
              <h1
                onClick={() => getCurrentIndex(index)}
                className="w-1/3 py-3 text-center bg-black text-white"
                style={
                  tabIndex == index
                    ? { backgroundColor: "white", color:"black" }
                    : { backgroundColor: "black" }
                   
                }
                key={element.tabIndex}
              >
                {element.tabIndex}
              </h1>
            );
          })}
        </div>
        <div className="bg-purple h-4/5 text-justify px-3 pt-5">
          {tabsContent[tabIndex].tabIndex && tabsContent[tabIndex].tabContent}
        </div>
      </div>
    </div>
  );
}

export default Tabs;
