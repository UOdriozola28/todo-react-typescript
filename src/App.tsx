import { useState } from 'react'
import { Todos } from './components/Todos'
import type {
  FilterValue,
  Todo,
  TodoId,
  TodoIdAndCompleted,
  TodoTitle,
} from './types'
import { Footer } from './components/Footer'
import { TODO_FILTERS } from './consts'
import { Header } from './components/Header'

const initialTodos = [
  {
    id: '1',
    title: 'Realizar tareas domesticas',
    completed: true,
  },
  {
    id: '2',
    title: 'Hacer limpieza a la sala',
    completed: false,
  },
  {
    id: '3',
    title: 'Jugar videojuegos',
    completed: false,
  },
  {
    id: '4',
    title: 'Javier: Ir por una gringuita <3',
    completed: false,
  },
]

const App = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const storedTodos = localStorage.getItem('todos')
    return storedTodos ? JSON.parse(storedTodos) : initialTodos
  })

  const [filterSelected, setFilterSelected] = useState<FilterValue>(
    TODO_FILTERS.ALL
  )

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter((item) => item.id !== id)
    localStorage.setItem('todos', JSON.stringify(newTodos))
    setTodos(newTodos)
  }

  const handleCompleted = ({ id, completed }: TodoIdAndCompleted): void => {
    {
      const newTodos = todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed,
          }
        }

        return todo
      })
      localStorage.setItem('todos', JSON.stringify(newTodos))
      setTodos(newTodos)
    }
  }

  const handleFilterChange = (filter: FilterValue) => {
    setFilterSelected(filter)
  }

  const handleRemoveAllCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.completed)
    localStorage.setItem('todos', JSON.stringify(newTodos))
    setTodos(newTodos)
  }

  const handleAddTodo = ({ title }: TodoTitle) => {
    const newTodos = [
      ...todos,
      {
        id: crypto.randomUUID(),
        title: title,
        completed: false,
      },
    ]
    localStorage.setItem('todos', JSON.stringify(newTodos))
    setTodos(newTodos)
  }

  const completedCount = todos.filter((todo) => todo.completed).length
  const activeCount = todos.length - completedCount

  const filteredTodos = todos.filter((todo) => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  return (
    <div className="todoapp">
      <Header onAddTodo={handleAddTodo} />
      <Todos
        todos={filteredTodos}
        onRemoveTodo={handleRemove}
        onToggleCompleteTodo={handleCompleted}
      />
      <Footer
        onClearCompleted={handleRemoveAllCompleted}
        completedCount={completedCount}
        activeCount={activeCount}
        filterSelected={filterSelected}
        handleFilterChange={handleFilterChange}
      />
    </div>
  )
}

export default App
