import { withTests } from '@storybook/addon-jest'
import { Label } from '../index'
import results from '../../../../../../../.jest-test-results.json'

export default {
  title: 'Calendar/Atom/Text/Label',
  component: Label,
  decorators: [withTests({ results })],
  parameters: { jest: ['Label.int.test.js'] },
  excludeStories: ['custom'],
}

export function blackTiny() {
  return <Label color="black" size="tiny" text="black tiny label" />
}

export function blackSmall() {
  return <Label color="black" size="small" text="black small label" />
}

export function blackMedium() {
  return <Label color="black" size="medium" text="black medium label" />
}

export function blackLarge() {
  return <Label color="black" size="large" text="black large label" />
}

export function blueTiny() {
  return <Label color="blue" size="tiny" text="blue tiny label" />
}

export function blueSmall() {
  return <Label color="blue" size="small" text="blue small label" />
}

export function blueMedium() {
  return <Label color="blue" size="medium" text="blue medium label" />
}

export function blueLarge() {
  return <Label color="blue" size="large" text="blue large label" />
}

export function greyTiny() {
  return <Label color="grey" size="tiny" text="grey tiny label" />
}

export function greySmall() {
  return <Label color="grey" size="small" text="grey small label" />
}

export function greyMedium() {
  return <Label color="grey" size="medium" text="grey medium label" />
}

export function greyLarge() {
  return <Label color="grey" size="large" text="grey large label" />
}
