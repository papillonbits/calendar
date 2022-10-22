import { withTests } from '@storybook/addon-jest'
import { Icon } from '../index'
import results from '../../../../../../../.jest-test-results.json'

export default {
  title: 'Calendar/Atom/Image/Icon',
  component: Icon,
  decorators: [withTests({ results })],
  parameters: { jest: ['Icon.int.test.js'] },
  excludeStories: ['custom'],
}

export function chevronThinLeft() {
  return <Icon name="chevron-thin-left" width={20} height={20} />
}

export function chevronThinRight() {
  return <Icon name="chevron-thin-right" width={20} height={20} />
}

export function backward() {
  return <Icon name="backward" width={20} height={20} />
}

export function forward() {
  return <Icon name="forward" width={20} height={20} />
}

export function calendar() {
  return <Icon name="calendar" width={20} height={20} />
}
