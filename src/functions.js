/**
* the \@param notation indicates an input paramater for a function. For example
* @param {string} foobar - indicates the function should accept a string
* and it should be called foobar, for example function(foobar){}
* \@return is the value that should be returned
*/

/**
* Write a function called `uselessFunction`.
* It should accept no arguments.
* It should return the null value.
* @return {null} - 'useless'.
*/

//your code here
function uselessFunction() {
  return null;
}
//end your code

var bar = 'not a function';
var barType = typeof bar;

/**
* Assign the above variable 'bar' to an anonymous function with the following
* properites.
* @param {float[]} doubleArray - an array of floating point numbers.
* The function should multiply every number in the array by 2 (this should
* change the content of the array).
* @return {boolean} - true if the operation was sucessful, false otherwise.
* This should return false if any value in the array cannot be doubled.
*/

//your code here
bar = function(doubleArray) {
  var arrayLength = doubleArray.length;
  var doubleable = true;
  for (var i = 0; i < arrayLength; i++) {
    if (typeof(doubleArray[i]) === 'number') {
      doubleArray[i] *= 2;
    } else {
      doubleable = false;
      break;
    }
  }
  return doubleable;
};
//end your code

/**
* Creates a new GitLog
* @constructor
* @param {string} hash - the hash of the commit
* @param {Date} date - the date of the commit as a JS Date object
* @param {string} message - the commit message
*/
function GitLog(hash, date, message) {
    this.hash = hash;
    this.date = date;
    this.message = message;
}

/**
* Create a function called parseGit to parse Git commit logs
* The logs will be generated by the following command
* git log --pretty=format:"%h %ad \"%s\"" --date=rfc
* The result looks like this
* 3782618 Wed, 7 Jan 2015 21:42:26 -0800 "Initial commit"
* |hash | |             date           | |   message    |
* There will always be a space between the hash and date and between the date
* and the first " of the commit message.
*
* You will covert these into GitLog objects with the following properties:
*
*
* @param {array.<string>} logArray - an array of Git commit messages of the
* above
* format.
* @return {array.<GitLog>} - return an array GitLog instances
*/

//your code here
function parseGit(logArray) {

  var arrayLength = logArray.length;
  var GitLogArray = [];
  for (var i = 0; i < arrayLength; i++) {

    var myMessage = logArray[i].split(' '); //split each message into tokens

    //Assemble date from tokens 1 through 6 (RFC 2822 syntax)
    var myDateString = myMessage[1] + ' ' + myMessage[2] + ' ' +
    + myMessage[3] + ' ' + myMessage[4] + ' ' + myMessage[5] +
    ' ' + myMessage[6];
    var myDate = new Date(Date.parse(myDateString));

    //Assemble hash from token 0
    var myHash = myMessage[0];

    //split message again, this time at the double quotation marks
    //and collect everything between the first 2 quotes as the commit message
    var myMessage = logArray[i].split('"')[1];

    //create a gitlog from hash, date, message, and add it to GitLogArray.
    var myGitLog = new GitLog(myHash, myDate, myMessage);
    GitLogArray.push(myGitLog);
  }

  return GitLogArray;
}
//end your code
