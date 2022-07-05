const http = require("http")
const fs = require("fs")

const handleErr = fs.readFileSync("assets/error.html")

function changePath(path, response) {
    fs.readFile(path, (err, data) => {
        if (err) {
            response.end(handleErr)
            return
        }
        response.end(data.toString())
    })
} {

}


server = http.createServer((request, response) => {
    console.log("new Request", request.url, request.method);
    if (request.url === "/") {
        changePath("assets/home.html", response)
    } else {
        const pagePath = "assets" + request.url;
        changePath(pagePath, response)
    }
})

const PORT = 8008
server.listen(PORT, () => { console.log("server is listening on Port: ", PORT) })