import React from "react";

function Hello({ helloMsg, howruMsg }) {
  return (
    <div>
      <div className="bg-black text-center text-white">{helloMsg} </div>
      <div className="bg-white text-center text-white hover:text-black">
        {howruMsg}{" "}
      </div>
    </div>
  );
}

export default Hello;
