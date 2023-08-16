function sleep(time) {
  var timeStamp = new Date().getTime();
  var endTime = timeStamp + time;
  while (true) {
    if (new Date().getTime() > endTime) {
      return;
    }
  }
}

function val(valList) {
  
}

export {sleep} 