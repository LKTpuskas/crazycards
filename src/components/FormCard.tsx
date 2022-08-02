import React from 'react'
import { FormState } from '../utils/types'

function FormCard({ form }: { form: FormState }) {
  return (
    <ul className='flex flex-row justify-evenly mb-32'>
      <div className='flex flex-row py-12 px-16 rounded-lg bg-gray-100 border-2 border-blue-purple border-solid'>
        <div className='flex flex-col gap-8'>
          <h4 className='text-2xl'>{form.title} {form.firstName} {form.lastName}</h4>
          <li>{form.birthDate}</li>
          <li>{form.status}</li>
          <li>Annual income: {form.annualIncome}</li>
        </div>
        <div className='flex flex-col gap-8 justify-center'>
          <li>House number: {form.houseNumber}</li>
          <li>Postcode: {form.postcode}</li>
        </div>
      </div>
    </ul>
  )
}

export default FormCard