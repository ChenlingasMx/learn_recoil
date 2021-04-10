import React from 'react'
import { ComAState, lengthState } from '../store/ComAStore'
import { useRecoilState, useRecoilValue } from 'recoil'

// useRecoilState 类似 useState 的一个 Hook，可以取到 atom 的值以及 setter 函
// useSetRecoilState：只获取 setter 函数，如果只使用了这个函数，状态变化不会导致组件重新渲染
// useRecoilValue：只获取状态

const ComA = () => {
  const [state, setState] = useRecoilState(ComAState);
  const { name } = state
  const onChange = event => setState({ ...state, name: event.target.value })
  return (
    <div>
      <input value={name} onChange={onChange} />
      <SomeOtherComponentWithName />
      <NameLength />
    </div>
  )
}

// useRecoilValue
const SomeOtherComponentWithName = () => {
  const state = useRecoilValue(ComAState);
  const { name } = state
  return <div>{name}</div>;
}

const NameLength = () => {
  const length = useRecoilValue(lengthState);
  return <h3>Name Length: { length }  </h3>;
}


export default ComA