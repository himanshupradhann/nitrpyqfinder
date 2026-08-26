import { styles } from "./styles";
import { useEffect, useState } from "react";
import { updateVisitorCount } from "../utilities/counter";


function Visitor(){
    
      const [visitorCount, setVisitorCount] = useState(null);
    
      useEffect(() => {
        updateVisitorCount()
          .then(setVisitorCount)
          .catch((error) => {
            console.error("Visitor counter error:", error);
            setVisitorCount("—");
          });
      }, []);

      return (

        <p style={styles.name}>
        Visitors: {visitorCount === null ? "Loading..." : visitorCount}
      </p>

      );
}

export default Visitor