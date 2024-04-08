import CPP from "../assets/languages/C++.svg";
import C from "../assets/languages/C.svg";
import CSharp from "../assets/languages/CSharp.svg";
import Elixir from "../assets/languages/Elixir.svg";
import Golang from "../assets/languages/Golang.svg";
import Java from "../assets/languages/Java.svg";
import JavaScript from "../assets/languages/JavaScript.svg";
import Kotlin from "../assets/languages/Kotlin.svg";
import PHP from "../assets/languages/PHP.svg";
import Python from "../assets/languages/Python.svg";
import Ruby from "../assets/languages/Ruby.svg";
import Rust from "../assets/languages/Rust.svg";
import Scala from "../assets/languages/Scala.svg";
import Swift from "../assets/languages/Swift.svg";
import TypeScript from "../assets/languages/TypeScript.svg";

export const LANGUAGE_LOGOS: Record<string, string> = {
  C: C,
  "C#": CSharp,
  "C++": CPP,
  Elixir: Elixir,
  Go: Golang,
  Kotlin: Kotlin,
  JavaScript: JavaScript,
  Java: Java,
  PHP: PHP,
  Python: Python,
  Python3: Python,
  Ruby: Ruby,
  Rust: Rust,
  Scala: Scala,
  Swift: Swift,
  TypeScript: TypeScript,
};

export const LANGUAGE_COMPILE_MAPPING: Record<string, string> = {
  C: "c",
  "C#": "csharp",
  "C++": "cpp",
  Elixir: "elixir",
  Go: "go",
  Kotlin: "kotlin",
  JavaScript: "javascript",
  Java: "java",
  PHP: "php",
  Python: "python",
  Python3: "python",
  Ruby: "ruby",
  Rust: "rust",
  Scala: "scala",
  Swift: "swift",
  TypeScript: "typescript",
};
