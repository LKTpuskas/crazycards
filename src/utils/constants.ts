export const FORM_ACTIONS = {
  TITLE: {
    STATE: 'UPDATE_TITLE',
    VALIDITY: 'VALIDATE_TITLE'
  },
  FIRST_NAME: {
    STATE: 'UPDATE_FIRST_NAME',
    VALIDITY: 'VALIDATE_FIRST_NAME'
  },
  LAST_NAME: {
    STATE: 'UPDATE_LAST_NAME',
    VALIDITY: 'VALIDATE_LAST_NAME'
  },
  BIRTH_DATE: {
    STATE: 'UPDATE_BIRTH_DATE',
    VALIDITY: 'VALIDATE_BIRTH_DATE'
  },
  STATUS: {
    STATE: 'UPDATE_STATUS',
    VALIDITY: 'VALIDATE_STATUS'
  },
  ANNUAL_INCOME: {
    STATE: 'UPDATE_ANNUAL_INCOME',
    VALIDITY: 'VALIDATE_ANNUAL_INCOME'
  },
  HOUSE_NUMBER: {
    STATE: 'UPDATE_HOUSE_NUMBER',
    VALIDITY: 'VALIDATE_HOUSE_NUMBER'
  },
  POSTCODE: {
    STATE: 'UPDATE_POSTCODE',
    VALIDITY: 'VALIDATE_POSTCODE'
  }

} as const


export const FORM_HEADERS: Record<string, string> = {
  'firstName': 'First name',
  'lastName': 'Last name',
  'birthDate': 'Birth date',
  'status': 'Employee status',
  'annualIncome': 'Annual income',
  'houseNumber': 'House Number',
  'postcode': 'Postcode'
}

export const DEFAULT_FORM_INPUTS: Record<string, string>[] = [
  { name: 'title', inputType: 'radio', stateAction: FORM_ACTIONS.TITLE.STATE, validityAction: FORM_ACTIONS.TITLE.VALIDITY },
  { name: 'firstName', inputType: 'text', stateAction: FORM_ACTIONS.FIRST_NAME.STATE, validityAction: FORM_ACTIONS.FIRST_NAME.VALIDITY },
  { name: 'lastName', inputType: 'text', stateAction: FORM_ACTIONS.LAST_NAME.STATE, validityAction: FORM_ACTIONS.LAST_NAME.VALIDITY },
  { name: 'birthDate', inputType: 'date', stateAction: FORM_ACTIONS.BIRTH_DATE.STATE, validityAction: FORM_ACTIONS.FIRST_NAME.VALIDITY },
  { name: 'status', inputType: 'text', stateAction: FORM_ACTIONS.STATUS.STATE, validityAction: FORM_ACTIONS.STATUS.VALIDITY },
  { name: 'annualIncome', inputType: 'number', stateAction: FORM_ACTIONS.ANNUAL_INCOME.STATE, validityAction: FORM_ACTIONS.FIRST_NAME.VALIDITY },
  { name: 'houseNumber', inputType: 'text', stateAction: FORM_ACTIONS.HOUSE_NUMBER.STATE, validityAction: FORM_ACTIONS.HOUSE_NUMBER.VALIDITY },
  { name: 'postcode', inputType: 'text', stateAction: FORM_ACTIONS.POSTCODE.STATE, validityAction: FORM_ACTIONS.POSTCODE.VALIDITY },
]

