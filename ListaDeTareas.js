const readline = require('readline');

const taskList = [];

function addTask(description) {
  taskList.push({ id: taskList.length + 1, description, completed: false });
}

function deleteTask(id) {
  const index = taskList.findIndex(task => task.id === id);
  if (index !== -1) {
    taskList.splice(index, 1);
  }
}

function completeTask(id) {
  const task = taskList.find(task => task.id === id);
  if (task) {
    task.completed = true;
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('(Opción A: Añadir tarea, Opción B: Eliminar tarea, Opción C: Completar tarea)', function(choice) {
  if (choice === 'A') {
    rl.question('¿Que tarea deseas añadir?:', function(description) {
      addTask(description);
      console.log('Tarea añadida correctamente.');
      rl.close();
    });
  } else if (choice === 'B') {
    rl.question('Introduce la tarea a eliminar:', function(id) {
      deleteTask(parseInt(id));
      console.log('Tarea eliminada correctamente.');
      rl.close();
    });
  } else if (choice === 'C') {
    rl.question('Introduce la tarea a completar:', function(id) {
      completeTask(parseInt(id));
      console.log('Tarea completada correctamente.');
      rl.close();
    });
  } else {
    console.log('Opción inválida.');
    rl.close();
  }
});