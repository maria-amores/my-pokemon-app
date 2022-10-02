import { convertToHeightFormat, convertToWeightFormat, isEmpty } from './common';

describe('isEmpty should', () => {
  test('return true if receive undefined', () => {
    expect(isEmpty(undefined)).toBe(true);
  });

  test('return true if receive null', () => {
    expect(isEmpty(null)).toBe(true);
  });

  test('return false if receive a value', () => {
    expect(isEmpty('hello')).toBe(false);
  });

  test('return true if receive an empty string', () => {
    expect(isEmpty('')).toBe(true);
  });
});

describe('convertToWeightFormat should', () => {
  test('return 0kg if receive empty value', () => {
    expect(convertToWeightFormat('')).toBe('0kg');
  });

  test('return 0kg if receive null value', () => {
    expect(convertToWeightFormat(null)).toBe('0kg');
  });

  test('return 0kg if receive undefined value', () => {
    expect(convertToWeightFormat(undefined)).toBe('0kg');
  });

  test('return formatted value if receive a value', () => {
    expect(convertToWeightFormat('65')).toBe('6.5kg');
  });
});

describe('convertToHeightFormat should', () => {
  test('return 0m if receive empty value', () => {
    expect(convertToHeightFormat('')).toBe('0m');
  });

  test('return 0m if receive null value', () => {
    expect(convertToHeightFormat(null)).toBe('0m');
  });

  test('return 0m if receive undefined value', () => {
    expect(convertToHeightFormat(undefined)).toBe('0m');
  });

  test('return formatted value if receive a value', () => {
    expect(convertToHeightFormat('65')).toBe('6.5m');
  });
});
