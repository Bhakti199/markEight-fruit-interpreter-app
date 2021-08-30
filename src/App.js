import { useState } from "react";
import "./styles.css";
const fruitDictionary = {
  "🍇": "Grapes",
  "🍈": "Melon",
  "🍉": "Watermelon",
  "🍊": "Tangerine",
  "🍋": "Lemon",
  "🍌": "Banana",
  "🍍": "Pineapple",
  "🍎": "Red Apple",
  "🍏": "Green Apple",
  "🍐": "Pear",
  "🍒": "Cherry",
  "🍓": "Strawberry",
  "🥝": "Kiwi",
  "🥑": "Avocado"
};
var fruitWeKnow = Object.keys(fruitDictionary);
export default function App() {
  const [meaning, setMeaning] = useState("");

  function fruitInputHandler(event) {
    var userInput = event.target.value;
    var meaning = fruitDictionary[userInput];
    if (meaning === undefined) {
      meaning = " Sorry! we don't have this in our database";
    }
    setMeaning(meaning);
  }
  function fruitClickHandler(fruit) {
    var meaning = fruitDictionary[fruit];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h2>Know Fruits</h2>
      <input
        onChange={fruitInputHandler}
        placeholder="Enter the fruit or select from the list given below."
      ></input>
      <h2> {meaning}</h2>
      <h3>fruits we know</h3>
      {fruitWeKnow.map(function (fruit) {
        return (
          <span
            onClick={() => fruitClickHandler(fruit)}
            style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer" }}
            key={fruit}
          >
            {" "}
            {fruit}{" "}
          </span>
        );
      })}
    </div>
  );
}
