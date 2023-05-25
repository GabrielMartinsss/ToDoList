import style from './EmptyTask.module.css'

import clipBoard from '../assets/Clipboard.png'

export function EmptyTask() {
  return (
    <div className={style.tasks}>
      <img src={clipBoard} alt="Logo clipbord" />
      <h3>Você ainda não tem tarefas cadastradas</h3>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  )
}