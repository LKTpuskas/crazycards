import { Dispatch } from "react";
import { Card, FormState, Rules } from "./types";

const API_URL = 'http://localhost:3000'

const rules: Rules = {
  status: 'student',
  alwaysAvailable: true,
  annualIncome: 16000
}

function evaluateRules(ruleKey: keyof Rules, card: Card, formData: FormState) {
  const cardValue = card?.[ruleKey]
  const formValue = formData?.[ruleKey as keyof FormState]

  if (typeof cardValue === 'boolean') {
    // return anywhere card
    return card?.[ruleKey]
  }
  if (typeof formValue === 'string') {
    return formValue === cardValue
  }
  if (typeof formValue === 'number') {
    return formValue >= cardValue
  }
}

/**
 * Filter cards based on the rules object provided.
 */
export function evaluateCards(cards: Card[], formData: FormState) {
  const ruleKeys = Object.keys(rules)
  return cards.filter((card) => {
    if (ruleKeys.some((ruleKey: keyof Rules) => evaluateRules(ruleKey, card, formData))) {
      return card
    }
  })
}

export async function handleFormSubmit(formData: FormState, setCards: Dispatch<Card[]>) {
  try {
    const cards = await fetch(`${API_URL}/cards`)
    const jsonRes = await cards.json()
    const availableCards = evaluateCards(jsonRes, formData)
    setCards(availableCards)
  } catch (error) {
    console.error(error)
  }
}

export function sumCredit(cards: Card[]) {
  return cards.reduce((acc, card) => card.creditAvailable + acc, 0)
}

export function isSelected(array: Card[], selectedId: number) {
  return !!array.find(entry => entry?.id === selectedId)
}