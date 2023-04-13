import React from "react"
import PropTypes from "prop-types"

const TableHeader = ({ onSort, selectedSort, columns }) => {
    const handlesSort = (item) => {
        if (selectedSort.path === item) {
            onSort({ ...selectedSort, order: selectedSort.order === "asc" ? "desc" : "asc" })
        } else {
            onSort({ path: item, order: "asc" })
        }
    }
    return (<thead>
        <tr>
            {Object.keys(columns).map((column) => (
                <th key={column}
                    onClick={columns[column].path ? () => handlesSort(columns[column].path) : undefined}
                    scope="col" {...{ role: columns[column].path && "button" }}>{columns[column].name}
                    {/* <i className="bi bi-caret-up-fill" onClick={columns[column].path ? () => handlesSort(columns[column].path) : undefined}></i> */}
                </th>
            ))}
            {/* <i class="bi bi-caret-down-fill"></i> - Вниз
            <i class="bi bi-caret-up-fill"></i> - Вверх */}

            {/* <th scope="col">Качества</th>
            <th onClick={() => handlesSort("profession.name")} scope="col">Профессия</th>
            <th onClick={() => handlesSort("completedMeetings")} scope="col">Встретился, раз</th>
            <th onClick={() => handlesSort("rate")} scope="col">Оценка</th>
            <th onClick={() => handlesSort("bookmark")} scope="col">Избранное</th>
            <th /> */}
        </tr>
    </thead>)
}

TableHeader.propTypes = {
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    columns: PropTypes.object.isRequired
}

export default TableHeader
