import React from 'react'
import { Button, Modal } from 'antd'
import style from './modal-confirm.module.scss'
interface Props {
  isModalOpen: boolean
  setIsModalOpen: (isModalOpen: boolean) => void
  handleReserveRoom: () => void
}
export const DeleteRoom: React.FC<Props> = ({ isModalOpen, setIsModalOpen, ...props }) => {
  const showModal = () => {
    setIsModalOpen(false)
  }

  const handleOk = () => {
    props.handleReserveRoom()
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }
  return (
    <>
      <Button type='primary' onClick={showModal} />

      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div className={style.modal}>
          <h2>Delete</h2>
          <p>Are you sure to want to delete this room?</p>
        </div>
      </Modal>
    </>
  )
}
