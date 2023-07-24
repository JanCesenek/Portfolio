import React, { useState } from "react";
import classes from "./Bubble.module.scss";
import { BsQrCode } from "react-icons/bs";
import { GiOpenFolder } from "react-icons/gi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Bubble = (props) => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const checkCzech = useSelector((state) => state.language.czech);

  const frontPartRule = hovered ? classes.BackPart : classes.FrontPart;
  const backPartRule = hovered ? classes.FrontPart : classes.BackPart;

  const frontPartClicked = clicked ? classes.BackPart : classes.FrontPart;
  const backPartClicked = clicked ? classes.FrontPart : classes.BackPart;

  const containerRule =
    !hovered && props.hiddenStatus ? `${classes.Container} ${classes.Hidden}` : classes.Container;

  const clickedRule = clicked
    ? `${classes.ContainerCopy} ${classes.ContainerCopyClicked}`
    : classes.ContainerCopy;

  const containerRulePhones =
    !clicked && props.hiddenStatus ? `${classes.Container} ${classes.TrulyHidden}` : clickedRule;

  const enterAnimation = () => {
    setHovered(true);
    props.hideBubble();
  };

  const exitAnimation = () => {
    setHovered(false);
    props.showBubble();
  };

  const toggleAnimation = () => {
    setClicked(!clicked);
    props.toggleBubble();
  };

  return (
    <div>
      <div className={containerRule} onMouseEnter={enterAnimation} onMouseLeave={exitAnimation}>
        <h1 className={frontPartRule}>{props.title}</h1>
        <div className={backPartRule}>
          <span className={classes.Bold}>{props?.content}</span>
          <br />
          {props.contact && (
            <span>
              <i className="fas fa-envelope"></i> jan.cesenekCZ@gmail.com
              <br />
              <i className="fas fa-phone"></i> +420 773 140 855
            </span>
          )}
          {props.functionality && (
            <div className={classes.LinkContainer}>
              <p>{checkCzech ? "Podropný popis zde - " : "Detailed description here - "}</p>
              <Link to={props.functionality}>
                <BsQrCode className={classes.Link} />
              </Link>
            </div>
          )}
          {props.link && (
            <div className={classes.LinkContainer}>
              <p>{checkCzech ? "Odkaz na aplikaci zde - " : "Link to the app here - "}</p>
              <a href={props.link} target="_blank" rel="noreferrer">
                <GiOpenFolder className={classes.Link} />
              </a>
            </div>
          )}
        </div>
      </div>
      <div className={containerRulePhones} onClick={toggleAnimation}>
        <h1 className={frontPartClicked}>{props.title}</h1>
        <div className={backPartClicked}>
          {props?.content}
          <br />
          {props.contact && (
            <span>
              <i className="fas fa-envelope"></i> jan.cesenekCZ@gmail.com
              <br />
              <i className="fas fa-phone"></i> +420 773 140 855
            </span>
          )}
          {props.functionality && (
            <div className={classes.LinkContainer}>
              <p>{checkCzech ? "Podropný popis zde - " : "Detailed description here - "}</p>
              <Link to={props.functionality}>
                <BsQrCode className={classes.Link} />
              </Link>
            </div>
          )}
          {props.link && (
            <div className={classes.LinkContainer}>
              <p>{checkCzech ? "Odkaz na aplikaci zde - " : "Link to the app here - "}</p>
              <a href={props.link} target="_blank" rel="noreferrer">
                <GiOpenFolder className={classes.Link} />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Bubble;
