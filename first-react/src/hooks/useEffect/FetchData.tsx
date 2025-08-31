import React, { useEffect, useState } from "react";

type resObj = {
  userId: string;
  id: string;
  title: string;
  completed: Boolean;
};
export default function FetchData() {
  const [data, setData] = useState<Promise<string>>();
  useEffect(() => {
    const FN = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      setData(res.text());
    };
    FN();
  }, []);
 return (
    <div>
      <p>{data}</p>
    </div>
  );
}
