import { withTests } from '@storybook/addon-jest'
import { CalendarView } from '../index'
import { getDisplayDays } from '../../../../library/calendar'
import results from '../../../../../../../.jest-test-results.json'

export default {
  title: 'Calendar/Molecule/Date/CalendarView',
  component: CalendarView,
  decorators: [withTests({ results })],
  parameters: { jest: ['CalendarView.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return (
    <CalendarView
      displayDays={getDisplayDays({
        year: 2017,
        monthOfYear: 5,
        dateOfTheMonth: 15,
      })}
      onChange={() => {}}
    />
  )
}
