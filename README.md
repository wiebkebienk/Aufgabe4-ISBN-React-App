Aufgabe 4: ISBN-React-App
In der letzten Aufgabe werden Sie mit der Hilfe von React eine weitere ISBN-App implementieren. Diese wird aber ein paar mehr Features enthalten als die Variante aus Aufgabe 3, da die Umsetzung mit React um einiges einfacher sein dürfte. Zusätzlilch zur Überprüfung der ISBN soll nun der Titel des Buches, der oder die Authorin sowie das Buchcover (soweit vorhanden) dargestellt werden. Wie gewohnt legen Sie bitte wieder für jede Teilaufgabe einen neuen Branch an. 

a) init

Legen Sie mit dem Befehl

npx create-react-app isbn-app

ein react scaffolding-Projekt an. Wenn Sie nun mit 

cd isbn-app

in das neu erstellte Verzeichnis wechseln, befinden Sie sich bereits in einem neuen Git-Repository. Um nun ihren neuen Arbeitsstand auf GitHub bereit zu stellen müssen ein "leeres" repository dort anlegen. Github wird ihnen unter anderem einen Befehl anzeigen der mit "git remote add origin ..." beginnt. Diesen Befehl führen Sie aus ihrem isbn-app-Verzeichnis heraus aus. 

Damit können Sie nun mit

git push

wie gewohnt den aktuellen Stand in ihr git-Repo pushen.



b) isbn-check

Installieren sie die dependency isbn-check mittels

npm install isbn-check

und binden Sie die beiden Funktionen wie folgt ein:

const {isbn10Checksum, isbn13Checksum} = require('isbn-check/src/isbn-check')

Legen Sie ein input-feld und einen Button an.  Wenn der User den Button clickt, soll die Eingabe im input-feld überprüft werden. Wenn es sich um eine valide isbn nummer handelt, soll der grüne Text "ISBN valid" angezeigt werden, falls nicht der rote Text "ISBN invalid". Nutzen Sie hierfür die beiden Methoden isbn10Checksum und isbn13Checksum. Wählen Sie die Validierungsmethode anhand der Länge der Eingabe im input-feld.

c) node-isbn
Installieren Sie die dependency "node-isbn" und studieren Sie deren Anleitung. Erweitern Sie die Funktionalität des Buttons: Sobald der User eine Valide ISBN eingegeben hat, sollen die Daten zu der ISBN von einem der verfügbaren Provider von node-isbn herunter geladen werden.
Analysieren Sie das JSON-Feedback des von Ihnen gewählten providers indem Sie ein paar Ihnen bekannter deutscher und englischer Bücher über die Repl prüfen. (Tipp: Sollte Ihnen der JSON-Output zu unleserlich sein, kopieren Sie ihn und fügen Sie ihn einen geeigneten Formatierer ein. Nun sollten Sie in der Lage sein, folgende folgende Daten in der React-App zur eingegebenen ISBN anzuzeigen:

Titel des Buches
Author des Buches
Kurze Zusammenfassung
Soweit vorhanden ein Bild des Buchcovers



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
