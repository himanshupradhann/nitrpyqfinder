import React, { useState, useEffect } from "react";
import { styles } from "./styles";

function Typingeffect(){

      const [displayText, setDisplayText] = useState("");
  const text = "NITR PYQS FETCHER";




  // typing effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 70);
    return () => clearInterval(interval);
  }, []);

  // close dropdown on outside click
  return(
    <h1 style={styles.title}>
          {displayText}
          <span style={styles.cursor}>|</span>
        </h1>

  );
}
export default Typingeffect