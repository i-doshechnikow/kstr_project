import React from "react";
import preloader from "../../../assets/images/1476.gif";

type PropsType = {};

let Preloader: React.FC<PropsType> = (props) => {
  return (
    <div>
      <img src={preloader} />
    </div>
  );
};
export default Preloader;
