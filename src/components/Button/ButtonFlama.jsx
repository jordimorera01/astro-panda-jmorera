import { ButtonFlamaRecipe } from '../Button/ButtonFlama.recipe'

export const ButtonFlama = ({ children, color, size, ...props }) => {
  return (
    <button className={ButtonFlamaRecipe({ color, size })} {...props}>
      {children}
    </button>
  )
}
