import React, { useState, useMemo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";

import "./SingleTestimonial.css";

const MAX_FEEDBACK_LENGTH = 400;

const SingleTestimonial = ({ data, theme }) => {
  const useStyles = makeStyles((t) => ({
    seeMoreBtn: {
      background: "transparent",
      border: `1px solid ${theme.tertiary}`,
      borderRadius: "32px",
      marginLeft: "0.5rem",
      cursor: "pointer",
    },
    feedback: {
      marginTop: "1rem",
      fontSize: "20px",
      fontWeight: "300",
    },
  }));

  const [showSeeMore, setShowSeeMore] = useState(false);

  const showSeeMoreButton = useMemo(
    () => data?.feedback?.length > MAX_FEEDBACK_LENGTH,
    [data]
  );

  const clientFeedback = useMemo(
    () =>
      `${data?.feedback?.slice(
        0,
        showSeeMore ? data?.feedback.length : MAX_FEEDBACK_LENGTH
      )}${showSeeMore ? "" : "..."}`,
    [data, showSeeMore]
  );

  const onShowSeeMore = () => {
    setShowSeeMore((prev) => !prev);
  };

  const classes = useStyles();

  return (
    <Fade bottom>
      <div
        className="single-testimonial"
        style={{ backgroundColor: theme.quaternary }}
      >
        <div className="single-testimonial-content">
          <h2 style={{ color: theme.tertiary }}>{data.name}</h2>
          <p className={classes.feedback} style={{ color: theme.tertiary }}>
            {clientFeedback}
            {showSeeMoreButton && (
              <button
                className={classes.seeMoreBtn}
                style={{ color: theme.tertiary }}
                onClick={onShowSeeMore}
              >
                {showSeeMore ? "See less" : "See more"}
              </button>
            )}
          </p>
        </div>
      </div>
    </Fade>
  );
};

export default SingleTestimonial;
