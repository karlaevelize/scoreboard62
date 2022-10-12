import { useState } from "react";

export const AddPlayerForm = (props) => {
  //1. input => value, onChange
  //2. create a place in the state to store name
  const [name, setName] = useState("");
  //3. button to submit

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("submitting this name:", name);
    props.addPlayer(name);
    setName("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Name: <input value={name} onChange={(e) => setName(e.target.value)} />
        <button type="submit">Add Player</button>
      </form>
    </div>
  );
};
