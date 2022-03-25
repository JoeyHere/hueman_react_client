import React from "react"
import { Dropdown } from "semantic-ui-react"

const difficultyOptions = [
  {
    key: "All",
    text: "All",
    value: "All"
  },
  {
    key: "Hard",
    text: "Hard",
    value: "Hard"
  },
  {
    key: "Easy",
    text: "Easy",
    value: "Easy"
  },
  {
    key: "HUEman",
    text: "HUEman",
    value: "HUEman"
  },
  {
    key: "Tutorial",
    text: "Tutorial",
    value: "Tutorial"
  }
]

const sortOptions = [
  {
    key: "New",
    text: "New",
    value: "New"
  },
  {
    key: "Popular",
    text: "Popular 🔥",
    value: "Popular"
  }
]

const DropDownFilter = props => (
  <span className="filterLevels">
    Show{" "}
    <Dropdown
      onChange={props.handleFilterChange}
      inline
      options={difficultyOptions}
      value={props.filterState}
    />
    Levels, Sorted By{" "}
    <Dropdown
      onChange={props.handleOrderChange}
      inline
      options={sortOptions}
      value={props.orderState}
    />
  </span>
)

export default DropDownFilter
