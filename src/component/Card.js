import React from "react";

function Card(props) {
  return (
    <div className="shadow-container p-5">
      <h1 className=" text-1xl font-semibold">
        UserId : <span className="font-normal"> {props.userId} </span>
      </h1>
      <h1 className=" text-1xl font-semibold">
        Title: <span className="font-normal">{props.title}</span>
      </h1>
      <p className=" text-1xl font-semibold">
        Post: <span className="font-normal">{props.post}</span>
      </p>
    </div>
  );
}

export default Card;
