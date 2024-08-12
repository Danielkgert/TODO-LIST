import { useState } from "react";
import { List } from "./list";
import { PlusCircle } from "phosphor-react";
import clipboard from "../assets/Clipboard.png";

import styles from "./Task.module.css";

export function Task() {
  const [tasks, setTasks] = useState([]);

  const [newTasks, setNewTasks] = useState('')

  function handleByCheckbox () {
    const taskAccomplished = 'carneiro'
    return console.log(taskAccomplished)
  }

  function handleCreateNewTask() {
    event.preventDefault();

    setTasks([...tasks, newTasks]);
    setNewTasks('')
  }

  function handleNewTaskChange() {
    event.target.setCustomValidity('')
    setNewTasks(event.target.value)
  }

  function handleCreateNewTaskInvalid(){
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  function deleteTasks(tasksToDelete) {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task != tasksToDelete
    })

    setTasks(tasksWithoutDeletedOne)
  }

  return (
    <section className={styles.task}>
      <form onSubmit={handleCreateNewTask} className={styles.newTask}>
        <textarea
          name="createdNewTask"
          placeholder="Adicione uma nova tarefa"
          value={newTasks}
          onChange={handleNewTaskChange}
          onInvalid={handleCreateNewTaskInvalid}
          type="text"
        />

        <button type="submit">
          <strong>
            Criar
            <PlusCircle size={15} />
          </strong>
        </button>
      </form>

      <div className={styles.taskInfo}>
        <div className={styles.createdTask}>
          <p>Tarefas Criadas</p>

          <div className={styles.taskNumber}>
            <span>{tasks.length}</span>
          </div>
        </div>

        <div className={styles.completedTask}>
          <p>Concluídas</p>

          <div className={styles.taskNumber}>
            <span>2 de {tasks.length}</span>
          </div>
        </div>
      </div>

      {tasks.length > 0 ? (
        <div className={styles.taskList}>
          {tasks.map(task => {
            return <List 
            key={task}
            content={task} 
            onDeleteTask={deleteTasks}
            onMarkBox={handleByCheckbox}
            />;
          })}
        </div>
      ) : (
        <div className={styles.noTasks}>

          <div className={styles.line}></div>

          <img src={clipboard} />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
      )}
    </section>
  );
}
