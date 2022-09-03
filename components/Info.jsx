import React from "react";
import Typography from "@mui/material/Typography";
import Image from "next/image";

function Info() {
  return (
    <div className="px-10 py-10">
      <div className="py-12 text-center">
        <Typography variant="h4" gutterBottom>
          About Us
        </Typography>
      </div>
      <div className="lg:flex ">
        <div className="lg:w-[60%]">
          <Typography variant="body2" gutterBottom>
            We offer driving lessons in and around Malawi. We have attractive
            and competitive lesson fees to get you on the road and friendly and
            helpful staff to book you in or address any queries or concerns you
            may have. Your fully qualified driving instructor will be
            professional and friendly at all times and will teach you to drive
            in a totally relaxed atmosphere. We pride ourselves on being
            reliable, friendly and trustworthy. We will go out of our way to
            make your learning experience as convenient as possible, therefore
            if you would prefer to start a lesson straight after work, school or
            college we can pick you up from there. Our lessons are usually 1 or
            2 hours long but for your convenience we can arrange for lessons of
            other durations. We want you to get the most from your time in the
            driving seat as your opinion matters to us. Many of our former
            customers have recommended the school to their family, friends and
            colleagues.
          </Typography>
        </div>
        <div>
          <Image src="/logo.png" height={100} width={170} />
        </div>
      </div>
    </div>
  );
}

export default Info;
