import React, { useState } from "react";
import classes from "./Page.module.scss";
import Bubble from "../Bubble/Bubble";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { languageActions } from "../../redux/language-slice";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { GB, CZ } from "country-flag-icons/react/3x2";

const Page = (props) => {
  const [animation, setAnimation] = useState(true);
  /* Checking whether the page has five or six <Bubble /> components */
  const five = `${classes.AllBubbles} ${classes.AllBubbles__Five}`;

  /* Controling the state of a hovered bubble - if hovered, it gains in size and the others disappear */
  const [hidden, setHidden] = useState(false);

  const dispatch = useDispatch();

  const checkCzech = useSelector((state) => state.language.czech);

  const hideBubble = () => {
    setHidden(true);
  };

  const showBubble = () => {
    setHidden(false);
  };

  const toggleBubble = () => {
    setHidden(!hidden);
  };

  return (
    <div className={classes.Page}>
      <div className={classes.TitleHolder}>
        {/* Title */}
        <div className={`${classes.Title} ${animation && classes.AllBubbles__CenterAnimation}`}>
          <h1>{checkCzech ? props.titleCZ : props.title}</h1>
        </div>
        {/* Button for switching language */}
        <div className={classes.ButtonHolder}>
          <div className={classes.Btn} onClick={() => dispatch(languageActions.setCzech())}>
            <CZ />
          </div>
          <div className={classes.Btn} onClick={() => dispatch(languageActions.setEnglish())}>
            <GB />
          </div>
        </div>
      </div>
      {!props.default ? (
        <div className={classes.ArrowContainer__Left}>
          <Link className={classes.Link} to="/" onClick={() => setAnimation(false)}>
            <AiFillLeftCircle /> <p>{checkCzech ? props.linkCZ : props.link}</p>
          </Link>
        </div>
      ) : (
        <div className={classes.ArrowContainer__Right}>
          <Link className={classes.Link} to="/projects" onClick={() => setAnimation(false)}>
            <p>{checkCzech ? props.linkCZ : props.link}</p> <AiFillRightCircle />
          </Link>
        </div>
      )}
      <div className={five}>
        {/* 1st bubble */}
        <div
          className={`${classes.AllBubbles__1stBubble} ${classes.AllBubbles__SingleBubble} ${
            animation && classes.AllBubbles__LeftAnimation
          }`}>
          <Bubble
            title={`${checkCzech ? props.firstBubbleTitleCZ : props.firstBubbleTitle}`}
            content={checkCzech ? props.firstBubbleContentCZ : props.firstBubbleContent}
            link={props.firstLink}
            hiddenStatus={hidden}
            hideBubble={hideBubble}
            showBubble={showBubble}
            toggleBubble={toggleBubble}
          />
        </div>
        {/* 2nd bubble */}
        <div
          className={`${classes.AllBubbles__2ndBubble} ${classes.AllBubbles__SingleBubble} ${
            animation && classes.AllBubbles__RightAnimation
          }`}>
          <Bubble
            title={checkCzech ? props.secondBubbleTitleCZ : props.secondBubbleTitle}
            content={checkCzech ? props.secondBubbleContentCZ : props.secondBubbleContent}
            link={props.secondLink}
            hiddenStatus={hidden}
            hideBubble={hideBubble}
            showBubble={showBubble}
            toggleBubble={toggleBubble}
          />
        </div>
        {/* 3rd bubble */}
        <div
          className={`${classes.AllBubbles__3rdBubble} ${classes.AllBubbles__SingleBubble} ${
            animation && classes.AllBubbles__CenterAnimation
          }`}>
          <Bubble
            title={checkCzech ? props.thirdBubbleTitleCZ : props.thirdBubbleTitle}
            contact={props.contact}
            content={checkCzech ? props.thirdBubbleContentCZ : props.thirdBubbleContent}
            link={props.thirdLink}
            hiddenStatus={hidden}
            hideBubble={hideBubble}
            showBubble={showBubble}
            toggleBubble={toggleBubble}
          />
        </div>
        {/* 4th bubble */}
        <div
          className={`${classes.AllBubbles__4thBubble} ${classes.AllBubbles__SingleBubble} ${
            animation && classes.AllBubbles__LeftAnimation
          }`}>
          <Bubble
            title={checkCzech ? props.fourthBubbleTitleCZ : props.fourthBubbleTitle}
            content={checkCzech ? props.fourthBubbleContentCZ : props.fourthBubbleContent}
            link={props.fourthLink}
            hiddenStatus={hidden}
            hideBubble={hideBubble}
            showBubble={showBubble}
            toggleBubble={toggleBubble}
          />
        </div>
        {/* 5th bubble */}
        <div
          className={`${classes.AllBubbles__5thBubble} ${classes.AllBubbles__SingleBubble} ${
            animation && classes.AllBubbles__RightAnimation
          }`}>
          <Bubble
            title={checkCzech ? props.fifthBubbleTitleCZ : props.fifthBubbleTitle}
            content={checkCzech ? props.fifthBubbleContentCZ : props.fifthBubbleContent}
            link={props.fifthLink}
            hiddenStatus={hidden}
            hideBubble={hideBubble}
            showBubble={showBubble}
            toggleBubble={toggleBubble}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
