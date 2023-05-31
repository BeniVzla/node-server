const http = require('http');
const port = 3000;
const host = 'localhost';

const listaDeTareas = [
    {
      id: 1,
      tarea: "Ir al supermercao",
      descripcion: "Hacer la compra del mes",
      completada: true
    },
    {
        id: 2,
        tarea: "Repasar temas pendientes",
        descripcion: "Repasar React y Node.js",
        completada: false
    },
    {
        id: 3,
        tarea: "Realizar las tareas",
        descripcion: "Ponerme al dia con las actividades",
        completada: false
    }
];
 const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(listaDeTareas));
 });

 server.listen(port, host, () => {
    console.log("Servidor lista de tareas")
 });
