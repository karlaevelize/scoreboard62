import { useState } from "react"
import { Player } from "./Player"

export const Scoreboard = () => {

  const [ players, setPlayers ] = useState([
    { id: 1, name: "Anna", score: 3 },
    { id: 2, name: "Ben", score: 7 },
    { id: 3, name: "Camila", score: 1 },
    { id: 4, name: "David", score: 4 }
  ])

  const incrementScore = (id) => {
    console.log("here", id)
    //update the score of specific player
    const updatedScores = players.map(player => {
      //if same id, we update the score
      if (player.id === id){
        return {
          ...player,
          score: player.score + 1
        }
      } else {
        //if not, we return the player as it's
        return player
      }
    })
    console.log("new score", updatedScores)
    //update the state to contain the new info
    setPlayers(updatedScores) //=> ALWAYS UPDATE THE STATE AT THE END
  }

  return (
    <div>
      Scoreboard
      {players.map(player => <Player 
        key={player.id} 
        id={player.id}
        name={player.name} 
        score={player.score}
        incrementScore={incrementScore}
        />
      )}
    </div>
  )
}