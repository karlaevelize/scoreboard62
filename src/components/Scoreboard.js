import { useEffect, useState } from "react";
import { Player } from "./Player";
import { AddPlayerForm } from "./AddPlayerForm";

// Steps for fetching data
//1. Install and import axios
//2. Create and async function

// const fetchData = async () => {
//   const response = await axios.get("my-url")
//   console.log("response", response)
//   setData(response.data.rows)
// }

//3. Make a request with axios to get the data
//4. Console.log the response
//5. Import and define useEffect

// useEffect(() => {
//   secondfuncton()
//   callFunction() //STEP NUMBER 5 AND 6
// }, [])

//6. Call the function inside useEffect
//7. Check console for response
//8. Import useState and define a const to store the data -> const [data, setData] = useState(null)
//9. Go back to async function put the response in the state -> MAKE SURE YOU CHECK THE RESPONSE AND ONLY PUT THE RELEVANT DATA

export const Scoreboard = () => {
  const [players, setPlayers] = useState([
    { id: 1, name: "Anna", score: 3 },
    { id: 2, name: "Ben", score: 7 },
    { id: 3, name: "Camila", score: 1 },
    { id: 4, name: "David", score: 4 },
  ]);

  const incrementScore = (id) => {
    console.log("here", id);
    //update the score of specific player
    const updatedScores = players.map((player) => {
      //if same id, we update the score
      if (player.id === id) {
        return {
          ...player,
          score: player.score + 1,
        };
      } else {
        //if not, we return the player as it's
        return player;
      }
    });
    console.log("new score", updatedScores);
    //update the state to contain the new info
    setPlayers(updatedScores); //=> ALWAYS UPDATE THE STATE AT THE END
  };

  //1. Creating a form -> check
  //2. Import form on Scoreboard and test it -> check
  //3. Write a function and call it in the form component -> check
  //4. Write the logic to add a player -> check
  //5. Test it on the UI (as a user)

  const addPlayer = (name) => {
    // console.log("add player triggered", name);
    //Step 1: Define a new player
    const newPlayer = { id: players.length + 1, name: name, score: 0 };
    //Step 2: Add this to the existing array
    const newPlayersArray = [...players, newPlayer];
    console.log("new players", newPlayersArray);
    //Step 3: Update the state
    setPlayers(newPlayersArray);
  };

  return (
    <div>
      Scoreboard
      {players.map((player) => (
        <Player
          key={player.id}
          id={player.id}
          name={player.name}
          score={player.score}
          incrementScore={incrementScore}
        />
      ))}
      <AddPlayerForm addPlayer={addPlayer} />
    </div>
  );
};
