import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😉": "Winking Face",
  "😗": "Kissing Face",
  "😁": "Smiling Eyes",
  "😶": "No Face",
  "🤥": "Lying Face",
  "🥺": "Pleading Face",
  "😎": "Smiling Face with Sunglasses",
  "🙃": "Upside Down Face",
  "🤣": "Rolling on the Floor Laughing",
  "😋": "Face Savoring Food"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We Dont Have This In Our DataBase";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input onChange={emojiInputHandler} />
      <h2>{meaning}</h2>
      <h3>Emojis We Know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              fontSize: "large",
              padding: "0.5rem 0.5rem",
              cursor: "pointer"
            }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
