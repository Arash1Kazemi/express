const express = require("express");
const app = express();

app.set('view engine', 'ejs');
// app.use(logger)

app.get('/', logger, logger, logger, (req, res) => { //next  dont use in get and post just use in middleware
    console.log("hyer");
    res.render('index', { text: "World" })
});

app.use(logger) // top to bottom

const userRouter = require("./routes/users") // Update the path here

app.use("/users", userRouter)


function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

app.listen(3000)
