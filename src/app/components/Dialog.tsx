"use client";

import { useContext, useState } from "react";
import { DialogContext } from "../context/DialogContext";

export function Dialog() {
  const { open, toggle } = useContext(DialogContext);

  return (
    <>
      {open && <div className="w-10 h-10 bg-red-500">Dialog</div>}
      <button onClick={toggle}>toggle</button>
    </>
  );
}
