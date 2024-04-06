type hsl = `hsl(${number},${number}%,${number}%)`;

interface ColorTheme {
  navbar: hsl;
  background: hsl;
  title: hsl;
  subtitle: hsl;
  body: hsl;
  section: hsl;
  highlight: hsl;
  text_color: hsl;
}
