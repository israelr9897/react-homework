import React, { useEffect, useState } from "react";

export default function Section5() {
  const [firName, setFirNmae] = useState<string>();
  const [lasName, setLasNmae] = useState<string>();
  const [fullName, setFullNmae] = useState<string>(" ");
  useEffect(() => {
    setFullNmae(`${firName} ${lasName}`)
  }, [firName, lasName]);
  return (
    <div>
      <label htmlFor="firstName">First name: </label>
      <input
        id="firstName"
        type="text"
        onChange={(e) => setFirNmae(e.target.value)}
      />
      <label htmlFor="lastName">Last name: </label>
      <input
        id="lastName"
        type="text"
        onChange={(e) => setLasNmae(e.target.value)}
      />
      <h3>Full name: {fullName}</h3>
    </div>
  );
}
