var SNS = require('sns-mobile');

// Just some environment variables configured
var SNS_KEY_ID = process.env['SNS_KEY_ID'],
  SNS_ACCESS_KEY = process.env['SNS_ACCESS_KEY'],
  ANDROID_ARN = process.env['SNS_ANDROID_ARN'];

// Object to represent the PlatformApplication we're interacting with
var myApp = new SNS({
  platform: 'android',
  region: 'eu-west-1',
  apiVersion: '2010-03-31',
  accessKeyId: SNS_ACCESS_KEY,
  secretAccessKey: SNS_KEY_ID,
  platformApplicationArn: ANDROID_ARN
});

// Handle user added events
myApp.on('userAdded', function(endpointArn, deviceId) {
  console.log('\nSuccessfully added device with deviceId: ' + deviceId + '.\nEndpointArn for user is: ' + endpointArn);
  
  // Maybe do some other stuff...
});

// Publically exposed function
exports.register = function(req, res) {
  var deviceId = req.body['deviceId'];

  console.log('\nRegistering user with deviceId: ' + deviceId);

  // Add the user to SNS
  myApp.addUser(deviceId, null, function(err, endpointArn) {
    if(err) {
      console.log(err);
      return res.status(500).json({
        status: 'not ok'
      });
    }

    res.status(200).json({
      status: 'ok'
    });
  });
};