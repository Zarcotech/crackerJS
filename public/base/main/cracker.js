/*

Cracker JS

Author: zarcotech
License: MIT

Credits:

aluraOS: Alura Network
PhantomOS: Phantom Network (Now Alura Network)

*/

'use strict';

class Cracker {
    constructor(options = {}) {
        const config = { ...this.defaultOptions, ...options };
        Object.assign(this, config);

        this.name = "Cracker";
        this.version = "1.0.0";
        this.author = "Zarcotech";
        this.description = "Your webOS, in one line.";
        this.license = "MIT";
        this.repo = "https://github.com/Zarcotech/cracker";
        this.website = "https://zarcotech.dev";

        this.defaultOptions = {
            bgColor: "#1e1e1e",
            color: "#ffffff",
            fontFamily: "Arial, sans-serif"
        };
    }


    createOS() {
        console.log(`%c[Cracker] %cLoaded Cracker JS v${this.version} by ${this.author}`);
        
        this.run({
            bgColor: this.bgColor,
            color: this.color,
            fontFamily: this.fontFamily
        });
    }

    run(options = {}) {
        const config = { ...this.defaultOptions, ...options };

        const style = document.createElement("style");
        style.innerHTML = `
            body {
                margin: 0;
                height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
            }
            .os-container {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                user-select: none;
                background-color: ${config.bgColor};
                color: ${config.color};
                font-family: ${config.fontFamily};
                justify-content: center;
                align-items: center;
            }
        `;

        document.head.appendChild(style);

        const osContainer = document.createElement("div");
        osContainer.className = "os-container";
        document.body.appendChild(osContainer);

        return osContainer;
    }
}

export default Cracker;
