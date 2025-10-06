import { JSDOM } from "jsdom";
import cracker from "../../public/base/main/cracker.js";
import * as fs from 'fs'; 
import * as path from 'path'; 

const { window } = new JSDOM(`<!DOCTYPE html><body></body>`);
const { document } = window;

const dom = new JSDOM(`<!DOCTYPE html><html><head><title>Cracker OS</title></head><body></body></html>`);
global.document = document;
global.window = window;

const instance = new cracker();

instance.init();
instance.run();

const generatedHtml = dom.serialize();

const outputPath = path.join(process.cwd(), 'public/base/main/output.html');

fs.writeFileSync(outputPath, generatedHtml);

console.log(`Generated OS HTML saved to: ${outputPath}`);