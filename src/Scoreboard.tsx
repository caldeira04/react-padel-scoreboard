import { useState } from "react"

export default function Scoreboard(name: { double1: { player1: string, player2: string }, double2: { player1: string, player2: string } }) {
  const [maximum, setMaximum] = useState({
    games: 6,
    sets: 2,
  })

  const [score, setScore] = useState({
    double1: 0,
    double2: 0
  })

  const [games, setGames] = useState({
    double1: 0,
    double2: 0
  })

  const [sets, setSets] = useState({
    double1: 0,
    double2: 0
  })

  function handleScore1() {
    if (score.double1 === 0) {
      setScore({
        ...score,
        double1: 15
      })
    } else if (score.double1 === 15) {
      setScore({
        ...score,
        double1: 30
      })
    } else if (score.double1 === 30) {
      setScore({
        ...score,
        double1: 40
      })
    } else if (score.double1 === 40) {
      setScore({
        double1: 0,
        double2: 0

      })
      setGames({
        ...games,
        double1: games.double1 + 1 // PROIBIDO USAR ++ EM REACT !!
      })

      if (games.double1 === maximum.games - 1) {
        setGames({
          double1: 0,
          double2: 0
        })
        setSets({
          ...sets,
          double1: sets.double1 + 1
        })
      }

    }
  }

  function handleScore2() {
    if (score.double2 === 0) {
      setScore({
        ...score,
        double2: 15
      })
    } else if (score.double2 === 15) {
      setScore({
        ...score,
        double2: 30
      })
    } else if (score.double2 === 30) {
      setScore({
        ...score,
        double2: 40
      })
    } else if (score.double2 === 40) {
      setScore({
        double1: 0,
        double2: 0
      })
      setGames({
        ...games,
        double2: games.double2 + 1
      })

      if (games.double2 === maximum.games - 1) {
        setGames({
          double1: 0,
          double2: 0
        })
        setSets({
          ...sets,
          double2: sets.double2 + 1
        })
      }


    }
  }


  return (
    <table>
      <tr>
        <td className='names'>{name.double1.player1} / {name.double1.player2}</td>
        <td>{sets.double1}</td>
        <td>{games.double1}</td>
        <td>{score.double1}</td>
        <td><button onClick={handleScore1}>+</button></td>
      </tr>
      <tr>
        <td className='names'>{name.double2.player1} / {name.double2.player2}</td>
        <td>{sets.double2}</td>
        <td>{games.double2}</td>
        <td>{score.double2}</td>
        <td><button onClick={handleScore2}>+</button></td>
      </tr>
    </table>
  )
}
