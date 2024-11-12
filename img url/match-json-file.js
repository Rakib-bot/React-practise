const fs = require('fs');
const path = require('path');
const readJson = (fileName) => {
    try {
        const address = path.join(__dirname, fileName);
        const data1 = fs.readFileSync(address, 'utf8');
        return JSON.parse(data1);

    }
    catch (err) {
        console.log(err);
        return null;
    }
}
const writeJson = (fileName, data) => {
    try {
        const address = path.join(__dirname, fileName);
        fs.writeFileSync(address, JSON.stringify(data, null, 2));
        console.log('Image URLs written to user.json');

    }
    catch (err) {
        console.log(err);
        return null;
    }

}
let baseData = readJson('user.json');
let fakeData = readJson('fakeData.json');
let i=0;
for (const data of fakeData) {
    data['img'] = baseData[i].img;
    i++;
}
//console.log(fakeData);
writeJson('fakeData.json', fakeData);

module.exports =
{
    readJson,
    writeJson
};