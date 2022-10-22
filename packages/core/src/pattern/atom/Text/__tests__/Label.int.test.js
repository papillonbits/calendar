import {
  blackTiny,
  blackSmall,
  blackMedium,
  blackLarge,
  blueTiny,
  blueSmall,
  blueMedium,
  blueLarge,
  greyTiny,
  greySmall,
  greyMedium,
  greyLarge,
} from './Label.int.story'

describe('<Label />', () => {
  describe('Render', () => {
    test('must match blackTiny', () => {
      expect(global.renderToJSON(blackTiny())).toMatchSnapshot()
    })

    test('must match blackSmall', () => {
      expect(global.renderToJSON(blackSmall())).toMatchSnapshot()
    })

    test('must match blackMedium', () => {
      expect(global.renderToJSON(blackMedium())).toMatchSnapshot()
    })

    test('must match blackLarge', () => {
      expect(global.renderToJSON(blackLarge())).toMatchSnapshot()
    })

    test('must match blueTiny', () => {
      expect(global.renderToJSON(blueTiny())).toMatchSnapshot()
    })

    test('must match blueSmall', () => {
      expect(global.renderToJSON(blueSmall())).toMatchSnapshot()
    })

    test('must match blueMedium', () => {
      expect(global.renderToJSON(blueMedium())).toMatchSnapshot()
    })

    test('must match blueLarge', () => {
      expect(global.renderToJSON(blueLarge())).toMatchSnapshot()
    })

    test('must match greyTiny', () => {
      expect(global.renderToJSON(greyTiny())).toMatchSnapshot()
    })

    test('must match greySmall', () => {
      expect(global.renderToJSON(greySmall())).toMatchSnapshot()
    })

    test('must match greyMedium', () => {
      expect(global.renderToJSON(greyMedium())).toMatchSnapshot()
    })

    test('must match greyLarge', () => {
      expect(global.renderToJSON(greyLarge())).toMatchSnapshot()
    })
  })
})
