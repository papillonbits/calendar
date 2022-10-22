import { withTests } from '@storybook/addon-jest'
import { Calendar } from '../index'
import results from '../../../../../../../.jest-test-results.json'

export default {
  title: 'Calendar/Organism/Date/Calendar',
  component: Calendar,
  decorators: [withTests({ results })],
  parameters: { jest: ['Calendar.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return (
    <Calendar
      today={{
        year: 2018,
        monthOfYear: 8,
        dateOfTheMonth: 7,
      }}
    />
  )
}
