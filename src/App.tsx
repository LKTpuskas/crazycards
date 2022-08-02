import React, { SyntheticEvent, useState } from 'react'

import ResultsView from './components/ResultsView';
import Form from './components/Form';
import useForm from './hooks/useForm';
import useValidity from './hooks/useValidity'
import { DEFAULT_FORM_INPUTS } from './utils/constants'
import { handleFormSubmit } from './utils/helpers';
import { Card } from './utils/types';

const App = () => {
  const [formData, setFormData] = useForm()
  const [formValidityData, setFormValidityData] = useValidity()
  const [availableCards, setCards] = useState<Card[]>([])

  const onSubmit = (event: SyntheticEvent) => {
    event.preventDefault()
    if (formValidityData.isFormValid) {
      handleFormSubmit(formData, setCards)
    }
  }

  return (
    <div className='h-auto w-full min-h-screen bg-almost-beige'>
      {availableCards?.length > 0 ?
        <>
          <button onClick={() => {
            setCards([])
            setFormData({ type: 'RESET_FORM' })
            setFormValidityData({ type: 'RESET_VALIDATION' })
          }} className="mt-12 ml-12 p-12 text-white bg-blue-purple rounded-lg">Back?</button>
          <ResultsView availableCards={availableCards} formData={formData} />
        </>
        :
        <>
          <h1 className='text-xl w-136 mt-12 ml-12 p-12 rounded-lg border-2 border-blue-purple border-solid'>Carzy Cards</h1>
          <Form
            onChange={setFormData}
            onBlur={setFormValidityData}
            onSubmit={onSubmit}
            formData={formData}
            childrenToRender={DEFAULT_FORM_INPUTS} />
        </>

      }
    </div>
  );
}

export default App