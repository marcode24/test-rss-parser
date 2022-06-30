const express = require("express");
const app = express();
const PORT = 3000;

const Parser = require("rss-parser");
const parser = new Parser();

const { stripHtml } = require("string-strip-html");

app.use(express.static(__dirname + "/public"));

app.get("/json", async (req, res) => {
  // const feed = await parser.parseURL("http://feeds.weblogssl.com/applesfera");
  // const feed = await parser.parseURL("http://feeds.weblogssl.com/xatakamx");
  const feed = await parser.parseURL("http://feeds.weblogssl.com/genbeta");
  // const feed = await parser.parseURL(
  //   "https://miescapedigital.com/cual-es-el-mejor-juego-de-casino-online/feed/"
  // );
  console.log(feed.title);
  const description = stripHtml(feed.items[2].content, {
    ignoreTags: ["img", "p", "a", "strong", "h2", "ul", "li"],
    skipHtmlDecoding: false,
  }).result;
  // const description = stripHtml(feed.items[0].content).result;
  console.log(feed.items[0].content);
  console.log({ description });
  res.json({ description });
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
