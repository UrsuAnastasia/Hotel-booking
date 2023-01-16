import {
  Form,
  Radio,
  RadioChangeEvent,
  Select,
  Input,
  Button,
  Upload,
  Modal,
  InputNumber,
} from 'antd'
import { useEffect, useState } from 'react'
import style from './add-room.module.scss'
import { cleanStatus, roomType } from 'features/hotel-rooms/constants/hotel.constants'
import { LayoutContaier } from 'layout/layout-container/layout-container'
import { RcFile, UploadChangeParam, UploadFile, UploadProps } from 'antd/es/upload'
import { AddRoom } from 'features/hotel-rooms/models/room.model'
import api from 'common/axios/axios'
import { FacilityArray } from 'features/facility/models/facility.model'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { PAGES_PATHS } from 'common/constants/constant'

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result as string))
  reader.readAsDataURL(img)
}

export const AddRoomModal = ({ ...props }) => {
  const [value, setValue] = useState(1)
  const [facilities, setFacilities] = useState<Array<FacilityArray>>([])
  const [formData, setFormData] = useState<any>({
    title: '',
    roomNumber: null,
    capacity: null,
    bedNumber: null,
    description: '',
    pricePerNight: null,
    cleanStatus: '',
    roomType: '',
    petFriendly: false,
    facilities: [],
  })
  const [fileList, setFileList] = useState<UploadFile[]>([
    {
      uid: '',
      name: '',
      url: '',
    },
  ])
  const navigate = useNavigate()
  const { TextArea } = Input
  const [form] = Form.useForm()
  const { id } = useParams()
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === `/edit-room/${id}`) {
      const getRooms = async () => {
        const response = await api.get(`/rooms/${id}`)
        setFormData({
          title: response.data.title,
          roomNumber: response.data.roomNumber,
          capacity: response.data.capacity,
          bedNumber: response.data.bedNumber,
          description: response.data.description,
          pricePerNight: response.data.pricePerNight,
          cleanStatus: response.data.cleanStatus,
          roomType: response.data.roomType,
          petFriendly: response.data.petFriendly,
          facilities: response.data.facilities.map((item: any) => item.id),
        })
      }
      getRooms()
    }
  }, [id, location.pathname])

  useEffect(() => {
    const getAllFacilities = async () => {
      const response = await api.get('facilities')
      setFacilities(response.data)
    }
    getAllFacilities()
  }, [])

  const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
    // Get this url from response in real world.
    getBase64(info.file.originFileObj as RcFile, (url) => {
      setFileList(info.fileList)
    })
  }

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value)
  }
  const hadlChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }
  const error = () => {
    Modal.error({
      title: 'This is an error message',
      content: 'Something went wrong please try again later',
    })
  }

  const handlSubmit = async () => {
    const payload: AddRoom = {
      bedNumber: formData.bedNumber,
      capacity: formData.capacity,
      cleanStatus: formData.cleanStatus,
      description: formData.description,
      facilities: formData.facilities.map((item: any) => ({ label: item.name, value: item.id })),
      imageUrl:
        'https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHw%3D&w=1000&q=80',
      petFriendly: formData.petFriendly,
      roomType: formData.roomType,
      pricePerNight: formData.pricePerNight,
      roomNumber: formData.roomNumber,
      title: formData.title,
    }
    const response: any = await api.post('rooms', payload)
    if (response.status === 200) {
      navigate(PAGES_PATHS.HOTEL_ROOMS)
    } else {
      error()
    }
  }
  const facilitiesOptions = facilities.map((item) => {
    return {
      label: item.name,
      value: item.id,
    }
  })
  const handleEdit = async () => {
    const payload: any = {
      id: id!,
      bedNumber: formData.bedNumber,
      capacity: formData.capacity,
      cleanStatus: formData.cleanStatus,
      description: formData.description,
      facilities: formData.facilities.map((item: any) => ({ id: item })),
      imageUrl:
        'https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHw%3D&w=1000&q=80',
      petFriendly: formData.petFriendly,
      roomType: formData.roomType,
      pricePerNight: formData.pricePerNight,
      roomNumber: formData.roomNumber,
      title: formData.title,
    }
    const response: any = await api.put('rooms', payload)
    if (response.status === 200) {
      navigate(PAGES_PATHS.HOTEL_ROOMS)
    } else {
      error()
    }
  }

  const initialValues = [
    {
      name: ['title'],
      value: formData.title,
    },
    {
      name: ['roomNumber'],
      value: formData.roomNumber,
    },
    {
      name: ['capacity'],
      value: formData.capacity,
    },
    {
      name: ['bedNumber'],
      value: formData.bedNumber,
    },

    {
      name: ['description'],
      value: formData.description,
    },
    {
      name: ['pricePerNight'],
      value: formData.pricePerNight,
    },

    {
      name: ['cleanStatus'],
      value: formData.cleanStatus,
    },
    {
      name: ['petFriendly'],
      value: formData.petFriendly,
    },
    {
      name: ['roomType'],
      value: formData.roomType,
    },
    {
      name: ['facilities'],
      value: formData.facilities,
    },
  ]
  console.log(formData.facilities)
  return (
    <LayoutContaier>
      <div className={style.addRoom}>
        <div className={style.addRoom_Container}>
          {location.pathname === `/edit-room/${id}` ? <h1>Edit room</h1> : <h1>Add new</h1>}

          <Form
            fields={initialValues}
            form={form}
            onFinish={() =>
              location.pathname === `/edit-room/${id}` ? handleEdit() : handlSubmit()
            }>
            <div className={style.addRoom_Wrapper}>
              <div className={style.addRoom_Description}>
                <h3>Details</h3>
                <span>Be as thorough as you can.</span>
              </div>
              <div className={style.addRoom_Form}>
                <span>Pet freindly</span>
                <Form.Item>
                  <Radio.Group onChange={onChange} value={value}>
                    <Radio
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          petFriendly: !formData.petFriendly,
                        })
                      }}>
                      True
                    </Radio>
                    <Radio
                      value={false}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          petFriendly: false,
                        })
                      }}>
                      False
                    </Radio>
                  </Radio.Group>
                </Form.Item>
                <span>{'Title'}</span>
                <Form.Item
                  name='title'
                  initialValue={formData.title}
                  rules={[{ required: true, message: 'This field is requird' }]}>
                  <Input
                    name='title'
                    allowClear
                    placeholder='input search text'
                    onChange={hadlChangeInput}
                  />
                </Form.Item>

                <span>{'Room Number'}</span>
                <Form.Item
                  name='roomNumber'
                  rules={[{ required: true, message: 'This field is requird' }]}>
                  <InputNumber
                    name='roomNumber'
                    style={{ width: '100%' }}
                    value={formData?.roomNumber}
                    placeholder='input search text'
                    onChange={(value: any) => {
                      setFormData({ ...formData, roomNumber: value })
                    }}
                  />
                </Form.Item>
                <span>{'Capacity'}</span>
                <Form.Item
                  name='capacity'
                  rules={[{ required: true, message: 'This field is requird' }]}>
                  <InputNumber
                    style={{ width: '100%' }}
                    name='capacity'
                    value={formData?.capacity}
                    placeholder='input search text'
                    onChange={(value: any) => {
                      setFormData({ ...formData, capacity: value })
                    }}
                  />
                </Form.Item>
                <span>{'Bed Number'}</span>
                <Form.Item
                  name='bedNumber'
                  rules={[{ required: true, message: 'This field is requird' }]}>
                  <InputNumber
                    name='bedNumber'
                    style={{ width: '100%' }}
                    value={formData?.bedNumber}
                    placeholder='input search text'
                    onChange={(value: any) => {
                      setFormData({ ...formData, bedNumber: value })
                    }}
                  />
                </Form.Item>
                <span>{'Price Per Night'}</span>
                <Form.Item
                  name='pricePerNight'
                  rules={[{ required: true, message: 'This field is requird' }]}>
                  <InputNumber
                    name='pricePerNight'
                    style={{ width: '100%' }}
                    value={formData?.pricePerNight}
                    placeholder='input search text'
                    onChange={(value: any) => {
                      setFormData({ ...formData, pricePerNight: value })
                    }}
                  />
                </Form.Item>
                <span>{'Clean Status'}</span>
                <Form.Item
                  name='cleanStatus'
                  rules={[{ required: true, message: 'Please select a clean status' }]}>
                  <Select
                    value={formData?.cleanStatus}
                    onChange={(e) => {
                      setFormData({ ...formData, cleanStatus: e })
                    }}
                    options={cleanStatus}
                  />
                </Form.Item>
                <span>{'Room Type'}</span>
                <Form.Item
                  name='roomType'
                  rules={[{ required: true, message: 'Please select a room type status' }]}>
                  <Select
                    value={formData?.cleanStatus}
                    onChange={(e) => {
                      setFormData({ ...formData, roomType: e })
                    }}
                    options={roomType}
                  />
                </Form.Item>
                <span>{'Facility'}</span>
                <Form.Item
                  name='facility'
                  rules={[{ required: true, message: 'Please select a room type status' }]}>
                  <Select
                    mode='multiple'
                    value={formData?.facilities}
                    onChange={(e) => {
                      setFormData({ ...formData, facilities: e })
                    }}
                    options={facilitiesOptions}
                  />
                </Form.Item>
              </div>
            </div>
            <div className={style.addRoom_Wrapper}>
              <div className={style.addRoom_Description}>
                <h3>Photos & videos</h3>
                <span></span>
              </div>
              <div className={style.addRoom_Form}>
                <Form.Item valuePropName='fileList'>
                  <Upload
                    name='avatar'
                    listType='picture-card'
                    className='avatar-uploader'
                    showUploadList={true}
                    action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
                    onChange={handleChange}>
                    {fileList.length}
                  </Upload>
                </Form.Item>
              </div>
            </div>
            <div className={style.addRoom_Wrapper}>
              <div className={style.addRoom_Description}>
                <h3>Description</h3>
                <span></span>
              </div>
              <div className={style.addRoom_Form}>
                <span>Description details</span>
                <Form.Item
                  name='description'
                  rules={[{ required: true, message: 'This field is requird' }]}>
                  <TextArea
                    rows={8}
                    name='description'
                    allowClear
                    value={formData?.description}
                    placeholder='input search text'
                    onChange={({ target: { value } }) => {
                      setFormData({ ...formData, description: value })
                    }}
                  />
                </Form.Item>
              </div>
            </div>

            <Form.Item className={style.addRoom_ButtonContainer}>
              <Button className={style.addRoom_Button} htmlType='submit'>
                {location.pathname === `/edit-room/${id}` ? 'Edit' : 'Publish'}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </LayoutContaier>
  )
}
