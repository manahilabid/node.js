const fs = require("fs");
//write
// fs.writeFile("manahil.txt","this is the file",(err)=>{
//     if (err) {
//         console.error("file is not created",err);
//     }
//     else{
//         console.log("file created");
//     }
// })
//read
// fs.readFile("manahil.txt","utf-8",(err,data)=>{
//      if (err) {
//         console.error("file error",err);
//     }
//     else{
//         console.log(data);
//     }
// })
//update
// fs.appendFile("manahil.txt","/nthis is third line" ,(err)=>{
//     if (err) {
//         console.error("file error",err);
//     }
//     else{
//         console.log("file updated");
//     }
// })
//delete
// fs.unlink("manahil.txt",(err)=>{
//     if (err) {
//         console.error("file error",err);
//     }
//     else{
//         console.log("file deleted");
//     }
// })