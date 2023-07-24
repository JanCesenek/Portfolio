import React from "react";
import classes from "./Description.module.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Description = (props) => {
  const checkCzech = useSelector((state) => state.language.czech);

  return (
    <div className={classes.Description}>
      <p className={classes.Line}>
        <span className={classes.Bold}>
          {checkCzech
            ? "Frameworky/technologie použité v této aplikaci: "
            : "Frameworks/technologies used in this app: "}
        </span>
        <span>{props.tech}</span>
      </p>
      <p>{checkCzech ? props.contentCZ : props.content}</p>
      <Link to={props.back}>{checkCzech ? "Zpět" : "Back"}</Link>
    </div>
  );
};

export default Description;
