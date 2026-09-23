const fs = require('fs');
const path = require('path');
const https = require('https');

const baseUrl = 'https://nayonacademy.com/html/evenzax/';
const cssFiles = [
    'assets/css/bootstrap.min.css',
    'assets/css/all.min.css',
    'assets/css/animate.css',
    'assets/css/magnific-popup.css',
    'assets/css/meanmenu.css',
    'assets/css/swiper-bundle.min.css',
    'assets/css/nice-select.css',
    'assets/css/main.css'
];
const jsFiles = [
    'assets/js/jquery-3.7.1.min.js',
    'assets/js/viewport.jquery.js',
    'assets/js/bootstrap.bundle.min.js',
    'assets/js/gsap.min.js',
    'assets/js/ScrollTrigger.min.js',
    'assets/js/ScrollSmoother.min.js',
    'assets/js/ScrollToPlugin.min.js',
    'assets/js/SplitText.min.js',
    'assets/js/TextPlugin.js',
    'assets/js/jquery.nice-select.min.js',
    'assets/js/jquery.waypoints.js',
    'assets/js/jquery.counterup.min.js',
    'assets/js/swiper-bundle.min.js',
    'assets/js/jquery.meanmenu.min.js',
    'assets/js/jquery.magnific-popup.min.js',
    'assets/js/wow.min.js',
    'assets/js/main.js'
];

function download(url, dest) {
    return new Promise((resolve, reject) => {
        const dir = path.dirname(dest);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            if (response.statusCode === 200) {
                response.pipe(file);
                file.on('finish', () => {
                    file.close(resolve);
                });
            } else {
                fs.unlink(dest, () => reject(`Failed: ${response.statusCode}`));
            }
        }).on('error', (err) => {
            fs.unlink(dest, () => reject(err.message));
        });
    });
}

async function main() {
    console.log("Downloading CSS...");
    for (const file of cssFiles) {
        await download(baseUrl + file, path.join(__dirname, 'public', file));
        console.log(`Downloaded ${file}`);
    }
    console.log("Downloading JS...");
    for (const file of jsFiles) {
        await download(baseUrl + file, path.join(__dirname, 'public', file));
        console.log(`Downloaded ${file}`);
    }
    console.log("Done");
}

main().catch(console.error);
