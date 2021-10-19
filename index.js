const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
require("dotenv").config();


const { routes } = require("./routes/routes");

// middlewares
app.use(express.json());

//routes
app.use(routes);

app.listen(PORT, () => {
    console.log(`Server is up and listening by port ${PORT}, process: ${process.pid}`);
})