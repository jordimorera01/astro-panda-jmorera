import { cva } from '/styled-system/css/cva'

export const ButtonFlamaRecipe = cva({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    padding: '1rem',
    fontFamily: 'inter',
    fontWeight: '700'
  },
  variants: {
    color: {
      black: { backgroundColor: 'neutral.foreground.1.enabled' },
      yellow: { backgroundColor: 'yellow', color: 'black' }
    }
  }
})
