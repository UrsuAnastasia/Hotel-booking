export type AddRoom = {
  bedNumber: number
  capacity: number
  cleanStatus: string
  description: string
  facilities: [
    {
      id: number
    },
  ]
  imageUrl: string
  petFriendly: true
  pricePerNight: 40.0
  roomNumber: 4
  roomType: string
  title: string
}
