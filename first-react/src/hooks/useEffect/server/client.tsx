import React, { useEffect, useState } from "react";

type myObj = {
  userId: number;
  id: number;
  title: string;
  completed: string;
};

export default function Client() {
  const [data, setData] = useState<myObj>();
  useEffect(() => {
    fetch("http://localhost:3005/").then((res) =>
      res.json().then((d) => setData(d))
    );
  }, []);
  console.log(data);
  return (
    data && (
      <div>
        {Object.keys(data).map((key, i) => {
          const typedKey = key as keyof myObj;
          return (
            <p key={i}>
              {key}: {data[typedKey]}
            </p>
          );
        })}
      </div>
    )
  );
}
