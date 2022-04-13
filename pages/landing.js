import React from "react";

function landing() {
  return (
    <>
      <div className="p-10 wrapper">
        <div className="h-20">top</div>
        <div className="h-80">
          <div className="w-24">
            <h2 className="text-7xl">
              <span className="text-purple-600">Find</span> your sound and
              <span className="text-purple-600">create</span> a sound
            </h2>
            <p>Where all producers belong</p>
          </div>
        </div>
        <div className="h-24">bottom</div>
      </div>
      <style jsx>
      {`
      .wrapper{
            background:linear-gradient(0deg, rgba(255, 0, 150, 0.3), rgba(255, 0, 150, 0.3)), url("hero.jpg");
            background-size:cover;

        }
      `}
      </style>
    </>
  );
}

export default landing;
