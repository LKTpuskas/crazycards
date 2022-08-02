import React, { ChangeEvent, Dispatch } from 'react'
import { FORM_HEADERS } from '../utils/constants';
import { FormState, HookAction } from '../utils/types';
import RadioButton from './Radiobutton';

type InputProps = {
  name: string
  inputType: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onBlur: Dispatch<HookAction<FormState>>
}

function FormInput({ name, inputType = '', onChange, onBlur }: InputProps) {
  return name !== 'title' ? (
    <label className="mb-12 p-0 flex flex-col w-full">
      {FORM_HEADERS[name]}
      <input className='h-48 text-base rounded border py-14 px-16' type={inputType} onChange={onChange} onBlur={onBlur} />
    </label>
  ) : <RadioButton onChange={onChange} onBlur={onBlur} />
}

export default FormInput