export const theme = {
  fonts: {
    body: "system-ui, sans-serif",
    heading: '"Avenir Next", sans-serif',
    monospace: "Menlo, monospace",
  },
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#33e",
    secondary: "red",
  },
  main: {
    alignItems: "center",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "100%",
    h1: {
      color: "secondary",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 5,
    },
    h2: {
      color: "secondary",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "bold",
      fontSize: 4,
    },
    h3: {
      color: "subHeading",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 4,
      margin: 0,
      padding: "0 0 20px 0",
    },
    h4: {
      color: "subHeading",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "bold",
      fontSize: 2,
    },
    h5: {
      color: "subHeading",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "bold",
      fontSize: 1,
    },
    h6: {
      color: "subHeading",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "bold",
      fontSize: 0,
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
      fontSize: 1,
      margin: 0,
      padding: "0 0 20px 0",
    },
    a: {
      color: "primary",
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    img: {
      maxWidth: "100%",
    },
  },
  greenButton: {
    backgroundColor: "green",
  },
  buttons: {
    primary: {
      backgroundColor: "primary",
      border: "none",
      cursor: "pointer",
      fontSize: 3,
      outline: "none",
      "&:hover": {
        backgroundColor: "secondary",
      },
    },
  },
  content: {
    justifyContent: "flex-start",
    paddingTop: "120px",
    width: "100%",
  },
  contentWrapper: {
    margin: "0 auto",
    maxWidth: 1080,
    padding: "27px 20px",
    width: "100%",
  },
  contentGrid: {
    padding: "20px 0",
    width: "100%",
  },
  footer: {
    alignItems: "center",
    backgroundColor: "#222",
    color: "#666",
    display: "flex",
    fontSize: 1,
    height: "53px",
    justifyContent: "center",
    width: "100%",
    a: {
      color: "#928b8b",
      textDecoration: "none",
      transition: "color .4s ease-in-out",
      "&:hover": {
        color: "#444",
      },
    },
    ".footer-wrapper": {
      maxWidth: 1080,
      padding: "0 20px",
      width: "100%",
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
  },
};
