import { Button, Checkbox } from 'antd'
import { CheckboxChangeEvent } from 'antd/es/checkbox'
import { LayoutContaier } from 'layout/layout-container/layout-container'
import { useState } from 'react'
import { AddFacility } from '../add-facility/add-facility'
import style from './facility.module.scss'
const checkList = [
  { value: 1, label: 'Send events notifications starts, ends, expire' },
  { value: 2, label: 'Tell me when users are joining my events' },
  { value: 3, label: 'Tell me when users starts discussions near my booth' },
  { value: 4, label: 'Notify me when users added my company to their watchlist' },
  { value: 5, label: 'Notify me when users are downloading my documents' },
  { value: 6, label: 'Tell me when users are viewing my videos' },
]
export const Facility = () => {
  const [list, setList] = useState<Array<any>>([])

  const onChange = (e: CheckboxChangeEvent, id: number) => {
    var updatedList = [...list]
    if (e.target.checked) {
      updatedList = [...list, e.target.value]
    } else {
      updatedList.splice(list.indexOf(e.target.value), 1)
    }
    setList(updatedList)
  }

  return (
    <LayoutContaier>
      <div className={style.facility}>
        <div className={style.facility_Conatiner}>
          <div className={style.facility_Header}>
            <h1>Facility</h1>
            <Button>Delete</Button>
          </div>
          <div>
            {checkList.map((item, index) => (
              <div key={index} className={style.facility_Item}>
                <Checkbox value={item.value} onChange={(e) => onChange(e, index)}>
                  <span className={style.facility_Text}>{item.label}</span>
                </Checkbox>
              </div>
            ))}
          </div>
          <AddFacility />
        </div>
      </div>
    </LayoutContaier>
  )
}
