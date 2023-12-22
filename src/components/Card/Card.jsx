import { ButtonFlama } from '../Button/ButtonFlama'

export const Card = ({ ...props }) => {
  return (
    <div>
      {props.title}
      <ButtonFlama color="black">Button flama </ButtonFlama>
    </div>
  )
}
