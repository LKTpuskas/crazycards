import { evaluateCards } from '../utils/helpers'
import { Card } from './types'

const anywhereCard = (alwaysAvailable = true): Card => ({
  "id": 2,
  "title": "Anywhere Card",
  "apr": "33.9%",
  "balanceTransferOfferDuration": 0,
  "purchaseOfferDuration": 0,
  "creditAvailable": 300,
  "alwaysAvailable": alwaysAvailable
})

const mockCards: Card[] = [
  {
    "id": 1,
    "title": "Student Life",
    "apr": "18.9%",
    "balanceTransferOfferDuration": 0,
    "purchaseOfferDuration": 6,
    "creditAvailable": 1200,
    "status": "student"
  },
  {
    "id": 3,
    "title": "Liquid Card",
    "apr": "33.9%",
    "balanceTransferOfferDuration": 12,
    "purchaseOfferDuration": 6,
    "creditAvailable": 3000,
    "annualIncome": 16000
  }
]

export const mockFormData = (income = 16000, status = 'doctor') => ({
  annualIncome: income,
  birthDate: "2022-08-03",
  firstName: "Tom",
  houseNumber: "123",
  lastName: "Johnson",
  postcode: "N133",
  status,
  title: "Mr."
})

export const mockCardsWithAnywhere = [...mockCards, anywhereCard()]
const mockCardsWithoutAnywhere = [...mockCards, anywhereCard(false)]

describe('helpers', () => {
  describe('evaluateCards', () => {
    describe('when annual income is >= 16000', () => {
      it('should return a [Anywhere Card, Liquid Card]', () => {
        expect(evaluateCards(mockCardsWithAnywhere, mockFormData())).toEqual([mockCardsWithAnywhere[1], mockCardsWithAnywhere[2]])
      })
    })
    describe('when annual income is >= 16000 and employment status is STUDENT', () => {
      it('should return a [Anywhere Card, Liquid Card, Student Card]', () => {
        expect(evaluateCards(mockCardsWithAnywhere, mockFormData(16000, 'student'))).toEqual(mockCardsWithAnywhere)
      })
    })
    describe('when annual income is < 16000 and employment status is NOT student', () => {
      it('should return a [Anywhere Card]', () => {
        expect(evaluateCards(mockCardsWithAnywhere, mockFormData(1000, 'part-time'))).toEqual([anywhereCard()])
      })
    })
    describe('when Anywhere Card is NOT available and employment status is STUDENT and annual income is < 16000', () => {
      it('should return a [Student Card]', () => {
        expect(evaluateCards(mockCardsWithoutAnywhere, mockFormData(4000, 'student'))).toEqual([mockCardsWithoutAnywhere[0]])
      })
    })
  })
})