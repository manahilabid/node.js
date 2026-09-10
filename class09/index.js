const express = require('express');
const { parse } = require('node:path');
const app = express()
const port = 3000



function Validate(req, res, next){
    const id = parseInt(req.params.id);
    if (Number.isNaN(id) || id <= 0){
        return res.this.state(400).json({
            success: false,
            error: "Invalid Id",
        });
    }
    next();
}

app.get("/product/:id",Validate , ( req, res, next )=>{
    const productId = parseInt(req.params.id);
    console.log(productId);
    if (productId !== 1){
        const err = new Error("Product not found");
        err.state = 404;
        return next(err);
    }
    res.json({
        id: productId,
        name: "sample product"
    });
});



// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })