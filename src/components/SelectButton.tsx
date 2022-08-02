import classNames from 'classnames';
import React, { Dispatch } from 'react'
import { isSelected } from '../utils/helpers';
import { Card } from '../utils/types'

type Props = {
  card: Card
  selectedCards: Card[]
  onSetCards: Dispatch<Card>
}

function SelectButton({ card, selectedCards, onSetCards }: Props) {
  return (
    <button
      className={classNames(
        'rounded-lg border-2 border-blue-purple border-solid',
        'py-10 px-18',
        { "border text-white bg-blue-purple": isSelected(selectedCards, card.id) }
      )}
      onClick={() => onSetCards(card)}>{card.title}</button>
  )
}

export default SelectButton