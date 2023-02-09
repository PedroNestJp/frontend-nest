import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown-simple';

const oneHour = new Date(
  new Date().setHours(new Date().getHours() + 1)
).toISOString()

const renderer = ({ days, hours, minutes, seconds }) =>
  <div>{days}/{hours}/{minutes}/{seconds}</div>

ReactDOM.render(
  <Countdown targetDate={oneHour} renderer={renderer}/>,
  document.getElementById('root')
);