export enum KataLevel {
    BASIC = 'Basic',
    MEDIUN = 'Medium',
    HIGH = 'High'
  }

export type Kata = {
    _id: string
    name: string
    description: string
    level: KataLevel
    intents: number
    stars: number
    creator: string // Id of User
    solution: string
    participants: string[]

}

export type KataResponse = {
    katas: Kata[]
    totalPages: number
    currentPage: number
  }
  