import { useEffect } from 'react'
import TaskForm from '../TaskForm/TaskForm'
import TaskList from '../TaskList/TaskList'
import css from './App.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTasks } from '../../redux/tasksOps'
import Loader from '../Loader/Loader'
import Error from '../Error/error'


export default function App() {
    const loading = useSelector((state) => state.tasks.loading);
    const error = useSelector((state) => state.tasks.error);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchTasks())
    }, [dispatch]);


    return (
        <div className={css.container}>
            <h1>HTTP requests with Redux</h1>
            <TaskForm />
            {loading && <Loader>Loading message</Loader>}
            {error && <Error>Error nessage</Error>}
            <TaskList/>
        </div>
    )
}