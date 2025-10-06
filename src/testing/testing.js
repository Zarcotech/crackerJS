import { JSDOM } from "jsdom";
import Cracker from "../../public/base/main/cracker.js";
import * as fs from 'fs'; 
import * as path from 'path'; 

const dom = new JSDOM(`<!DOCTYPE html><html><head><title>Cracker OS</title></head><body></body></html>`);
global.document = dom.window.document;
global.window = dom.window;

const instance = new Cracker({
    bgColor: "#231163",
    color: "#f7faac",
    fontFamily: "Arial, sans-serif"
});

instance.createOS();

const generatedHtml = dom.serialize();

const outputPath = path.join(process.cwd(), 'public/base/main/output.html');

fs.writeFileSync(outputPath, generatedHtml);


console.log(`Generated OS HTML saved to: ${outputPath}`);
