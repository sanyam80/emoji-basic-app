import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const emoji = {
    "😂" :"smiling",
    "😊" : "smart face",
    "😀" : "grinning face",
    "😛" : "Tongue face",
    "❤️" : "heart",
    "😜" : "cragy",
    "😐" : "neutral face",
    "😴" : "sleeping face",
    "😏" : "smirking face",
    "😶" : "face without mouth"
  }
  var emojiWeKnow = Object.keys(emoji);
  const [meaning,setmeaning] = useState("Emoji Meaning")
  const emojiClickHandler = (i)=>{
       const mean = emoji[i];
       setmeaning(mean)
  }
  const emojiEventHandler = (e)=>{
    var userInput = e.target.value;
    var meaning = emoji[userInput];
    if(meaning===undefined){
      meaning = "we don not have this in our database"
    }
    setmeaning(meaning);

  }
  return (
    <div className="App">
    <h1>Emoji Interpreter App</h1>
    <input onChange = {emojiEventHandler}></input>
    <h3>{meaning}</h3>
    <h3>Emoji We Know</h3>
    {emojiWeKnow.map((i)=>{
      return <span onClick ={()=>{{emojiClickHandler(i)}}} style = {{padding:"10px",fontSize:"2rem",cursor:"pointer"}}>{i}</span>
    })}
    </div>
  );
}

export default App;
