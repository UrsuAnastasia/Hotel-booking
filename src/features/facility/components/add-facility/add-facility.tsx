import { Button, Input, Modal } from 'antd'
import style from './add-facility.module.scss'
import React, { useState } from 'react'
import { Trash } from 'react-bootstrap-icons'

import api from 'common/axios/axios'
import { FacilityArray } from 'features/facility/models/facility.model'
interface Props {
  setCheckList: (facility: any) => void
  checkList: any
}
export const AddFacility: React.FC<Props> = ({ ...props }) => {
  const [inputList, setInputList] = useState([{ name: '' }])

  const handleInputChange = (e: any, index: any) => {
    const { name, value } = e.target
    const list: any = [...inputList]
    list[index][name] = value
    setInputList(list)
  }

  // handle click event of the Remove button
  const handleRemoveClick = (index: number) => {
    const list = [...inputList]
    list.splice(index, 1)
    setInputList(list)
  }

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { name: '' }])
  }

  const success = () => {
    Modal.success({
      content: 'Facilities was added with succes',
    })
  }

  const error = () => {
    Modal.error({
      title: 'This is an error message',
      content: 'Something went wrong please try again later',
    })
  }
  const handleAddListOfFacility = async () => {
    const payload: Array<FacilityArray> = inputList.map((item) => {
      return {
        name: item.name,
      }
    })
    const response: any = await api.post('facilities', payload)
    if (response.status === 200) {
      response.data.map((item: any) => props.setCheckList((oldArray: any) => [...oldArray, item]))
      setInputList([{ name: '' }])
      success()
    } else {
      error()
    }
  }

  return (
    <div className={style.addFacility}>
      <h4>Add facility</h4>
      {inputList.map((item, index) => {
        return (
          <div key={index} className={style.addFacility_Container}>
            <Input
              name='name'
              style={{ width: '90%' }}
              value={item.name}
              onChange={(e) => {
                handleInputChange(e, index)
              }}
            />
            <div className='btn-box'>
              {inputList.length !== 1 && <Trash onClick={() => handleRemoveClick(index)} />}
            </div>
          </div>
        )
      })}
      <Button className={style.addFacility_Button} onClick={handleAddClick}>
        + Add
      </Button>
      <div className={style.addFacility_ButtonContainer}>
        <Button onClick={handleAddListOfFacility}> Add all Facility</Button>
      </div>
    </div>
  )
}
