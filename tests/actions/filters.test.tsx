import { expect, test } from 'vitest'
import moment from 'moment'
import {setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount} from '../../src/actions/filters'

test('should generate set start Date', () => {
 const action = setStartDate(moment(0).valueOf())
 expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0).valueOf()
 });
});

test('should generate set end Date', () => {
    const action = setEndDate(moment(0).valueOf())
    expect(action).toEqual({
       type: 'SET_END_DATE',
       endDate: moment(0).valueOf()
    });
   });

test('should generate set text filter', () => {
    const text = 'Something in'
    const action = setTextFilter('Something in')
    expect(action).toEqual({
       type: 'SET_TEXT_FIELD',
       text: text
    });
   });

test('should generate set text default filter', () => {
    const action = setTextFilter('')
    expect(action).toEqual({
       type: 'SET_TEXT_FIELD',
       text: ''
    });
   });

test('should generate action for sortBy Date', () => {
    expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE'})
   });

   test('should generate action for sortBy amount', () => {
    expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT'})
   });
