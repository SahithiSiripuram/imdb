import React, { useState } from "react";
import "./styles.css";

var r= [
  "Virgin River",
  "Happiest Season",
  "Vikings",
  "Grey's Anatomy",
  "Life in a year"
];
var d= [
  "The Queen's Gambit",
  "The Undoing",
  "The Crown",
  "Virgin River",
  "The Flight Attendant"
];
var c= [
  "The Flight Attendant",
  "Happiest Season",
  "The Christmas Chronicals 2",
  "Mank",
  "Schitt's Creek"
];
var i= [
  "Pather Panchali",
  "Raatchasan",
  "Hanky Panky",
  "Nayakan",
  "Anbe Sivam"
];

export default function App() {
  const [output, setoutput] = useState("");

  function romance() {
    var output = "";
    output = r.map((item) => <li key={item}>{item}</li>);
    setoutput(output);
  }
  function drama() {
    var output = "";
    output = d.map((item) => <li key={item}>{item}</li>);
    setoutput(output);
  }
  function comedy() {
    var output = "";
    output = c.map((item) => <li key={item}>{item}</li>);
    setoutput(output);
  }
  function indian() {
    var output = "";
    output = i.map((item) => <li key={item}>{item}</li>);
    setoutput(output);
  }

  return (
    <div className="App">
    <style>{'body { background-color: black; }'}</style>
      <h2>Top Rated IMDB Movies based on category</h2>
      <button onClick={() => romance()}
      style={{
        padding: "0.5rem 1rem",
        margin: "1rem",
        borderRadius: "0.5rem",
        backgroundColor: "black",
        color: "orange"
      }}>
        Romance
      </button>
      <button onClick={() => drama()}
      style={{
        padding: "0.5rem 1rem",
        margin: "1rem",
        borderRadius: "0.5rem",
        backgroundColor: "black",
        color: "orange"
      }}>
        Drama
      </button>
      <button onClick={() => comedy()}
      style={{
        padding: "0.5rem 1rem",
        margin: "1rem",
        borderRadius: "0.5rem",
        backgroundColor: "black",
        color: "orange"
      }}>
        Comedy
      </button>
      <button onClick={() => indian()}
      style={{
        padding: "0.5rem 1rem",
        margin: "1rem",
        borderRadius: "0.5rem",
        backgroundColor: "black",
        color: "orange"
      }}>
        Indian Films
      </button>
      <div>
              <ul
                style={{
                  listStyle: "none"
                }}
              >
                <li
                  style={{
                    margin: "auto",
                    border: "3px solid white",
                    padding: "1rem",
                    borderRadius: "0.5rem",
                    maxWidth: "80%",
                    color: "orange"
                  }}
                >
                  {" "}
                  <div
                    style={{
                      padding: "1rem",
                      fontSize: "larger",
                    }}
                  >
                    {output}
                  </div>
                </li>
              </ul>
            </div>
    </div>
  );
}
