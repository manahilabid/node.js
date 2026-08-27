const http = require("http");
const PORT = 3000;

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.setHeader("Content-Type", "text/html");
        res.write("<h1>Hello Node.js Server</h1>");
        res.end();
    }
    else if (req.url === "/about") {
        res.setHeader("Content-Type", "text/html");
        res.write("<h1>This is About Page</h1>");
        res.end();
    }
    else if (req.url === "/contact") {
        res.setHeader("Content-Type", "text/plain");
        res.write("This is Contact Page");
        res.end();
    }
    else if (req.url === "/services") {
        res.setHeader("Content-Type", "text/plain");
        res.write("This is Services Page");
        res.end();
    }
    else if (req.url === "/gallery") {
        res.setHeader("Content-Type", "text/plain");
        res.write("This is Gallery Page");
        res.end();
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});