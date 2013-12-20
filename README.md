###SNS (sns-mobile) Module Example
This repository is simply an example of how the sns-mobile module could be exposed to register users for Push Notifications.

Using an express webserver it exposes a single route that can be called to register a device for Push Notifications. This is a trivial example without database interaction for user accounts etc.

To run this simply do the following:

```
git clone git@github.com:evanshortiss/sns-mobile-example.git
cd sns-mobile-example
npm install .
node index.js
```

You'll need to configure the following three environment variables:
* SNS_KEY_ID (Secret Key for an AWS user)
* SNS_ACCESS_KEY (Access Key for an AWS user)
* SNS_ANDROID_ARN (PlatformApplicationArn for your Android (GCM) SNS application)

To add fake users you can do the following curl request:

```
curl --data "deviceId=some_fake_device_id_for_app" http://127.0.0.1:3000/register
```