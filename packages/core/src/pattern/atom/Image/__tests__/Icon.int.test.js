import { chevronThinLeft, chevronThinRight, backward, forward, calendar } from './Icon.int.story'

describe('<Icon />', () => {
  describe('Render', () => {
    test('must match chevronThinLeft', () => {
      expect(global.renderToJSON(chevronThinLeft())).toMatchSnapshot()
    })

    test('must match chevronThinRight', () => {
      expect(global.renderToJSON(chevronThinRight())).toMatchSnapshot()
    })

    test('must match backward', () => {
      expect(global.renderToJSON(backward())).toMatchSnapshot()
    })

    test('must match forward', () => {
      expect(global.renderToJSON(forward())).toMatchSnapshot()
    })

    test('must match calendar', () => {
      expect(global.renderToJSON(calendar())).toMatchSnapshot()
    })
  })
})
