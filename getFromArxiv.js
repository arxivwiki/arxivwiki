const fetch = require('node-fetch');
const fs = require('fs').promises;

async function getDataFromArxiv(id) {
    const response = await fetch('https://export.arxiv.org/api/query?id_list=' + id);
    const data = await response.text();
    title = data.split("<title>")[1].split("</title>")[0]
        .replace(/\n/g, ' ')
        .replace(/ +/g, ' ')
        .trim();

    abstract = data.split("<summary>")[1].split("</summary>")[0]
        .replace(/\n/g, ' ')
        .replace(/ +/g, ' ')
        .trim();

    authors = data.substring(data.indexOf("<author>"), data.lastIndexOf("</author>"))
        .replace(/<arxiv:affiliation[^<]*<\/arxiv:affiliation>/g, '')
        .replace(/<\/?author>/g, '').replace(/\n/g, ' ').replace(/ +/g, ' ')
        .replace(/<\/name> <name>/g, ', ').replace(/<\/?name>/g, '')
        .trim();

    return {
        title: title,
        abstract: abstract,
        authors: authors
    };
}

(async () => {
    var files = await fs.readFile("./_data/all.csv", 'utf-8');
    var fileList = files.split('\n').slice(1);
    let existingData = await fs.readFile("./_data/arxivdata.json", 'utf-8');
    existingData = JSON.parse(existingData);

    for (idx = 0; idx < fileList.length; idx++) {
        if (fileList[idx].trim()) {
            var name = fileList[idx].slice(4);
            var myData = existingData[name];
            if (!myData) {
                console.log("requesting", name);
                var newData = await getDataFromArxiv(name);
                existingData[name] = await newData;
                // console.log(existingData[name]);
            } else {
                console.log("skipping", name);
            }
        }
    };
    await fs.writeFile('./_data/arxivdata.json', JSON.stringify(existingData), console.log);
})();