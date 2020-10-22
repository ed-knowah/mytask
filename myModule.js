
const checkPalindrome =(string) => {
    const reversed = string.split("").reverse().join("");
    if(string.toLowerCase() === reversed.toLowerCase()){
        return true;
    }
    return false;
   
}

 module.exports.checkPalindrome =checkPalindrome;

 