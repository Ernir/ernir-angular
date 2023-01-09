const fs = require("fs");
const matter = require("gray-matter");

const dir = "src/assets/recipes/";

fs.readdir(dir, (err, files) => {
  const parsedFiles = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => matter.read(dir + file));
  fs.writeFile(
    dir + "recipes.json",
    JSON.stringify(parsedFiles),
    "utf8",
    (err) => err
  );
});
