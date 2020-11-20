
## Serving

The App is already configured to be served by Nodejs server on port 3000. So you can test it locally. Just install Nodejs if you do not have it yet and run `npm start`, then navigate to `localhost:3000` to check out the app. 

## Hosting
If you want to host the app on Apache server, copy `dist` directory from `ActionItemApp/ActionItem` to `var/www/html` directory on your Apache server, then restart the server and  check out the Angular app on the Apache server host.

## Testing

Open a terminal and navigate to `ActionItemApp/ActionItem`, run `npm install` to install Angular app dependencies,  then run `ng test`. This command will run all the tests both in terminal and will launch a chrome browser window by Karma to show the output of the tests

## Lint

Open a terminal and navigate to `ActionItemApp/ActionItem`, then run `ng lint` to check the cleanness of the code

