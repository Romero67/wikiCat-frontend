import React from "react";
import Levels from "./Levels";

const Features = ({feature, lvl}) => {
  return (
    <div>
      <div className="row container-feature">
        <div className="col-sm-3">
          <p className="p-feature">
            <b>{feature}: </b>
          </p>
        </div>
        <div className="col-sm-9">
          <Levels level={lvl} />
        </div>
      </div>
    </div>
  );
};

export default Features;
