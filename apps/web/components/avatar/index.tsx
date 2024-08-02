import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

export const Avatar = () => {
  const img = require("../../public/avatar.jpeg");

  return (
    <div className=" p-1 border-4 border-primary rounded-full h-64 w-64 shadow-lg">
      <Image src={img} alt="my photo" className=" rounded-full " />
    </div>
  );
};
