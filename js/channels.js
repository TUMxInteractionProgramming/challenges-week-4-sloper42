
var currentChannel;

var Yummy = {
   name: "Yummy",
   createdOn:Date(2016,4,1),
   createdBy:"minus.plus.yummy",
   starred: false,
   expiresIn: 100,
   messageCount: 999
};

var SevenContinents = {
    name: "SevenContinents",
    createdOn:Date(2016,4,1),
    createdBy:"cheeses.yard.applies",
    starred: true,
    expiresIn: 100,
    messageCount: 999
 };

 var KillerApp = {
    name: "KillerApp",
    createdOn:Date(2016,4,1),
    createdBy:"minus.plus.yummy",
    starred: false,
    expiresIn: 100,
    messageCount: 999
 };

 var FirstPersonOnMars = {
    name: "FirstPersonOnMars",
    createdOn:Date(2016,4,1),
    createdBy:"snippet.atom.grid",
    starred: true,
    expiresIn: 100,
    messageCount: 999
 };

 var Octoberfest = {
    name: "Octoberfest",
    createdOn:Date(2016,4,1),
    createdBy:"minus.plus.yummy",
    starred: false,
    expiresIn: 100,
    messageCount: 999
 };

 function listChannels() {
   
    var tmp;
    tmp = createChannelElement(Yummy);
  
    $('#channel-list').append(tmp);
    tmp = createChannelElement(SevenContinents);
    $('#channel-list').append(tmp);
    tmp = createChannelElement(KillerApp);
    $('#channel-list').append(tmp);
    tmp = createChannelElement(FirstPersonOnMars);
    $('#channel-list').append(tmp);
    tmp = createChannelElement(Octoberfest);
    $('#channel-list').append(tmp);

    console.log($('#channel-list').html());
 }

 function createChannelElement(channelObject) {

    var star = channelObject.starred ? "fas" : "far";

    var ret = $('<li>').attr('onclick','switchChannel(' + channelObject.name + ')').text(
        '#' +channelObject.name).append($('<span>').attr('style','font-size: 24px').addClass('channel-meta').append(
            $('<i>').addClass(star +' fa-star'), $('<i>').addClass('fas fa-chevron-right')
        )
        );

    return ret;
 }
 