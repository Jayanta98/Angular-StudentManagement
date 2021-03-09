import { Status } from './status';
export class ResultsDto {
  public files: File
}

export class Result {
  public serialNo: number
  public rollNo: number
  public testCode: string
  public answers: string
  public answersEdited: string
  public answerConfidence: string
  public sheetConfidence: string
  public rectangleCount1: string
  public resolutionIssue: string
  public rectangleFault: string
  public flippedImage: string
  public side1BW: string
  public medium: string
  public score: number
  public right: number
  public wrong: number
  public blank: number
  public rank: number
  public physics: number
  public physicsCorrect: number
  public physicsIncorrect: number
  public physicsBlank: number
  public physicsPer: number
  public chemistry: number
  public chemistryCorrect: number
  public chemistryIncorrect: number
  public chemistryBlank: number
  public chemistryPer: number
  public botany: number
  public botanyCorrect: number
  public botanyIncorrect: number
  public botanyBlank: number
  public botanyPer: number
  public zoology: number
  public zoologyCorrect: number
  public zoologyIncorrect: number
  public zoologyBlank: number
  public zoologyPer: number
}

export class ResultListDto extends Status {
  public resultsList: Result[]
}
