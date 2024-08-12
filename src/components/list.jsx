import { Trash } from "phosphor-react";
import styles from "./List.module.css";
import { useId } from "react";

export function List({content, onDeleteTask, onMarkBox}) {
  const id = useId();

  function handleMarkBox () {
    onMarkBox(content)
  }
  
  function handleDeleteTask () {
    onDeleteTask(content)
  }
  
  return (
    <form className={styles.container}>
      <input id={id} onClick={handleMarkBox} type="checkbox" />
      <label htmlFor={id}>{content}</label>
    
    <button type="submit" onClick={handleDeleteTask} >
      <Trash size={20} />
    </button>
    
    </form>
  );
}
