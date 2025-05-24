const https = require('https');
const fs = require('fs');
const path = require('path');

const images = {
    categories: {
        'modern.jpg': 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=1600&q=80', // Modern fashion
        'classic.jpg': 'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=1600&q=80', // Classic fashion
        'promo.jpg': 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1600&q=80', // Promo fashion
    },
    promo: {
        'men-fashion.jpg': 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=1600&q=80', // Men's fashion
    }
};

async function downloadImage(url, filepath) {
    return new Promise((resolve, reject) => {
        https.get(url, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Failed to download image: ${response.statusCode}`));
                return;
            }

            const fileStream = fs.createWriteStream(filepath);
            response.pipe(fileStream);

            fileStream.on('finish', () => {
                fileStream.close();
                console.log(`Downloaded: ${filepath}`);
                resolve();
            });

            fileStream.on('error', (err) => {
                fs.unlink(filepath, () => reject(err));
            });
        }).on('error', reject);
    });
}

async function downloadAllImages() {
    for (const [category, categoryImages] of Object.entries(images)) {
        const categoryPath = path.join(__dirname, '..', 'public', 'images', category);

        // Ensure directory exists
        if (!fs.existsSync(categoryPath)) {
            fs.mkdirSync(categoryPath, { recursive: true });
        }

        for (const [filename, url] of Object.entries(categoryImages)) {
            const filepath = path.join(categoryPath, filename);
            try {
                await downloadImage(url, filepath);
            } catch (error) {
                console.error(`Error downloading ${filename}:`, error);
            }
        }
    }
}

downloadAllImages().then(() => {
    console.log('All images downloaded successfully!');
}).catch(console.error); 