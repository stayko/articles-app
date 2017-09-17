export const truncate = (string, n)=>{
  if(!Number.isInteger(n) || n <= 0 || n === null || typeof n == 'undefined') throw new TypeError("Parameter 'n' must be an integer: " + n);
  else if(n >= string.split(" ").length) return string;
  else return string.split(" ").splice(0, n).join(" ") + "...";
}

export const unixTimeToDate = (unix_timestamp) => {
  let date = new Date(unix_timestamp),
  // Hours part from the timestamp
  hours = date.getHours(),
  // Minutes part from the timestamp
  minutes = "0" + date.getMinutes(),
  // Seconds part from the timestamp
  seconds = "0" + date.getSeconds();

  // Will display time in 10:30:23 format
  return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
}
