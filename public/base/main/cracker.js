/*

Cracker JS

Author: Zarcotech
License: MIT

Credits:

aluraOS: Alura Network
PhantomOS: Phantom Network (Now Alura Network)

*/

'use strict';

class cracker {
    constructor() {
        this.name = "cracker";
        this.version = "1.0.0";
        this.author = "Zarcotech";
        this.description = "Your webOS, in one line.";
        this.license = "MIT";
        this.repo = "https://github.com/Zarcotech/cracker";
        this.website = "https://zarcotech.dev";
    }

    init() {
        console.log("%c[cracker] %cLoaded cracker JS v" + this.version + " by " + this.author, "color: #00ff00; font-weight: bold;", "color: #ffffff;");
    }

    run() {
        document.body.style.margin = "0";
        document.body.style.height = "100vh";
        document.body.style.display = "flex";
        document.body.style.justifyContent = "center";
        document.body.style.alignItems = "center";
        document.body.style.backgroundColor = "#1e1e1e";
        document.body.style.color = "#ffffff";
        document.body.style.fontFamily = "Arial, sans-serif";
        document.body.style.textAlign = "center";


        const createOS = (function () {

            function getBgColor(color) {
                return color || "#1e1e1e";
            }

            function getColor(color) {
                return color || "#ffffff";
            }

            function getFontFamily(font) {
                return font || "Arial, sans-serif";
            }

            function main(options = {}) {
                const osContainer = document.createElement("div");
                osContainer.style.width = "100%";
                osContainer.style.height = "100%";
                osContainer.style.display = "flex";
                osContainer.style.flexDirection = "column";
                osContainer.style.userSelect = "none";
                osContainer.style.backgroundColor = getBgColor(options.bgColor);
                osContainer.style.color = getColor(options.color);
                osContainer.style.fontFamily = getFontFamily(options.fontFamily);

                osContainer.style.justifyContent = "center";
                osContainer.style.alignItems = "center";

                document.body.appendChild(osContainer);
            }

            return main;
        })();

        /* Example usage 
            createOS({
                bgColor: "#282c34",
                color: "#61dafb",
                fontFamily: "Verdana, sans-serif"
            });
        */

    }
}

export default cracker;