import moment from "moment"

// SET_TEXT_FILTER
export const setTextFilter = ( text: string = '') => ({
    type: 'SET_TEXT_FIELD',
    text
})
// SORT_BY_AMOUNT
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
})
// SORT_BY_DATE
export const sortByDate = () => ({
    type: 'SORT_BY_DATE',
})
// SET_START_DATE
export const setStartDate = (startDate?: number| null) => ({
    type: 'SET_START_DATE',
    startDate: startDate !== null && startDate !== undefined ? moment(startDate).valueOf() : null
})
// SET_END_DATE
export const setEndDate = (endDate?: number| null) => ({
    type: 'SET_END_DATE',
    endDate: endDate !== null && endDate !== undefined ? moment(endDate).valueOf() : null
})