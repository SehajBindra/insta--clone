import React from 'react'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'

function Modal() {
    const [open , Setopen] = useRecoilState(modalState);
  return (
    <div>
        {open && <p> the modal is open </p> }
    </div>
  )
}

export default Modal