/**
* Create an object literal with the following key value pairs:
* type: {string} 'Goldfish'
* brand: {string} 'Pepperidge Farm'
* flavor: {string} 'Cheddar'
* count: {number} 2000
* It should be returned directly by the following function
* @return {object} - the object literal
*/

function returnObjectLiteral() {
  //your code here
    return {
	type : "Goldfish",
	    brand : "Pepperidge Farm",
	    flavor : "Cheddar",
	    count : 2000,
	}//Modify ONLY this line
  //end your code
}

/**
* Create a constructor function for a `MessageLog` object.
* @constructor
* @param {string} user - The user associated to the message log
* The string indicating the user should be stored in the user property of the
* object instances.
*
* In addition, the following methods should be
* callable on a MessageLog object:
* logMessage( {string} messageText, {number} direction) - This should log a
* message
* as either being sent or received. A direction of 0 indicates it is a message
* the user sent. A direction of 1 indicates it is a message the user received.
* Behavior for other numbers is undefined.
* getSentMessage({number} n) - returns as a string, the content of the nth most
* recently sent message. To conserve memory, the object should only keep the
* last 5 message. n=0 retrieves the most recent n=4 retrieves the least recent
* of the 5.
* totalSent() - returns an integer indicating the total number of messages sent
* totalReceived() - returns an integer indicating the total number of messages
* received
*/

//your code here
function MessageLog(user){
    this.sentlog =[];
    this.receivedlog = [];
    this.sent = 0; 
    this.received = 0; 
    this.user = user;

    this.logMessage = function(messageText, direction){
	if (direction == 1){

	    this.receivedlog.unshift([messageText,direction]);
	    if (this.receivedlog.length > 5){
		this.receivedlog = this.receivedlog.slice(0,5);
	    }
	    this.received++;

	} else if (direction ==0){
	    
	    this.sentlog.unshift([messageText, direction]);	   
	    if (this.sentlog.length > 5){
		this.sentlog = this.sentlog.slice(0,5);
	    }
	    this.sent++;
	} 
    }

    this.totalSent = function(){
	return this.sent;
    }

    this.totalReceived = function(){
	return this.received;
    }

    this.getSentMessage = function (n){
	return this.sentlog[n][0];
    }
}
//end your code

/**
* Add a method to the MessageLog prototype:
* lastReceivedMessage() - returns the message text of the last message the user
* received.
*/
//your code here
MessageLog.prototype.lastReceivedMessage = function(){
    console.log(this.receivedlog[0][0]);
    return this.receivedlog[0][0];
}
//end your code

/**
* Create an instance of a `MessageLog` for the user "BlackHatGuy". Have the
* instance receive 3 messages: "foo", "bar" and "baz", received in that order.
* Assign it to the variable myLog.
*/

//your code here

//end your code
