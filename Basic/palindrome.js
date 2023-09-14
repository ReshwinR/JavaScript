const checkPal = (str) => {
  if (str === str.split("").reverse().join("")) return "Pal"
    else return "Not Pal";
};

const result = checkPal("LeveL");
console.log(result);
