const routes = require("express").Router();
const path = require("path");
const cursosController = require("../controllers/cursos")

routes.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

routes.get("/cursos", async (req, res) => {
    const results = await cursosController.showCourses(req, res);
    res.send(results);
})

routes.post("/curso", async (req, res) => {
    const results = await cursosController.addCourse(req, res);
    res.send(results);
})

routes.delete("/curso/:id", async (req, res) => {
    const results = await cursosController.deleteCourse(req, res);
    res.send(results);
})

routes.put("/curso/:id", async (req, res) => {
    const results = await cursosController.editCourse(req, res);
    res.send(results);
})



module.exports = {
    routes
}