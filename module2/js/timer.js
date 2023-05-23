const base = 60;
let readout = '';
let clocktimer, dateObj, diffHour, diffMinute, diffSecond;
let hour = 1,
  minute = 1,
  fullMinute = 1,
  second = 0,
  fullSecond = 0,
  milliSecond = 0,
  init = 0;


const ClearСlock = () => {
  clearTimeout(clocktimer);
  hour = 1;
  minute = 1;
  fullMinute = 1;
  second = 0;
  fullSecond = 0;
  milliSecond = 0;
  init = 0;
  readout = '00:00:00.00';
  document.userData.stopwatch.value = readout;
}

const StartTIME = () => {
  let cdateObj = new Date();
  let time = (cdateObj.getTime() - dateObj.getTime()) - (second * 1000);
  if (time > 999) {
    second++;
  }
  if (second >= (minute * base)) {
    fullSecond = 0;
    minute++;
  } else {
    fullSecond = parseInt((milliSecond / 100) + second);
    if (fullSecond >= base) {
      fullSecond = fullSecond - ((minute - 1) * base);
    }
  }
  if (minute > (hour * base)) {
    fullMinute = 1;
    hour++;
  } else {
    fullMinute = parseInt((milliSecond / 100) + minute);
    if (fullMinute >= base) {
      fullMinute = fullMinute - ((hour - 1) * base);
    }
  }
  milliSecond = Math.round(time / 10);
  if (milliSecond > 99) {
    milliSecond = 0;
  }
  if (milliSecond == 0) {
    milliSecond = '00';
  }
  if (milliSecond > 0 && milliSecond <= 9) {
    milliSecond = '0' + milliSecond;
  }
  if (fullSecond > 0) {
    diffSecond = fullSecond;
    if (fullSecond < 10) {
      diffSecond = '0' + fullSecond;
    }
  } else {
    diffSecond = '00';
  }
  diffMinute = fullMinute - 1;
  if (diffMinute > 0) {
    if (diffMinute < 10) {
      diffMinute = '0' + diffMinute;
    }
  } else {
    diffMinute = '00';
  }
  diffHour = hour - 1;
  if (diffHour > 0) {
    if (diffHour < 10) {
      diffHour = '0' + diffHour;
    }
  } else {
    diffHour = '00';
  }
  readout = diffHour + ':' + diffMinute + ':' + diffSecond + '.' + milliSecond;
  document.userData.stopwatch.value = readout;
  clocktimer = setTimeout(() => StartTIME(), 1);
}

const StartStop = () => {
  if (init == 0) {
    ClearСlock();
    dateObj = new Date();
    StartTIME();
    init = 1;
  } else {
    clearTimeout(clocktimer);
    init = 0;
  }
}

const Start = () => {
  ClearСlock();
  dateObj = new Date();
  StartTIME();
  init = 1;
}

export {StartStop, Start}