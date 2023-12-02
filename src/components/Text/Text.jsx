
const Text = ({ title, text, color }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{text}</p>
      <button>Learn More</button>
    </div>
  )
}

export default Text