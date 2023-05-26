import React from "react";

export default function Cell({ id, cell, setcells, go, setgo, cells, winningMsg }) {
    const handleClick = (e) => {
        const taken = e.target.firstChild.classList.contains('circle') ||
            e.target.firstChild.classList.contains('cross')

        if (!taken) {
            if (go === 'circle') {
                e.target.firstChild.classList.add('circle')
                handleCellChange('circle')
                setgo('cross')
            }
            if (go === 'cross') {
                e.target.firstChild.classList.add('cross')
                handleCellChange('cross')
                setgo('circle')
            }
        }
    }

    const handleCellChange = (className) => {
        const nextCells = cells.map((cell, index) => {
            if (index === id) {
                return className
            }
            else {
                return cell
            }
        })
        setcells(nextCells)
    }

    return (

        <div className="square" id={id} onClick={!winningMsg && handleClick}>
            <div className={cell}></div>

        </div>
    )
}
