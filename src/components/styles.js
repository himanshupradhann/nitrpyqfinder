export const styles = {
  page: {
    minHeight: "100vh",
    background: "#0a0a0f",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "15px",
    fontFamily: "sans-serif",
  },

  card: {
    width: "100%",
    maxWidth: "380px",
    background: "#111",
    padding: "20px",
    borderRadius: "18px",
    boxShadow: "0 0 20px #00f0ff33",
    border: "1px solid #00f0ff22",
  },

  title: {
    color: "#00f0ff",
    textAlign: "center",
    marginBottom: "15px",
    fontSize: "20px",
  },

  cursor: {
    animation: "blink 1s infinite",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #00f0ff55",
    background: "#111",
    color: "#fff",
    fontSize: "14px",
  },

  dropdown: {
    marginTop: "5px",
    background: "#0f0f15",
    border: "1px solid #00f0ff33",
    borderRadius: "10px",
    maxHeight: "180px",
    overflowY: "auto",
    boxShadow: "0 0 12px #00f0ff22",
  },

  dropdownItem: {
    padding: "10px",
    cursor: "pointer",
    borderBottom: "1px solid #00f0ff11",
    transition: "0.2s",
  },

  code: {
    color: "#00f0ff",
    fontWeight: "600",
  },

  name: {
    fontSize: "12px",
    color: "#aaa",
  },

  noResult: {
    padding: "10px",
    color: "#888",
    textAlign: "center",
  },

  button: {
    marginTop: "5px",
    padding: "14px",
    borderRadius: "12px",
    border: "none",
    background: "#00f0ff",
    color: "#000",
    fontWeight: "700",
    fontSize: "15px",
    cursor: "pointer",
  },

  footer: {
    marginTop: "15px",
    display: "flex",
    justifyContent: "center",
    gap: "25px",
    fontSize: "22px",
  },
};
