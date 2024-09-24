import css from './TaskList.module.css'
import { useSelector } from 'react-redux';
import Task from "../../components/Task/Task"



export default function TaskList() {
    const items = useSelector((state) => state.tasks.items);
    
    return (
    <ul className={css.list}>
      {items.map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}