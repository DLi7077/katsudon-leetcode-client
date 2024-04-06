import { useState } from "react";

export const navbarColor = (hue: number): hsl => `hsl(${hue},50%,45%)`;
export const backgroundColor = (hue: number): hsl => `hsl(${hue},10%,10%)`;
export const titleColor = (hue: number): hsl => `hsl(${hue},20%,15%)`;
export const subtitleColor = (hue: number): hsl => `hsl(${hue},20%,25%)`;
export const bodyColor = (hue: number): hsl => `hsl(${hue},10%,15%)`;
export const sectionColor = (hue: number): hsl => `hsl(${hue},10%,20%)`;
export const textColor = (hue: number): hsl => `hsl(${hue},40%,90%)`;
export const highlightColor = (hue: number): hsl => `hsl(${hue},100%,75%)`;

export const generateTheme = (hue: number): ColorTheme => ({
  navbar: navbarColor(hue),
  background: backgroundColor(hue),
  title: titleColor(hue),
  subtitle: subtitleColor(hue),
  body: bodyColor(hue),
  section: sectionColor(hue),
  text_color: textColor(hue),
  highlight: highlightColor(hue),
});

export default function useColorTheme(hue: number): [ColorTheme, any] {
  const [theme, setTheme] = useState(generateTheme(hue));

  function updateTheme(hue: number): void {
    setTheme(generateTheme(hue));
  }
  return [theme, updateTheme];
}
