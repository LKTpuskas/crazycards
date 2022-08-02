import classNames from 'classnames'
import React, { useState } from 'react'
import { sumCredit } from '../utils/helpers'
import { Card, ResultsViewProps } from '../utils/types'
import FormCard from './FormCard'
import SelectButton from './SelectButton'

function ResultsView({ availableCards, formData }: ResultsViewProps) {
  const [selectedCards, setCards] = useState([])

  const onSetCards = (card: Card) => {
    if (selectedCards.length === 0 || selectedCards.every(c => c?.id !== card.id)) {
      setCards(prevState => [...prevState, card])
    }
    if (selectedCards.find(c => c?.id === card.id)) {
      const filteredCards = selectedCards.filter(c => c.id !== card.id)
      setCards(filteredCards)
    }
  }
  const totalCredit = sumCredit(selectedCards)
  return (
    <div className='h-screen grid grid-cols-12'>
      <div className='col-start-2 col-end-12'>
        <div className={classNames(
          "h-auto p-64 ms:p-32 my-24 w-full flex justify-evenly align-middle m:gap-8 ms:flex-col",
          "bg-white rounded")}>
          {availableCards.map((card: Card, index: number) => (
            <SelectButton
              key={`${card.id}-${index}`}
              card={card}
              selectedCards={selectedCards}
              onSetCards={onSetCards} />
          ))}

        </div>
        <FormCard form={formData} />
        <ul className='flex flex-row justify-evenly list-disc mb-24 gap-8 flex-wrap'>
          {selectedCards.map((card: Card, index: number) => (
            <div data-id={`${card.title}-${index}`} key={`${card.id}-${index}`} className='flex flex-col py-24 px-32 rounded-lg bg-gray-100 border-2 border-blue-purple border-solid'>
              <h4 className='text-2xl'>{card.title}</h4>
              <li>Apr: {card.apr}</li>
              <li>Btof: {card.balanceTransferOfferDuration} Months</li>
              <li>Pod: {card.purchaseOfferDuration} Months</li>
              <li>Credit available: £{card.creditAvailable}</li>
            </div>
          ))}
        </ul>
        {totalCredit > 0 && (
          <div className='flex justify-center items-center m:mb-32' >
            <h3 className='rounded-lg bg-custom-teal p-24'>Total credit available: £{totalCredit}</h3>
          </div>
        )}
      </div>
    </div >

  )
}

export default ResultsView