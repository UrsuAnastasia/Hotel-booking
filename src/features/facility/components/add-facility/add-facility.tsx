import { Button, Input } from 'antd'
import style from './add-facility.module.scss'
import { useState } from 'react'
import { Trash } from 'react-bootstrap-icons'
export const AddFacility = () => {
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

  return (
    <div className={style.addFacility}>
      <h4>Add facility</h4>
      {inputList.map((item, index) => {
        return (
          <div key={index} className={style.addFacility_Container}>
            <Input
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
      <Button onClick={handleAddClick}>+ Add</Button>
    </div>
  )
}
