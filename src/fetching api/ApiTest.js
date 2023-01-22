import React, { useEffect, useState } from "react";
import Card from "../component/Card";

function ApiTest() {
  const [data, setData] = useState([]);
  const getInfo = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    setData(await response.json());
  };
  useEffect(() => {
    getInfo();
  }, []);
  return (
    <div className=" grid grid-cols-4 space-y-6 space-x-3 ">
      {data.map((data) => {
        return (
          <div key={data.id} className="">
            <Card userId={data.id} title={data.title} post={data.body} />
          </div>
        );
      })}
    </div>
  );
}

export default ApiTest;
