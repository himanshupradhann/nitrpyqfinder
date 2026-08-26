import Form from "./components/form";
import { styles } from "./components/styles";
import Footer from "./components/footer";
import Typingeffect from "./components/typingeffect";
import Visitor from "./components/visitorcounter";

export default function App() {
  return (
    <div style={styles.page}>
      <style>
        {`
          @keyframes blink { 50% { opacity: 0; } }
        `}
      </style>

      <div style={styles.card}>
      
        <Typingeffect />

        <Form />
    
        <br />

        <Footer />

        <br />

        <Visitor />

      </div>
    </div>
  );
}