import React from 'react';
import { render as rtl, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ResultsView from './ResultsView';
import { mockCardsWithAnywhere, mockFormData } from '../utils/helpers.test';

function render(
  availableCards = mockCardsWithAnywhere,
  formData = mockFormData()) {
  return {
    ...rtl(
      <ResultsView availableCards={availableCards} formData={formData} />
    ),
  };
}

describe('ResultsView', () => {
  describe('Selectable cards', () => {
    it('should be clickable and return detailed cards and total credit component', async () => {
      render();
      ['Student Life', 'Liquid Card', 'Anywhere Card'].forEach((element: string) => {
        userEvent.click(screen.getByText(element));
      });
      ['Student Life-0', 'Liquid Card-1', 'Anywhere Card-2'].forEach(async (element: string) => {
        expect(await screen.findByTestId(element)).toBeInTheDocument()
      })
    })
  })
  describe('Form card', () => {
    it('should return a form card with form details', () => {
      render();
      ['Mr. Tom Johnson', '2022-08-03', 'doctor', 'Annual income: 16000', 'House number: 123', 'Postcode: N133'].forEach((element: string) => {
        expect(screen.getByText(element, { exact: false })).toBeDefined()
      })
    })
  })
})
