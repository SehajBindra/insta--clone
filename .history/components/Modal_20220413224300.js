import React from 'react'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'

function Modal() {
    const [open , Setopen] = useRecoilState(modalState);
  return (
    <div>
        <h1> I am Modal</h1>
    </div>
  )
}

export default Modal