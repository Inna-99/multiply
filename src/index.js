module.exports = function multiply(first, second) {

  let result = Array(first.length + second.length).fill(0);
      for (let i = first.length; i--; null) 
      {
      let carrier = 0;
      for (let j = second.length; j--; null) {
      result[1 + i + j] += carrier + first[i] * second[j];
      carrier = Math.floor(result[1 + i + j] / 10);
      result[1 + i + j] = result[1 + i + j] % 10;
    }
    result[i] += carrier;
  }
  return result.join("").replace(/^0*(\d)/, "$1");
}