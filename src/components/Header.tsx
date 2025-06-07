import type { TodoTitle } from '../types'
import { CreateTodo } from './CreateTodo.tsx'

interface Props {
  onAddTodo: ({ title }: TodoTitle) => void
}

export const Header = ({ onAddTodo }: Props) => {
  return (
    <header>
      <h1>
        Todo
        <img
          style={{
            width: '60px',
            height: 'auto',
          }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/800px-Typescript_logo_2020.svg.png"
          alt="Typescript"
        />
      </h1>

      <CreateTodo saveTodo={onAddTodo} />
    </header>
  )
}
