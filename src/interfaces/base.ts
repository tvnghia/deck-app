export interface ICard {
  code: string
  image: string
  images: {
    svg: string
    png: string
  }
  value: string
  suit: string
}

export interface IBaseResponse {
  success: boolean
  cards: ICard[]
  deck_id: string
  remaining: number
  shuffled?: boolean
}
