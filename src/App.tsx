import { ChangeEvent, FormEvent, useState } from 'react'
import { PlusCircle } from 'phosphor-react'

import { Header } from './components/Header'
import { EmptyTask } from './components/EmptyTask'
import { StatusTasks } from './components/StatusTasks'

import './global.css'
import style from './App.module.css'
import { Task } from './components/Task'

interface Task {
  id: number
  task: string
  completed: boolean
}

function App() {
  const [ tasks, setTasks ] = useState<Task[]>([])
  const [ newTask, setNewTask ] = useState('')

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTask(event.target.value)
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()
    setTasks([...tasks, {
      id: Math.floor(Math.random() * 9999),
      task: newTask,
      completed: false
    }])
    setNewTask('')
  }

  function doneTask(taskHasBeenCompletedId: number) {
    const  newTasks = tasks.map(task => {
      if (task.id === taskHasBeenCompletedId) {
        return {...task, completed: !task.completed}
      }
      return task
    })

    setTasks(newTasks)   
  }

  function deleteTask(taskToRemoveId: number) {
    const tasksWithoutDeleteOn = tasks.filter(task => {
      return task.id !== taskToRemoveId
    })

    setTasks(tasksWithoutDeleteOn)
  }

  const isNewTaskEmpty = newTask.length === 0

  return (
    <div>
      <Header />
      
    <form onSubmit={handleCreateNewTask} className={style.inputSecion}>
      <input 
        type="text"
        value={newTask}
        onChange={handleNewTaskChange}
        required
        placeholder='Adicione um nova tarefa' 
      />
      
      <button 
        type='submit'
        disabled={isNewTaskEmpty}
      >
        Criar
        <PlusCircle color='#F2F2F2'/>
      </button>
    </form>
      
      <main className={style.wrapper} >
        <StatusTasks tasks={tasks}/>

        {tasks.length === 0 ? <EmptyTask /> : (
          tasks.map(task => {
            return (
              <Task 
                key={task.id}
                content={task}
                onDoneTask={doneTask}
                onDeleteTask={deleteTask}
              />
            )
          })
        )}
        
      </main>
    </div>
  )
}

export default App
