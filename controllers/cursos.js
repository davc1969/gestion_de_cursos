const { pgPoolQuery: pool, pgPoolQuery } = require("../services/pg_pool_services");


const showCourses = async (req, res) => {
    console.log("cursosController: showCourses");
    const query = {
        text: "select * from cursos;",
        values: []
    }

    try {
        const results = await pgPoolQuery(query);
        return results;
    } catch (error) {
        console.log("Error en consulta de datos", error.message);
        return error
    }
};

const addCourse = async (req, res) => {
    console.log("cursosController: addCourse");

    const query = {
        text: "insert into cursos (nombre, nivel, fecha, duracion) values ($1, $2, $3, $4) returning *;",
        values: Object.values(req.body)
    };
    try {
        const results = await pgPoolQuery(query);
        return results;
    } catch (error) {
        console.log("Error en adicion de datos", error.message);
        return error
    }
};


const deleteCourse = async (req, res) => {
    console.log("cursosController: deleteCourse");

    const query = {
        text: "delete from cursos where id = $1 returning *;",
        values: [req.params.id]
    };
    try {
        const results = await pgPoolQuery(query);
        return results;
    } catch (error) {
        console.log("Error en eliminacion de datos", error.message);
        return error
    }
};

const editCourse = async (req, res) => {
    console.log("cursosController: editCourse");

    let valuesForQuery = Object.values(req.body);
    valuesForQuery.unshift(req.params.id);
    const query = {
        text: "update cursos set nombre = $2, nivel = $3, fecha = $4, duracion = $5 where id = $1 returning *;",
        values: valuesForQuery
    };
 
    try {
        const results = await pgPoolQuery(query);
        return results;
    } catch (error) {
        console.log("Error en edicion de datos", error.message);
        return error
    }
};



module.exports = {
    showCourses,
    addCourse,
    deleteCourse,
    editCourse
}