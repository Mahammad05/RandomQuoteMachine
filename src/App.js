import { useState, useEffect } from "react";

function App() {
  const API_URL = "https://api.quotable.io/random";

  const [quote, setQuote] = useState([]);

  const fetchQuote = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setQuote(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const colors = [
    "#333333",
    "#556B2F",
    "#191970",
    "#D2691E",
    "#800000",
    "#FF8C00",
    "#472E32",
    "#228B22",
    "#FF69B4",
    "#ADD8E6",
  ];

  const getRandomColor = () => {
    const randomNumber = Math.floor(Math.random() * 10);
    return colors[randomNumber];
  };

  const [pageColor, setPageColor] = useState(getRandomColor());

  const handleClick = () => {
    fetchQuote();

    const newColor = getRandomColor();
    setPageColor(newColor);
  };

  return (
    <div className="App" style={{ backgroundColor: pageColor }}>
      <div id="quote-box">
        <blockquote className="text-content">
          <span style={{ color: pageColor }} id="text">
            "{quote.content}"
          </span>
          <span style={{ color: pageColor }} id="author">
            - {quote.author}
          </span>
        </blockquote>
        <div className="buttons">
          <a
            style={{ backgroundColor: pageColor }}
            id="tweet-quote"
            href="twitter.com/intent/tweet"
          >
            Tweet
          </a>
          <button
            style={{ backgroundColor: pageColor }}
            onClick={handleClick}
            id="new-quote"
          >
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
