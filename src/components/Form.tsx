import React, { Dispatch, SyntheticEvent } from 'react'
import classnames from 'classnames';

import { FormState, HookAction } from '../utils/types';
import FormInput from './FormInput';

interface FormProps {
  formData: FormState;
  childrenToRender?: Record<string, string>[];
  onSubmit: (e: SyntheticEvent) => void;
  onChange: Dispatch<HookAction<string>>
  onBlur: Dispatch<HookAction<FormState>>
}

function Form({ onChange, onBlur, onSubmit, formData, childrenToRender = [] }: FormProps) {
  return (
    <div className='grid grid-cols-12'>
      <div className={classnames(
        'col-start-4 col-end-10 gap-x-24',
        'm:col-start-2 m:col-end-10',
        'ms:col-start-2 ms:col-end-12')}>
        <form onSubmit={(e) => onSubmit(e)} className={classnames(
          "h-auto p-64 ms:py-64 ms:px-32 my-64 w-full",
          "bg-white rounded")}>
          {childrenToRender.map(({ name, inputType, stateAction, validityAction }, index) => {
            return <FormInput
              key={`${index}-${name}`}
              name={name} inputType={inputType}
              onChange={event => {
                onChange({ type: stateAction, payload: event.target.value })
              }
              }
              onBlur={() => onBlur({ type: validityAction, payload: formData })} />
          })}
          <button className='bg-blue-purple text-white px-48 py-12' onClick={(e) => onSubmit(e)}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Form