import React from 'react'
import { Button, Modal } from 'antd'
import style from './modal-confirm.module.scss'
interface Props {
  isModalOpen: boolean
  setIsModalOpen: (isModalOpen: boolean) => void
  handleReserveRoom: () => void
}
export const ModalConfirmReservation: React.FC<Props> = ({
  isModalOpen,
  setIsModalOpen,
  ...props
}) => {
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
          <h2>Book now</h2>
          <div className={style.modal_Image}>
            <img
              alt='confitm'
              src='https://www.24sessions.com/hubfs/24S_Theme/benefits/Benefit%20Illustrations/Get%20Booked.svg'
            />
          </div>
          <p>Are you sure to want to reserve this room?</p>
        </div>
      </Modal>
    </>
  )
}
