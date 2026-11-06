//How to mask an email
let email = "blessed@yahoo.com";
function maskEmail(inputEmail){
    //Clean the incoming email
    cleanEmail = inputEmail.trim();
    //split the email into username and domain
    let [username, domain] = inputEmail.split("@");
    //mask the username
    let maskedUsername = username[0] + "*****" + username[username.length - 1];
    //Return and concatenate the result
    return maskedUsername + "@" + domain;
}
let maskedResult = maskEmail(email);
console.log(maskedResult)