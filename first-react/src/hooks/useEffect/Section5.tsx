import React, { useEffect, useState } from "react";

type nameObj = {
  firstName: string | undefined;
  lastName: string | undefined;
  fullName: string | undefined;
};

export default function Section5() {
  const Name = {
    firstName: undefined as string | undefined,
    lastName: undefined as string | undefined,
    fullName: undefined as string | undefined,
  };
  const [name, setNmae] = useState<nameObj>(Name);
  useEffect(() => {
    setNmae({ ...name, fullName: `${name.firstName} ${name.lastName}` });
  }, [name.firstName, name.lastName]);
  return (
    <div>
      <label htmlFor="firstName">First name: </label>
      <input
        id="firstName"
        type="text"
        onChange={(e) => setNmae({ ...name, firstName: e.target.value })}
      />
      <label htmlFor="lastName">Last name: </label>
      <input
        id="lastName"
        type="text"
        onChange={(e) => setNmae({ ...name, lastName: e.target.value })}
      />
      <h3>Full name: {name.fullName}</h3>
    </div>
  );
}
