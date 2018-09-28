
function Message(text) {

    this.createdBy = currentChannel.createdBy;
    this.latitude = currentLocation.latitude;
    this.longitude = currentLocation.longitude;
    this.createdOn = new Date;
    this.expiresOn = new Date + 15*60000;
    this.text = text;
    this.own = true;
}

function sendMessage() 
{

    var text = $('#send-input').val();

    console.log(text);

    var msg = new Message(text);

    console.log(msg);

    $('#messages').append(createMessageElement(msg));

    $('#send-input').val("");
}

function createMessageElement(messageObject) 
{

    var expiresIn = (this.expiresOn - Date()) / 60000;
return
"<div class=\"message\">" +
"<h3><a href=\"" + messageObject.createdBy +"\" target=\"_blank\"><strong>" + messageObject.createdBy +"</strong></a>" +
messageObject.createdOn + "<em>" + expiresIn +" min. left</em></h3>" +
"<p>:text:</p>" +
"<button>+5 min.</button>" +
"</div>";


}