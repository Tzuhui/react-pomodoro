import React, { useState, useEffect, useRef, useMemo } from 'react';
import './styles.css'

const CountDown = () => {
  const [defaulTime] = useState(20);
  const [time, setTime] = useState(20);
  let [circleDasharray, setCircleDasharray] = useState(`283 283`)
  const [timerStatus, setTimerStatus] = useState(false);
  const timeRef = useRef({});

  useEffect(() => {
    setCircleDasharray(`${(
      (time / defaulTime) * 283
    ).toFixed(2)} 283`);
    if (time === 0) {
      timePause();
      // backTimeStop();
    }
  }, [time, defaulTime]);

  const timeStart = () => {
    if (timerStatus === true || time === 0) {
      return;
    }
    setTimerStatus(true);
    timeRef.current = setInterval(() => {
      setTime(t => t - 1);
    }, 1000);
  };
  const displayConvert = useMemo(() => {
    const minute = Math.floor(time / 60);
    const second = time - minute*60;
    return `${("" + minute).length === 1 ? "0" + minute : minute}:${
      ("" + second).length === 1 ? "0" + second : second
    }`;
  }, [time]);

  // const backTimeStop = () => {
  //   setTimerStatus(false);
  //   clearInterval(timeRef.current);
  //   setCircleDasharray(`283 283`)
  //   setTime(20);
  // };
  const timePause = () => {
    setTimerStatus(false);
    clearInterval(timeRef.current);
  };

  return (
    <div class="h-100">
      <div className="d-flex align-items-center justify-content-center h-100">
        <div className="base-timer">
          <svg className="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <g className="base-timer__circle">
              <circle className="base-timer__path-elapsed" cx="50" cy="50" r="45" />
              <path
                id="base-timer-path-remaining"
                strokeDasharray={circleDasharray}
                className="base-timer__path-remaining text-primary"
                d="
              M 50, 50
              m -45, 0
              a 45,45 0 1,0 90,0
              a 45,45 0 1,0 -90,0
            "
              ></path>
            </g>
          </svg>
          <span id="base-timer-label" className="base-timer__label">
            {timerStatus?
              <p> {displayConvert} </p>:
              <a href="javascript:;" onClick={timeStart}><i class="far fa-play-circle"></i></a>
            }
          </span>
        </div>
      </div>
    </div>
  )
}

export default CountDown;