"use client";
import { useEffect } from "react";
import { Common } from "../helpers/commonHelpers";
import { usePathname } from "next/navigation";
declare const window: any;

export default function Assets(props: any) {
   useEffect(() => {
      if (props.swiper) {
        //  Common.addCss("swiper");
         Common.addSwiper(props.config);
      }
   }, [])
   return null; // Return null if no JSX is needed
}