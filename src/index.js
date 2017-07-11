var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);

    // alexa.appId = 'amzn1.echo-sdk-ams.app.1234';

    ///alexa.dynamoDBTableName = 'YourTableName'; // creates new table for session.attributes

    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('MyIntent');
    },

    'AMAZON.HelpIntent': function() {
        this.emit(':ask', 'How can I help you?');
    },

    'AMAZON.StopIntent': function() {
        this.emit(':tell', 'Goodbye world!');
    },

    'AMAZON.CancelIntent': function() {
        this.emit(':tell', 'Command cancelled.');
    },

    'MyIntent': function () {
        this.emit(':tell', 'Hello World from Alexa');
    },

    'WhatsUpIntent': function() {
        this.emit(':tell', 'Nothing much what\'s up with you?');
    },

    'MyNameIsIntent': function() {
        var myName = this.event.request.intent.slots.firstName.value;

        this.emit(':ask', 'hello, ' + myName, 'try again');
    }
};

