const fs = require("fs");
const matter = require("gray-matter");

const dir = "src/assets/recipes/";
const PARENTHESES = /\s\(([^\(]*)\)/gm;

fs.readdir(dir, writeFile);

function writeFile(err, files) {
  const parsedFiles = files
    .filter(file => file.endsWith(".md"))
    .map(file => matter.read(dir + file))
    .map(file => {
      file.content = sidenotifyParantheses(file.content);
      return file;
    });
  fs.writeFile(dir + "recipes.json", JSON.stringify(parsedFiles), "utf8", err => err);
}

/**
 * Returns a version of the given content string where parentheses instead wrap the HTML contents of
 * the section with a tufte-css style (https://edwardtufte.github.io/tufte-css/) sidenote.
 */
function sidenotifyParantheses(content) {
  let noteCount = 0;
  return content.replace(
    PARENTHESES,
    (_, content) =>
      // This chonker of a string is whitespace-sensitive, do not split over multiple lines
      `<label for="sn-${++noteCount}" class="margin-toggle sidenote-number"></label><input type="checkbox" id="sn-${noteCount}" class="margin-toggle"/><span class="sidenote">${content}</span>`
  );
}
