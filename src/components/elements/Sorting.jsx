import React, { useState } from "react";
import { MdViewModule, MdViewWeek, MdViewStream } from "react-icons/md";

const Sorting = ({ onShowLimitChange, displayTypeHanlde, onSortChange }) => {
  const [number, setNumber] = useState(10);
  const [buttonActive, setButtonActive] = useState(0);

  // const iconArray = [<MdViewModule />, <MdViewWeek />, <MdViewStream />];
  const iconArray = [
    {
      "_id": "613085c66064674c5c47c7ab",
      "index": 0,
      "icon": <MdViewModule />,
      "name": "grid",
    },
    {
      "_id": "613213c66064674c5c47c7ab",
      "index": 1,
      "icon": <MdViewWeek />,
      "name": "table",
    },
    {
      "_id": "613213c66064674c5c47g41b",
      "index": 2,
      "icon":  <MdViewStream />,
      "name": "list",
    },
  ];

  // Handler for adding active state on click in icon
  const handleButtonClick = (buttonID) => {
    setButtonActive(buttonID);
  };

  return (
    <div className="filter p-5 flex items-center justify-between bg-white shadow rounded-md text-[15px]">
      <div className="view-option__icons-list flex items-center">
        {iconArray.map((item) => (
          <button
            key={item._id}
            className={`grid p-1 hover:bg-[#f2f2f2] text-2xl ${
              buttonActive === item.index ? "text-primary" : "text-[#95a0a6]"
            }`}
            data-value={item.name}
            onClick={() => {
              displayTypeHanlde(item.name); // Change styles in products card depends on what icon is selected
              handleButtonClick(item.index); // Adding id to button
            }}
          >
            {item.icon}
          </button>
        ))}
        {/* <button
          className={`grid p-1 hover:bg-[#f2f2f2] text-lg ${
            buttonActive === 1 ? "text-primary" : "text-[#95a0a6]"
          }`}
          onClick={() => {
            displayTypeHanlde("w-full lg:w-[19%]"); // Change styles in products card depends on what icon is selected
            handleButtonClick(1); // Adding id to button
          }}
        >
          <IoGrid />
        </button> */}
        {/* <button
          className="column p-1 hover:bg-[#f2f2f2]"
          onClick={() => {
            displayTypeHanlde("flex items-center w-[49%]");
            handleButtonClick(2);
          }}
        >
          <MdViewWeek
            className={`text-2xl ${
              buttonActive === 2 ? "text-primary" : "text-[#95a0a6]"
            }`}
          />
        </button>
        <button
          className="list p-1 hover:bg-[#f2f2f2]"
          onClick={() => {
            displayTypeHanlde("flex items-center w-full");
            handleButtonClick(3);
          }}
        >
          <MdViewStream
            className={`text-2xl ${
              buttonActive === 3 ? "text-primary" : "text-[#95a0a6]"
            }`}
          />
        </button> */}
        <span className="ml-2">
          Showing <span className="font-bold">{number}</span> products
        </span>
      </div>
      <div className="view-option__sorting-box flex items-center gap-5">
        <div className="view-option__sort">
          <label htmlFor="view-opition-sort" className="mr-2">
            Sort
          </label>
          <select
            id="view-opition-sort"
            className="bg-[#ebebeb] p-1"
            onChange={(e) => onSortChange(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="name_asc">Name (A-Z)</option>
            <option value="name_desc">Name (Z-A)</option>
          </select>
        </div>
        <div className="view-option__limit">
          <label htmlFor="view-opition-limit" className="mr-2">
            Show
          </label>
          <select
            id="view-opition-limit"
            className="bg-[#ebebeb] p-1"
            onChange={(e) => {
              onShowLimitChange(e.target.value);
              setNumber(e.target.value);
            }}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Sorting;
