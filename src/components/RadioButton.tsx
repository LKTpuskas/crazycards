import React, { Dispatch } from 'react'
import { FormState, HookAction } from '../utils/types'

type Props = {
  onChange: Dispatch<HookAction<string>>
  onBlur: Dispatch<HookAction<FormState>>
}

function RadioButton({ onChange, onBlur }: Props) {
  const [radio, setRadio] = React.useState('')
  const options = ['Mr', 'Mrs', 'Miss', 'Ms', 'Dr']
  return (
    <fieldset>
      <legend>Title</legend>
      <span className='flex gap-16'>
        {options.map((title, index) => (
          <label key={`${title}-${index}`} className='flex flex-row items-center gap-4' >
            {title}
            <input className='h-48 rounded border' type="radio" value={title} checked={radio === title} onChange={(event) => {
              setRadio(title)
              onChange(event)
            }} onBlur={onBlur} />
          </label>
        ))}
      </span>
    </fieldset >)
}


export default RadioButton