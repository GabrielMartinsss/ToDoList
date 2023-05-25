import { Trash } from 'phosphor-react'

import style from './Task.module.css'
import check from '../assets/check.svg'
import emptyCheck from '../assets/emptyCheck.svg'

interface Task {
  id: number
  task: string
  completed: boolean
}

interface TaskProps {
  content: Task
  onDeleteTask: (task: number) => void
  onDoneTask: (task: number) => void
}

export function Task({content, onDeleteTask, onDoneTask}: TaskProps) {

  function handleDeleteTask(){
    onDeleteTask(content.id)
  }

  function handleDoneTask(){
    onDoneTask(content.id)
  }

  return (
    <div className={style.task} >
      <button onClick={handleDoneTask}>
        {content.completed ? <img src={check} alt="" /> : <img src={emptyCheck} alt="" /> }
        
      </button>
      <p className={content.completed ? style.taskCompleted : ''}>{content.task}</p>
      <button onClick={handleDeleteTask}>
        <Trash size={18}/>
      </button>
    </div>
  )
}