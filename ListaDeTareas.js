const readline = require('readline');

const taskList = [];

function addTask(description) {
  return new Promise((resolve, reject) => {
    taskList.push({ id: taskList.length + 1, description, completed: false });
    resolve("Tarea añadida correctamente.");
  });
}

function deleteTask(id) {
  return new Promise((resolve, reject) => {
    const index = taskList.findIndex(task => task.id === id);
    if (index !== -1) {
      taskList.splice(index, 1);
      resolve("Tarea eliminada correctamente.");
    } else {
      reject("No se encontró la tarea.");
    }
  });
}

function completeTask(id) {
  return new Promise((resolve, reject) => {
    const task = taskList.find(task => task.id === id);
    if (task) {
      task.completed = true;
      resolve("Tarea completada correctamente.");
    } else {
      reject("No se encontró la tarea.");
    }
  });
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function run() {
  try {
    const choice = await new Promise((resolve, reject) => {
      rl.question('(Opción A: Añadir tarea, Opción B: Eliminar tarea, Opción C: Completar tarea) ', function (answer) {
        resolve(answer);
      })
    });
    if (choice === 'A') {
      const description = await new Promise((resolve, reject) => {
        rl.question('¿Qué tarea deseas añadir?: ', function(answer) {
          resolve(answer);
        })
      });
      console.log(await addTask(description));
      rl.close();
    } else if (choice === 'B') {
      const id = await new Promise((resolve, reject) => {
        rl.question('Introduce la tarea a eliminar: ', function (answer) {
          resolve(parseInt(answer));
        })
      });
      console.log(await deleteTask(id));
      rl.close();
    } else if (choice === 'C') {
      const id = await new Promise((resolve, reject) => {
        rl.question('Introduce la tarea a completar: ', function (answer) {
          resolve(parseInt(answer));
        })
      });
      console.log(await complete
