import { FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";
import { styles } from "./styles";

function Footer() {

  return (
    <div style={styles.footer}>
      <a
        href="https://instagram.com/himanshupradhann"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram />
      </a>
      <a
        href="https://github.com/himanshupradhann"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
      <a href="mailto:pradhangagan85@gmail.com">
        <FaEnvelope />
      </a>
    </div>



  );
}

export default Footer