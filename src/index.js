import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public' + '/welcome' + '/welcome.html');    
})

app.get('/sample', (req, res) => {
    res.sendFile(__dirname + '/public' + '/base' + '/os' + '/samples' + '/cracker.html');    
})

const port = process.env.PORT || 3000;

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});