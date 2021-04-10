
import { atom, selector } from 'recoil'
const ComAState = atom({
  key: 'ComAState',
  default: {
    name: ""
  }
})

const lengthState = selector({
  key: 'lengthState',
  get: ({ get }) => {
    const text = get(ComAState)
    const { name } = text
    return name && name.length;
  }
})

export {
  ComAState,
  lengthState
}
