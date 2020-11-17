## Table of Contents

* [Sports diary app](#sports-diary-app)
  * [Before installation](#before-installation)
  * [Installation](#installation)
  * [Content](#content)
* [Testing](#testing)


## Sports diary app

This is a school project using React native to create a simple phone application, where you can submit to two topics. I also included a running pace calculator for jogging.

The application consists of five screens:
* Home: Main screen with four buttons to different screens.
* Entry: A screen where you can submit your notes to two different topics (Kickboxing and Brazilian Jiu-Jitsu).
* Kickboxing and Brazilian Jiu-Jitsu diaries: Two screens where you can read your diary notes on the topic.
* Running pace calculator: A screen where you can submit and calculate your time and distance.


### Before installation

Make sure that you have node.js and Expo CLI installed before you run the application:

* https://nodejs.org/
* https://docs.expo.io/get-started/installation/
* Download the expo app onto your smartphone through the playstore: https://play.google.com/store/apps/details?id=host.exp.exponent

### Installation

1. Download the .zip file and unzip it to the destination you want.
2. Using CMD or Powershell, navigate to the unzipped folder (sports-diary-app).
3. Install all of necessary libraries by running the command, make sure you're in the sports-diary-app folder (step 2): 
```sh
npm install
```
4. To start the application, run the command:
```sh
npm start
```
5. Running the command will start the application and open a webclient in localhost.
6. Scan the QR code using the Expo mobile app (for best results, I recommend using the Tunnel connection).

### Content

The application starts with the homescreen, consisting of four buttons for other screens: New Diary Entry, Kickboxing Diary, BJJ Diary, Running Pace Calculator.

<img src="https://github.com/a1800622/sports-diary-app/blob/master/IMG/home_screen.jpg" height="500" />

The first button leads to the Diary Entry screen, where you can fill out and submit to the two topics:

<img src="https://github.com/a1800622/sports-diary-app/blob/master/IMG/entry_screen.jpg" height="500" />
<img src="https://github.com/a1800622/sports-diary-app/blob/master/IMG/entry_screen_2.jpg" height="500" />
<img src="https://github.com/a1800622/sports-diary-app/blob/master/IMG/entry_screen_3.jpg" height="500" />

The two diary buttons lead to your diaries where your submitted notes are listed based on the topic:

<img src="https://github.com/a1800622/sports-diary-app/blob/master/IMG/kb_diary_screen.jpg" height="500" />
<img src="https://github.com/a1800622/sports-diary-app/blob/master/IMG/bjj_diary_screen.jpg" height="500" />

The final screen is a running pace calculator, where you can calculate your running pace:

<img src="https://github.com/a1800622/sports-diary-app/blob/master/IMG/running_pace_screen.jpg" height="500" />
<img src="https://github.com/a1800622/sports-diary-app/blob/master/IMG/running_pace_screen_2.jpg" height="500" />

## Testing

Testing is done on a separate branch. The application itself will not run properly on this one.
```sh
feature/testing
```

The following files have been modified/added in this branch:
* [Home.js](https://github.com/a1800622/sports-diary-app/blob/feature/testing/Home.js)
* [Home.test.js](https://github.com/a1800622/sports-diary-app/blob/feature/testing/Home.test.js)

1. Using git bash, switch to the testing branch and pull, using the following commands:
```sh
git checkout feature/testing
```
```sh
git pull
```
2. To run the test, run this command in CMD or Powershell (make sure you're in the right folder destination as explained in the installation):
```sh
npm run test
```
3. Running the command will create a snapshot file of the application (located in the same folder). You can open it and check it out with any text editor.
<img src="https://github.com/a1800622/sports-diary-app/blob/master/IMG/snapshot.JPG" height="300" />
