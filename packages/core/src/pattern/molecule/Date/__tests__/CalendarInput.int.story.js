import { withTests } from '@storybook/addon-jest'
import { CalendarInput } from '../index'
import results from '../../../../../../../.jest-test-results.json'

export default {
  title: 'Calendar/Molecule/Date/CalendarInput',
  component: CalendarInput,
  decorators: [withTests({ results })],
  parameters: { jest: ['CalendarInput.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return (
    <CalendarInput
      today={{
        year: 2015,
        monthOfYear: 9,
        dateOfTheMonth: 27,
      }}
      toggleView={() => {}}
    />
  )
}
