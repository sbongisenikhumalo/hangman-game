#  Hangman Game — React App

A simple yet fun Hangman word guessing game built using React.

This project was completed as part of the Full Stack Web Development course to demonstrate my ability to build a React app, manage component state, handle keyboard input, and deploy the app to production.



##  Features

- Random word selection from a word list
- Real-time tracking of correct and incorrect guesses
- Visual hangman image progression based on mistakes
- Modal popup for win/loss messages
- Responsive keyboard input handling
- Help modal for game instructions



##  Live Demo

You can play the deployed game here:  
🔗 https://6804fe7196d913265472d8f9--lighthearted-zuccutto-95ec72.netlify.app/  
(Replace this with your actual deployed link)


##  Technologies Used

- React (Functional Components)
- useState and useEffect hooks
- JSX and conditional rendering
- CSS for styling
- Netlify for deployment


##  How to Play

1. The app selects a random word.
2. You guess one letter at a time using the keyboard or the on-screen keyboard.
3. Each incorrect guess shows a new part of the hangman image.
4. You win if you guess the word before the hangman is complete!


##  Folder Structure

hangman-game/
├── public/
├── src/  
 ├── components/
├── WordDisplay.js  
 ├── Keyboard.js  
 ├── HangmanImage.js
├── MessageModal.js
└── HelpModal.js│  
 ├── utils.js  
 ├── words.js  
 ├── App.js  
 ├── App.test.js
├── App.css
└── index.js
├──index.css
├── package.json
├── README.md
└── link.txt (contains live deployed link)

##  Instructions to Run Locally

1. Clone the repository
2. Run:

```bash
npm install
npm start
```

