/* #6 start the #external #action and say hello */
console.log("App is alive");

/**
 * #6 #Switcher function for the #channels name in the right app bar
 * @param channel Channel Object
 */
function switchChannel(channel) {
    //Log the channel switch
    console.log("Tuning in to channel", channel);

    //Write the new channel to the right app bar
    document.getElementById('channel-name').innerHTML = channel.name;

    //#6 change the #channel #location
    var location ="by <a href=\"http://w3w.co/" + channel.createdBy +"\" target=\"_blank\"><strong>" + channel.createdBy + "</strong></a>";

    document.getElementById('channel-location').innerHTML = location;
    /* #6 #liking channels on #click */
    console.log (document.getElementById('channel-star').outerHTML);

    $('#channel-star').removeClass('fa-star far');
    $('#channel-star').removeClass('fa-star fas');

    
console.log (channel.starred);

    channel.starred ? 
    $('#channel-star').addClass('fas')
    :
    $('#channel-star').addClass('far');

    $('#channel-star').addClass('fa-star');

    console.log (document.getElementById('channel-star').outerHTML);
    /* #6 #highlight the selected #channel.
       This is inefficient (jQuery has to search all channel list items), but we'll change it later on */
    $('#channels li').removeClass('selected');
    $('#channels li:contains(' + channel.name + ')').addClass('selected');
}

/* #6 #liking a channel on #click */
function star() {
    $('#channel-star').toggleClass("fas");
    $('#channel-star').toggleClass("far");
}

/**
 * #6 #taptab selects the given tab
 * @param tabId #id of the tab
 */
function selectTab(tabId) {
    // #6 #taptab #remove selection from all buttons...
    $('#tab-bar button').removeClass('selected');

    //...#6 #taptab #log the new tab on change...
    console.log('Changing to tab', tabId);

    //...#6 #taptab #add selection to the given tab button, its id is passed via the #argument tabId
    $(tabId).addClass('selected');
}

/**
 * #6 #toggle (show/hide) the emojis menu #smile
 */
function toggleEmojis() {
    /* $('#emojis').show(); // #show */
    $('#emojis').toggle(); // #toggle
}
