import React from 'react';
import Header from './"c:/Users/urban/proyecto integrador listado de Tareas/my-react-app/src/component/header"';
import TaskList from './"c:/Users/urban/proyecto integrador listado de Tareas/my-react-app/src/component/taskList"';
import tasks from './data';

function App() {
  return (
    <div>
      <Header />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;