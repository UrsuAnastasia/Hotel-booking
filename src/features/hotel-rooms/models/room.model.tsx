export type AddRoom = {
  id?: number
  bedNumber: number | null
  capacity: number | null
  cleanStatus: string
  description: string
  facilities: [
    {
      id: number | null
    },
  ]
  images: Array<any>
  petFriendly: boolean
  pricePerNight: number | null
  roomNumber: number | null
  roomType: string
  title: string
}
