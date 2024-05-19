import React from "react";
import { IoIosStar } from "react-icons/io";

const Rating = ({ rating }) => {
  return (
    <div>
      {[...Array(5)].map((_, i) => (
        <span key={i}>{rating > i ? <IoIosStar fontSize={"1rem"} color="gold" /> : null}</span>
      ))}
    </div>
  );
};

export default Rating;
