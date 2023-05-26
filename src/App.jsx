import { useEffect, useState } from 'react'
import './App.css'
import Cell from './components/Cell'

function App() {
  const [cells, setcells] = useState(['', '', '', '', '', '', '', '', '']);
  const [go, setgo] = useState('circle');
  const [winningMsg, setWinningMsg] = useState(null);

  const message = `It's now ${go}'s turn`

  console.log(cells);

  const checkScore = () => {
    const winningCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ]
    winningCombos.forEach(array => {
      let circleWins = array.every(cell => cells[cell] === 'circle')
      if (circleWins) {
        setWinningMsg('Circle Wins!')
        return
      }
    })

    winningCombos.forEach(array => {
      let crossWins = array.every(cell => cells[cell] === 'cross')
      if (crossWins) {
        setWinningMsg('Cross Wins!')
        return
      }
    })
  }

  useEffect(() => {
    checkScore()
  }, [cells])

  return (
    <>

      <div className='app'>
        <div className='gameboard'>
          {cells.map((cell, index) =>
            <Cell
              key={index}
              id={index}
              cell={cell}
              setcells={setcells}
              go={go}
              setgo={setgo}
              cells={cells}
              winningMsg={winningMsg}
            />

          )}
        </div>
        <p>{winningMsg || message}</p>
      </div>

    </>
  )
}

export default App
