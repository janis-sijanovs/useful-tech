import fs from 'fs';

// Extract HTML into a seperate file
const debugScrape = (data) => {
    fs.writeFile('debug.html', data, (err) => {
        if (err) {
            console.error('Failed to write file:', err);
        } else {
            console.log('HTML content written to debug.html');
        }
})}