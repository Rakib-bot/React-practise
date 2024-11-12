const fs = require('fs');
const path = require('path');
const axios = require('axios');
const FormData = require('form-data');

const apiKey = 'dfc83c6ad78d6f7dec4fe69c3fdaec3e'; // Replace with your imgbb API key
const imgDirectory = path.join(__dirname, 'img');
const outputFilePath = path.join(__dirname, 'user.json');

// Function to upload image to imgbb
const uploadImage = async (imagePath) => {
    try {
        const form = new FormData();
        form.append('image', fs.createReadStream(imagePath));
        form.append('key', apiKey);

        const response = await axios.post('https://api.imgbb.com/1/upload', form, {
            headers: {
                ...form.getHeaders(),
            },
        });

        return response.data.data.url;
    } catch (error) {
        console.error(`Error uploading image ${imagePath}:`, error);
        return null;
    }
};

// Function to upload all images and write URLs to user.json
const uploadAllImages = async () => {
    try {
        const imageFiles = fs.readdirSync(imgDirectory);
        const imageUrls = [];
        let id = 1;
        for (const file of imageFiles) {
            const filePath = path.join(imgDirectory, file);
            const url = await uploadImage(filePath);

            if (url) {
                imageUrls.push({ id: id++, img: url });
            }
        }

        fs.writeFileSync(outputFilePath, JSON.stringify(imageUrls, null, 2));
        console.log('Image URLs written to user.json');
    } catch (error) {
        console.error('Error processing images:', error);
    }
};

uploadAllImages();
