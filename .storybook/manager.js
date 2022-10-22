import { addons } from '@storybook/addons'
import { create } from '@storybook/theming'
import { version } from '../lerna.json'

addons.setConfig({
  panelPosition: 'right',
  theme: create({
    base: 'light',
    brandTitle: `Calendar v${version}`,
    brandUrl: 'https://github.com/papillonbits/calendar',
    brandImage: 'https://avatars2.githubusercontent.com/u/81188645',
  }),
})
