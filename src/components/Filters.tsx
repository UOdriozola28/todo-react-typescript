import { FILTERS_BUTTONS } from '../consts'
import type { FilterValue } from '../types'

interface Props {
  filterSelected: FilterValue
  onFilterChange: (filter: FilterValue) => void
}

export const Filters = ({ filterSelected, onFilterChange }: Props) => {
  // const handleClick = (filter: FilterValue) => {}

  return (
    <ul className="filters">
      {Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
        const isSelected = key === filterSelected
        const className = isSelected ? 'selected' : ''

        return (
          <li key={key}>
            <a
              href={href}
              className={className}
              onClick={(e) => {
                e.preventDefault()
                onFilterChange(key as FilterValue)
              }}
            >
              {literal}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
