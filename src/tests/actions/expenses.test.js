import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123',
  });
});
test('should setup edit expense action object', () => {
  const action = editExpense('100', { note: 'New Note' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '100',
    updates: { note: 'New Note' },
  });
});
