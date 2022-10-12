export const Player = ({ id, name, score, incrementScore }) => {
  return (
    <div>
      <ul>
        <li>
          {name}, score: {score} 
          <button onClick={() => incrementScore(id)}>Increment</button> 
        </li>
      </ul>
    </div>
  )
}
