Life Waster
===========

Always run in production when testing on the device. This is a client only app, so you have to force Meteor to bundle all of the files together (otherwise, it only pushes the initial files to the client and then the device won't be able to ask for all of the other files).

```sh
meteor run android-device --production
```

