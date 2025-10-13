import React from "react";
import { Cover } from "./ui/cover";

export function BuildWebsitesSection() {
  return (
    <div>
      <h1 className="text-[40px] lg:text-[80px] font-semibold max-w-7xl mx-auto text-center lg:mt-6 z-20 lg:py-6 ">
        Build amazing websites <br />
        with <Cover className="cursor-pointer">infinitum</Cover>
      </h1>
    </div>
  );
}
