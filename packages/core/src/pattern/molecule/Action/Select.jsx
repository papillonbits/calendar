/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions, react/require-default-props */
import cx from 'classnames'
import { arrayOf, string, number, oneOf, func } from 'prop-types'
import { Icon } from '../../atom/Image/Icon'
import { Label } from '../../atom/Text/Label'
import styles from './Select.scss'

export function Select({ options, selectedOptionIndex, optionType, onChange }) {
  function onClickLeft() {
    onChange(selectedOptionIndex !== 0 ? selectedOptionIndex - 1 : options.length - 1)
  }

  function onClickRight() {
    onChange(selectedOptionIndex !== options.length - 1 ? selectedOptionIndex + 1 : 0)
  }

  return (
    <div className={styles.select}>
      <div onClick={onClickLeft} className={styles.selectLeft}>
        <Icon name="backward" width={15} height={15} />
      </div>
      <div
        className={cx(styles.selectCenter, {
          [styles.selectCenterWeek]: optionType === 'week',
          [styles.selectCenterMonth]: optionType === 'month',
          [styles.selectCenterYear]: optionType === 'year',
        })}
      >
        <Label color="blue" size="medium" text={options[selectedOptionIndex]} />
      </div>
      <div onClick={onClickRight} className={styles.selectRight}>
        <Icon name="forward" width={15} height={15} />
      </div>
    </div>
  )
}

Select.propTypes = {
  options: arrayOf(string).isRequired,
  selectedOptionIndex: number.isRequired,
  optionType: oneOf(['week', 'month', 'year']),
  onChange: func,
}

/*
`Select` is a
  stateless function component
  receiving `options, selectedOptionIndex, optionType, onChange` props
`rendering`
  two Icon components on the left and on the right
  along with a Label component
`handling`
  onClick events via onClickLeft and onClickRight functions
  both firing onChange function prop

Sample usages are as follows:
```javascript
  <Select
    options={weekOptions.map((week) => week.toUpperCase())}
    selectedOptionIndex={weekOptions.length - 1}
    optionType={'week'}
  />
  <Select
    options={monthOptions.map((month) => month.toUpperCase())}
    selectedOptionIndex={monthOptions.length - 1}
    optionType={'month'}
  />
  <Select
    options={yearOptions.map((year) => String(year))}
    selectedOptionIndex={yearOptions.length - 1}
    optionType={'year'}
  />
```
*/
