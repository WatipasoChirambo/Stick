import React from "react";
import Image from "next/image";

const d = new Date();
let year = d.getFullYear();

function Footer() {
  return (
    <div className="pb-8 flex justify-center px-10">
      <div>
        <div className="flex justify-center">
          <Image src="/logo.png" height={100} width={170} />
        </div>
        <div>{year}&copy;Atameje Driving School</div>
      </div>
    </div>
  );
}

export default Footer;
