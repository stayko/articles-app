export const truncate = (string, n)=>{
  if(!Number.isInteger(n) || n <= 0 || n === null || typeof n == 'undefined') throw new TypeError("Parameter 'n' must be an integer: " + n);
  else if(n >= string.split(" ").length) return string;
  else return string.split(" ").splice(0, n).join(" ") + "...";
}
