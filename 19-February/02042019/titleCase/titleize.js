
function titleize(string) {
  let prefix = ["mr", "mrs", "miss", "ms", "dr"];
  let tokenArray = string.split(" ");

  if(prefix.indexOf(tokenArray[0]) !== -1) {
    tokenArray[0] += ".";
  
  }

  let tokenArrayUpperCase = tokenArray.map(function(token){
    return token.charAt(0).toUpperCase() + token.substring(1);
  });

  return tokenArrayUpperCase.join(" ");

};

module.exports = titleize;