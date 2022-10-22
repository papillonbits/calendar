import cx from 'classnames'
import { string, oneOf } from 'prop-types'
import styles from './Label.scss'

export function Label({ color, size, text }) {
  return (
    <span
      className={cx(
        styles.label,
        {
          [styles.labelGrey]: color === 'grey',
          [styles.labelBlack]: color === 'black',
          [styles.labelBlue]: color === 'blue',
        },
        {
          [styles.labelTiny]: size === 'tiny',
          [styles.labelSmall]: size === 'small',
          [styles.labelMedium]: size === 'medium',
          [styles.labelLarge]: size === 'large',
        },
      )}
    >
      {text}
    </span>
  )
}

Label.propTypes = {
  color: oneOf(['grey', 'black', 'blue']).isRequired,
  size: oneOf(['tiny', 'small', 'medium', 'large']).isRequired,
  text: string.isRequired,
}

/*
`Label` is a
  stateless function component
  receiving `color, size, text` props
`rendering`
  a styled span

Sample usages are as follows:
```javascript
  <Label color="black" size="tiny" text="some label" />
  <Label color="black" size="small" text="some label" />
  <Label color="black" size="medium" text="some label" />
  <Label color="black" size="large" text="some label" />

  <Label color="blue" size="tiny" text="some label" />
  <Label color="blue" size="small" text="some label" />
  <Label color="blue" size="medium" text="some label" />
  <Label color="blue" size="large" text="some label" />

  <Label color="grey" size="tiny" text="some label" />
  <Label color="grey" size="small" text="some label" />
  <Label color="grey" size="medium" text="some label" />
  <Label color="grey" size="large" text="some label" />
```
*/
