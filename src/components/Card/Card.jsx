export const Card = ({ ...props }) => {
  return (
    <div>
      <img src={props.image} alt={props.title} />
      {props.title}

      <span></span>
    </div>
  )
}
