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