import React from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import { IoIosClose, IoIosArrowDropdownCircle } from "react-icons/io";

/* Work on issue with double click and show next alert above
---------------------------------------
---------------------------------------
---------------------------------------
---------------------------------------
*/

const Alert = ({ alert, closeAlertClickHandler, item }) => {
  return (
    <AlertWrapper
      className={`${alert ? "!translate-x-0" : "translate-x-[200%]"}`}
    >
      <IoIosArrowDropdownCircle size={32} />
      <h4 className="text-sm ml-3">Product "{item[0]?.name}" added to cart!</h4>
      <button onClick={closeAlertClickHandler}>
        <IoIosClose size={32} />
      </button>
    </AlertWrapper>
  );
};

export default Alert;

const AlertWrapper = styled.div`
  ${tw`fixed top-5 right-0 sm:right-5 bg-primary text-white rounded w-full sm:w-[350px] h-[75px] flex items-center justify-between p-5 transition-all duration-300`}
`;
