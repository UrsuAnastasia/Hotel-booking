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
  imageUrl: string
  petFriendly: boolean
  pricePerNight: number | null
  roomNumber: number | null
  roomType: string
  title: string
}
