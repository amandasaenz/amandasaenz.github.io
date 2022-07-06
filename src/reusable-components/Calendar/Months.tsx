import React, { useContext, useMemo } from 'react';

interface IProps {
  key: number;
  month: string;
  length: number;
}

const Months: IProps[] = [
  {
    key: 1,
    month: 'January',
    length: 31,
  },
  {
    key: 2,
    month: 'February',
    length: 28,
    //account for leap years
  },
  {
    key: 3,
    month: 'March',
    length: 31,
  },
  {
    key: 4,
    month: 'April',
    length: 30,
  },
  {
    key: 5,
    month: 'May',
    length: 31,
  },
  {
    key: 6,
    month: 'June',
    length: 30,
  },
  {
    key: 7,
    month: 'July',
    length: 31,
  },
  {
    key: 8,
    month: 'August',
    length: 31,
  },
  {
    key: 9,
    month: 'September',
    length: 30,
  },
  {
    key: 10,
    month: 'October',
    length: 31,
  },
  {
    key: 11,
    month: 'November',
    length: 30,
  },
  {
    key: 12,
    month: 'December',
    length: 31,
  },
];

export default Months;
