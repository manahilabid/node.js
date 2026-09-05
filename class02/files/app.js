    // const path = require("path");
    // const filepath = path.join("class02","files","app.js");
    // console.log(filepath); 

    const path = require("path");
    const result = path.join("home/folders/app.js/ali");
    console.log(path.join("project","files","app.js"));
    console.log(path.basename(result));
    console.log(path.dirname(result));
    console.log(path.extname(result));