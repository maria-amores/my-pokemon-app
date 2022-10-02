import React, { useState } from 'react';
import { prettyDOM, render, screen } from '@testing-library/react';
import { mockGetPokemon } from '../mocks/mockGetPokemon';
import Pokemon from './Pokemon';

describe('Pokemon component should', () => {
  beforeEach(async () => {
    jest.spyOn(window, 'fetch').mockImplementation(mockGetPokemon);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('render the landing page', () => {
    render(<Pokemon />);
  });
});
