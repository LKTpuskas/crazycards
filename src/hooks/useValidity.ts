import { useReducer } from 'react'

import { FORM_ACTIONS } from '../utils/constants'
import { FormState, FormValidityState, HookAction, ReturnType } from '../utils/types'

const initialValidityState: FormValidityState = {
  titleError: false,
  firstNameError: false,
  lastNameError: false,
  birthDateError: false,
  statusError: false,
  annualIncomeError: false,
  houseNumberError: false,
  postcodeError: false,
  isFormValid: false
}

const formValidityReducer = (state: FormValidityState, action: HookAction<FormState>): FormValidityState => {
  let isValid = false;
  const { titleError, firstNameError, lastNameError, birthDateError, statusError, annualIncomeError, houseNumberError, postcodeError } = state
  const validArgs = (isValidArg: boolean) => isValidArg && !titleError && !firstNameError && !lastNameError && !birthDateError && !statusError && !annualIncomeError && !houseNumberError && !postcodeError
  switch (action.type) {

    case FORM_ACTIONS.TITLE.VALIDITY:
      isValid = action.payload.title.length > 0 ? true : false
      return {
        ...state,
        ...({ titleError: !isValid, isFormValid: validArgs(isValid) }),
      }
    case FORM_ACTIONS.FIRST_NAME.VALIDITY:
      isValid = action.payload.firstName.length > 0 ? true : false
      return {
        ...state,
        ...({ firstNameError: !isValid, isFormValid: validArgs(isValid) }),
      }
    case FORM_ACTIONS.LAST_NAME.VALIDITY:
      isValid = action.payload.lastName.length > 0 ? true : false
      return {
        ...state,
        ...({ lastNameError: !isValid, isFormValid: validArgs(isValid) })
      }
    case FORM_ACTIONS.BIRTH_DATE.VALIDITY:
      isValid = action.payload.birthDate.length > 0 ? true : false
      return {
        ...state,
        ...({ birthDateError: !isValid, isFormValid: validArgs(isValid) })
      }
    case FORM_ACTIONS.STATUS.VALIDITY:
      isValid = action.payload.status.length > 0 ? true : false
      return {
        ...state,
        ...({ statusError: !isValid, isFormValid: validArgs(isValid) })
      }
    case FORM_ACTIONS.ANNUAL_INCOME.VALIDITY:
      isValid = action.payload.annualIncome > 0 ? true : false
      return {
        ...state,
        ...({ annualIncomeError: !isValid, isFormValid: validArgs(isValid) })
      }
    case FORM_ACTIONS.HOUSE_NUMBER.VALIDITY:
      isValid = action.payload.houseNumber.length > 0 ? true : false
      return {
        ...state,
        ...({ houseNumberError: !isValid, isFormValid: validArgs(isValid) })
      }
    case FORM_ACTIONS.POSTCODE.VALIDITY:
      isValid = action.payload.postcode.length > 0 ? true : false
      return {
        ...state,
        ...({ postcodeError: !isValid, isFormValid: validArgs(isValid) })
      }
    case 'RESET_VALIDATION':
      isValid = false
      return initialValidityState

    default:
      return state
  }
}



function useValidity(): ReturnType<FormValidityState, HookAction<FormState>> {
  const [formData, setFormData] = useReducer(formValidityReducer, initialValidityState);
  return [formData, setFormData]
}

export default useValidity;
