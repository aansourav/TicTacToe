import { useState } from "react"


function Square({ value, onSquareClick }) {



  return <button onClick={onSquareClick} className="bg-white border border-gray-500 h-12 w-12 m-1 leading-9 text-lg" >{value}</button>
}


const Board = () => {

  const [squares, setSquares] = useState(Array(9).fill(null))

  const handleClick = (i) => {
    const nextSquares = squares.slice()
    nextSquares[i] = "X"
    setSquares(nextSquares)
  }


  return (
    <>
      <div className="flex">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} ></Square>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} ></Square>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} ></Square>
      </div>
      <div className="flex">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} ></Square>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} ></Square>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} ></Square>
      </div>
      <div className="flex">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} ></Square>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} ></Square>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} ></Square>
      </div>
    </>
  )
}

export default Board;