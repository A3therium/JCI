function gallery_gen() {
    const fs = require('fs');
    var files = fs.readdirSync('./images/gallery');

    var output = {
        gallery: []
    };

    files.forEach(element => {
        output.gallery.push("<img src=\"./images/gallery/" + element + "\"></img>\n")
    });

    json = JSON.stringify(output);
    console.log(json);
    fs.writeFile('galleryIMG.json', json, err => {
        if (err) {
            console.log(err);
        }
    });
}

gallery_gen();