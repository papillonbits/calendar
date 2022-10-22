import { week, month, year } from './Select.int.story'

describe('<Select />', () => {
  describe('Render', () => {
    test('must match week', () => {
      expect(global.renderToJSON(week())).toMatchSnapshot()
    })

    test('must match month', () => {
      expect(global.renderToJSON(month())).toMatchSnapshot()
    })

    test('must match year', () => {
      expect(global.renderToJSON(year())).toMatchSnapshot()
    })
  })
})
