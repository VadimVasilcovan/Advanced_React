import React, { useEffect } from "react";

export default function Timer({dispatch, secondsRemaining}) {
  useEffect(() => {
    setInterval(function () {
        dispatch({type:'tick'})
    }, 1000);
  }, [dispatch]);
  return <div className="timer">{secondsRemaining}</div>;
}
