import React, { useState, useEffect, useRef, useMemo } from 'react';
import './styles.css'

const CountDown = (props) => {
  const [defaulTime] = useState(60);
  const [time, setTime] = useState(60);
  let [circleDasharray, setCircleDasharray] = useState(`283 283`)
  const [timerStatus, setTimerStatus] = useState(false);
  const [canRest, setCanRest] = useState(false);
  const timeRef = useRef({});

  useEffect(() => {
    setCircleDasharray(`${(
      (time / defaulTime) * 283
    ).toFixed(2)} 283`);
    if (time === 0) {
      props.complete(props.nowItem.id);
      setCanRest(true);
      timePause();
      resetTime();
    }
  }, [time, defaulTime, props]);

  const timeStart = (e) => {
    e.preventDefault();
    if (props.nowItem.id === 0) {
      alert('請先選擇一個待辦事項');
      return;
    }
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

  const reStart = (e) => {
    e.preventDefault();
    setCanRest(false);
    props.reStart();
  }

  const resetTime = () => {
    setTimerStatus(false);
    clearInterval(timeRef.current);
    setCircleDasharray(`283 283`)
    setTime(60);
  };
  const timePause = () => {
    setTimerStatus(false);
    clearInterval(timeRef.current);
  };

  useEffect(() => {
    resetTime();
  }, [props.nowItem.id]);

  return (
    <div class="h-100">
      <div className="d-flex flex-column align-items-center justify-content-center h-100">
        <h4 className="mb-md-5 mb-3 text-primary text-decoration-underline"> {props.nowItem.text} </h4>
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
          <p id="base-timer-label" className="base-timer__label">
            {canRest?
              <div className="rest-text">
                <p className="text-white"> 完成 {props.nowItem.text} ！<br/> 休息 5 分鐘後再繼續努力 <i class="far fa-smile"></i> </p>
                <a href="/" onClick={reStart}><i class="fas fa-history"></i></a>
              </div>
              : 
              <div className="time-text">
                {timerStatus?
                  <p> {displayConvert} </p>:
                  <a href="/" onClick={timeStart}><i class="far fa-play-circle"></i></a>
                }
              </div>
            }

          </p>
        </div>
      </div>
    </div>
  )
}

export default CountDown;