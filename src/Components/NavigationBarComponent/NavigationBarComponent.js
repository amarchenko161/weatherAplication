import React, { useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import "./NavigationBarComponent.scss";

const NavigationBarComponent = () => {
  const [checkLinkOverwiev, setСheckLinkOverwiev] = useState(true);
  const [checkLinkLocation, setCheckLinkLocation] = useState(false);
  const [checkLinkFavorite, setCheckLinkFavorite] = useState(false);

  const currentLinkOverwiev = classNames({
    "link-check": checkLinkOverwiev === true,
    "linck-uncheck": checkLinkOverwiev === false,
  });
  const currentLinkLocation = classNames({
    "link-check": checkLinkLocation === true,
    "linck-uncheck": checkLinkLocation === false,
  });
  const currentLinkFavorite = classNames({
    "link-check": checkLinkFavorite === true,
    "linck-uncheck": checkLinkFavorite === false,
  });

  const changeLinkOveriew = () => {
    setСheckLinkOverwiev(true);
    setCheckLinkLocation(false);
    setCheckLinkFavorite(false);
  };

  const changeLinkLocation = () => {
    setСheckLinkOverwiev(false);
    setCheckLinkLocation(true);
    setCheckLinkFavorite(false);
  };

  const changeLinkFavorite = () => {
    setСheckLinkOverwiev(false);
    setCheckLinkLocation(false);
    setCheckLinkFavorite(true);
  };

  return (
    <div className="active-link">
      <h1 className={currentLinkOverwiev}>
        <Link to="/overview" onClick={() => changeLinkOveriew()}>
          Overwiev
        </Link>
         
      </h1>
      <h1 className={currentLinkLocation}>
        <Link to="/location" onClick={() => changeLinkLocation()}>
          My Location
        </Link>
         
      </h1>
      <h1 className={currentLinkFavorite}>
        <Link to="/favorites" onClick={() => changeLinkFavorite()}>
          Favorites
        </Link>
         
      </h1>
    </div>
  );
};

export default NavigationBarComponent;
