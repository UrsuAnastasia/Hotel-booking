import { Form, Radio, RadioChangeEvent, Select, Input, Button, Upload, message } from 'antd'
import { useState } from 'react'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import style from './add-room.module.scss'
import TextArea from 'antd/es/input/TextArea'
import { cleanStatus, roomType } from 'features/hotel-rooms/constants/hotel.constants'
import { LayoutContaier } from 'layout/layout-container/layout-container'
import { RcFile, UploadChangeParam, UploadFile, UploadProps } from 'antd/es/upload'
const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result as string))
  reader.readAsDataURL(img)
}

const beforeUpload = (file: RcFile) => {
  const isJpgOrPng =
    file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg'
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!')
  }
  const isLt2M = file.size / 1024 / 1024 < 2
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!')
  }
  return isJpgOrPng && isLt2M
}
export const AddRoomModal = ({ ...props }) => {
  const [value, setValue] = useState(1)
  const [loading, setLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState<string>()
  const [fileList, setFileList] = useState<UploadFile[]>([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ])
  const [form] = Form.useForm()
  const [formData, setFormData] = useState<any>({
    roomNumber: '',
    capacity: '',
    bedNumber: '',
    description: '',
    pricePerNight: '',
    cleanStatus: '',
    roomType: '',
    petFriendly: false,
  })
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  )
  console.group(uploadButton)

  const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
    if (info.file.status === 'uploading') {
      setLoading(true)
      return
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as RcFile, (url) => {
        setLoading(false)
        setImageUrl(url)
        setFileList(info.fileList)
      })
    }
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

  const handlSubmit = () => {
    const payload = {
      roomNumber: formData.roomNumber,
      capacity: formData.capacity,
      bedNumber: formData.bedNumber,
      cleanStatus: formData.cleanStatus.value,
      facilities: [],
      // reservations: formData.reservations,
      roomType: formData.roomType.value,
      petFriendly: formData.petFriendly,
      pricePerNight: formData.pricePerNight,
    }
    console.log(payload)
  }

  return (
    <LayoutContaier>
      <div className={style.addRoom}>
        <div className={style.addRoom_Container}>
          <h1>Add new</h1>
          <Form form={form} onClick={handlSubmit}>
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
                      value={true}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          petFriendly: true,
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
                <span>{'Room Number'}</span>
                <Form.Item
                  name='roomNumber'
                  rules={[{ required: true, message: 'This field is requird' }]}>
                  <Input
                    name='roomNumber'
                    allowClear
                    value={formData.roomNumber}
                    placeholder='input search text'
                    onChange={hadlChangeInput}
                  />
                </Form.Item>
                <span>{'Capacity'}</span>
                <Form.Item
                  name='capacity'
                  rules={[{ required: true, message: 'This field is requird' }]}>
                  <Input
                    name='capacity'
                    allowClear
                    value={formData.capacity}
                    placeholder='input search text'
                    onChange={hadlChangeInput}
                  />
                </Form.Item>
                <span>{'Bed Number'}</span>
                <Form.Item
                  name='bedNumber'
                  rules={[{ required: true, message: 'This field is requird' }]}>
                  <Input
                    name='bedNumber'
                    allowClear
                    value={formData.bedNumber}
                    placeholder='input search text'
                    onChange={hadlChangeInput}
                  />
                </Form.Item>
                <span>{'Price Per Night'}</span>
                <Form.Item
                  name='pricePerNight'
                  rules={[{ required: true, message: 'This field is requird' }]}>
                  <Input
                    name='pricePerNight'
                    allowClear
                    value={formData.pricePerNight}
                    placeholder='input search text'
                    onChange={hadlChangeInput}
                  />
                </Form.Item>
                <span>{'Clean Status'}</span>
                <Form.Item
                  name='cleanStatus'
                  rules={[{ required: true, message: 'Please select a clean status' }]}>
                  <Select
                    value={formData.cleanStatus}
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
                    value={formData.cleanStatus}
                    onChange={(e) => {
                      setFormData({ ...formData, roomType: e })
                    }}
                    options={roomType}
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
                    beforeUpload={beforeUpload}
                    onChange={handleChange}>
                    {!imageUrl ? fileList.length : uploadButton}
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
                    value={formData.description}
                    placeholder='input search text'
                    // onChange={hadlChangeInput}
                  />
                </Form.Item>
              </div>
            </div>

            <Form.Item className={style.addRoom_ButtonContainer}>
              <Button className={style.addRoom_Button} htmlType='submit'>
                Publish
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </LayoutContaier>
  )
}
