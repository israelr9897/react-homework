import React, { useEffect, useState } from "react";

export default function Section1() {
  useEffect(() => {
    console.log("Mounted");
  });
  return (
    <div>
      <p>Hello Oparetor</p>
    </div>
  );
}