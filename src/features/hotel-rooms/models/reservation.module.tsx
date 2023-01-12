export type UserRezervation = {
  id: number
  userId: number
  rooms: number
  dateFrom: string
  dateTo: string
  reservationStatus: string
  price: string
  owner: string
}

export type UserRezervationForm = {
  dateFrom: any
  dateTo: any
}
