import { useReducer } from "react"

import { FORM_ACTIONS } from "../utils/constants"
import { FormState, HookAction, ReturnType } from "../utils/types"

const initialState: FormState = {
  title: "",
  firstName: "",
  lastName: "",
  birthDate: "",
  status: "",
  annualIncome: 0,
  houseNumber: '',
  postcode: "",
}

const formReducer = (state: FormState, action: HookAction<string>): FormState => {
  switch (action.type) {
    case FORM_ACTIONS.TITLE.STATE: return {
      ...state, title: action.payload,
    }
    case FORM_ACTIONS.FIRST_NAME.STATE: return {
      ...state, firstName: action.payload,
    }
    case FORM_ACTIONS.LAST_NAME.STATE: return {
      ...state, lastName: action.payload,
    }
    case FORM_ACTIONS.BIRTH_DATE.STATE: return {
      ...state, birthDate: action.payload,
    }
    case FORM_ACTIONS.STATUS.STATE: return {
      ...state, status: action.payload,
    }
    case FORM_ACTIONS.ANNUAL_INCOME.STATE: return {
      ...state, annualIncome: parseInt(action.payload, 10),
    }
    case FORM_ACTIONS.HOUSE_NUMBER.STATE: return {
      ...state, houseNumber: action.payload,
    }
    case FORM_ACTIONS.POSTCODE.STATE: return {
      ...state, postcode: action.payload,
    }
    case 'RESET_FORM': return {
      ...initialState
    }
    default:
      return state
  }
}

function useForm(): ReturnType<FormState, HookAction<string>> {
  const [formData, setFormData] = useReducer(formReducer, initialState);
  return [formData, setFormData]
}

export default useForm