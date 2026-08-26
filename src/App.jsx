import Form from "./components/form";
import { styles } from "./components/styles";
import Footer from "./components/footer";
import Typingeffect from "./components/typingeffect";


export default function App() {
  return (
    <div style={styles.page}>
      <style>
        {`
          @keyframes blink { 50% { opacity: 0; } }
        `}
      </style>

      <div style={styles.card}>
        {/*typing effect was there */}
        <Typingeffect />

        <Form />
        {/* forms was */}
        <br />

        <Footer />

      </div>
    </div>
  );
}