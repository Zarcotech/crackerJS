import Cracker from "../../public/base/main/pepper.js";

const instance = new Cracker();

instance.createOS({
  bgColor: "red",
  color: "blue",
  fontFamily: "Arial, sans-serif",
  outputFile: "output.html"
})

instance.createBrowser({
  bg: "red",
  color: "blue",
  fontFamily: "Arial, sans-serif",
  outputFile: "browser.html"
});
