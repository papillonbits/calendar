/* eslint-disable no-shadow */
import { withTests } from '@storybook/addon-jest'
import { Select } from '../index'
import { weekOptions, monthOptions, yearOptions } from '../../../../data/select'
import results from '../../../../../../../.jest-test-results.json'

export default {
  title: 'Calendar/Molecule/Action/Select',
  component: Select,
  decorators: [withTests({ results })],
  parameters: { jest: ['Select.int.test.js'] },
  excludeStories: ['custom'],
}

export function week() {
  return (
    <Select
      options={weekOptions.map((week) => week.toUpperCase())}
      selectedOptionIndex={weekOptions.length - 1}
      optionType="week"
      onChange={() => {}}
    />
  )
}

export function month() {
  return (
    <Select
      options={monthOptions.map((month) => month.toUpperCase())}
      selectedOptionIndex={monthOptions.length - 1}
      optionType="month"
      onChange={() => {}}
    />
  )
}

export function year() {
  return (
    <Select
      options={yearOptions.map((year) => String(year))}
      selectedOptionIndex={yearOptions.length - 1}
      optionType="year"
      onChange={() => {}}
    />
  )
}
