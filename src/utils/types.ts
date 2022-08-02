import { Dispatch } from "react"

export type FormState = {
  title: string
  firstName: string
  lastName: string
  birthDate: string
  status: string
  annualIncome: number
  houseNumber: string
  postcode: string
}

export type FormValidityState = {
  titleError: boolean
  firstNameError: boolean
  lastNameError: boolean
  birthDateError: boolean
  statusError: boolean
  annualIncomeError: boolean
  houseNumberError: boolean
  postcodeError: boolean
  isFormValid: boolean
}

export type Card = {
  id: number
  title: string
  apr: string
  balanceTransferOfferDuration: number
  purchaseOfferDuration: number
  creditAvailable: number
  status?: string
  annualIncome?: number
  alwaysAvailable?: boolean
}

export type Rules = {
  status?: string
  alwaysAvailable?: boolean
  annualIncome?: number
}

export type ResultsViewProps = {
  availableCards: Card[]
  formData: FormState
}

export type HookAction<T> = {
  type: string
  payload?: T
}

export type ReturnType<T, S> = [
  T, Dispatch<S>
];
