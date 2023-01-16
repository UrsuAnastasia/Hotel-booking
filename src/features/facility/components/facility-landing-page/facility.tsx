import { Button, Checkbox, Input, Modal } from 'antd'
import { EyeOutlined } from '@ant-design/icons'
import { CheckboxChangeEvent } from 'antd/es/checkbox'
import api from 'common/axios/axios'
import { FacilityArray } from 'features/facility/models/facility.model'
import { LayoutContaier } from 'layout/layout-container/layout-container'
import { useEffect, useState } from 'react'
import { AddFacility } from '../add-facility/add-facility'
import style from './facility.module.scss'

export const Facility = () => {
  const [list, setList] = useState<Array<number>>([])
  const [checkList, setCheckList] = useState<Array<FacilityArray>>([])
  const [editFacility, setEditFacility] = useState<any>({ edit: false, id: null })
  const [facility, setFacility] = useState<string>('')

  const success = () => {
    Modal.success({
      content: 'Succes',
    })
  }

  const error = () => {
    Modal.error({
      title: 'This is an error message',
      content: 'Something went wrong please try again later',
    })
  }
  useEffect(() => {
    const getAllFacilities = async () => {
      const response = await api.get('facilities')
      setCheckList(response.data)
    }
    getAllFacilities()
  }, [list])

  const onChange = (e: CheckboxChangeEvent, id: number) => {
    var updatedList = [...list]
    if (e.target.checked) {
      updatedList = [...list, e.target.value]
    } else {
      updatedList.splice(list.indexOf(e.target.value), 1)
    }
    setList(updatedList)
  }

  const handleDeleteFacility = async () => {
    const response: any = await api.delete(
      `facilities?ids=${
        list[list.length - 1] ? list.map((item) => item) : list.map((item) => item + ',')
      }`,
    )
    if (response.status === 200) {
      list.map((itemList) => setCheckList(checkList.filter((item) => item.id !== itemList)))
      success()
    } else {
      error()
    }
  }

  const updateFacility = async () => {
    const paload: FacilityArray = {
      name: facility,
      id: editFacility.id,
    }
    const response = await api.put('facilities', paload)
    if (response.status === 200) {
      setEditFacility({
        ...editFacility,
        edit: false,
      })
      setFacility('')
      const re = checkList.filter((item: any) => item.id !== response.data.id)
      setCheckList([...re, response.data])
      success()
    } else {
      error()
    }
  }

  return (
    <LayoutContaier>
      <div className={style.facility}>
        <div className={style.facility_Conatiner}>
          <div className={style.facility_Header}>
            <h1>Facility</h1>
            <Button onClick={handleDeleteFacility}>Delete</Button>
          </div>
          <div>
            {checkList.map((item, index) => {
              return (
                <>
                  <div key={index} className={style.facility_Item}>
                    <Checkbox value={item.id} onChange={(e) => onChange(e, index)}>
                      <span className={style.facility_Text}>{item.name}</span>
                    </Checkbox>
                    <EyeOutlined
                      onClick={() => setEditFacility({ ...editFacility, edit: true, id: item.id })}
                    />
                  </div>
                </>
              )
            })}
          </div>
          {editFacility.edit ? (
            <Input
              name='facility'
              value={facility}
              onChange={(e: any) => setFacility(e.target.value)}
            />
          ) : null}
          {editFacility.edit ? (
            <div className={style.facility_ButtonContainer}>
              <Button onClick={updateFacility}>Save</Button>
            </div>
          ) : null}
          <AddFacility setCheckList={setCheckList} checkList={checkList} />
        </div>
      </div>
    </LayoutContaier>
  )
}
