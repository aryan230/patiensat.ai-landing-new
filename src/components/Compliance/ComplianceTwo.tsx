import React from "react";

function ComplianceTwo() {
  return (
    <div className="w-[100%] h-[100vh] relative flex items-center justify-center rounded-xl">
      <div
        className="absolute w-[100vw] bg-black h-[100vh]"
        style={{
          backgroundImage:
            "url('https://media-public.canva.com/Wx_e4/MAFlJoWx_e4/1/s2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <h1 className="text-white text-4xl font-bold">Compliance Two</h1>
    </div>
  );
}

export default ComplianceTwo;
