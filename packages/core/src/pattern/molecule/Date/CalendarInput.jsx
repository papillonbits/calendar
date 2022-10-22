/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions, react/require-default-props */
import { shape, func } from 'prop-types'
import { Label } from '../../atom/Text/Label'
import { Icon } from '../../atom/Image/Icon'
import { dayShape } from '../../../data/shape'
import styles from './CalendarInput.scss'

export function CalendarInput({ today, toggleView }) {
  const text = `
    ${today.dateOfTheMonth < 10 ? `0${String(today.dateOfTheMonth)}` : String(today.dateOfTheMonth)} -
    ${today.monthOfYear < 10 ? `0${String(today.monthOfYear)}` : String(today.monthOfYear)} -
    ${String(today.year)}
  `

  return (
    <div className={styles.calendarInput}>
      <div className={styles.calendarInputLeft}>
        <div className={styles.calendarInputLeftLabel}>
          <Label color="grey" size="small" text="Starting date" />
        </div>
        <div className={styles.calendarInputLeftText}>
          <Label color="blue" size="large" text={text} />
        </div>
      </div>
      <div onClick={toggleView} className={styles.calendarInputRight}>
        <Icon fill="#c6c6c6" name="calendar" width={50} height={50} />
      </div>
    </div>
  )
}

CalendarInput.propTypes = {
  today: shape(dayShape).isRequired,
  toggleView: func,
}

/*
`CalendarInput` is a
  stateless function component
  receiving `today, toggleView` props
`rendering`
  two Label components and an Icon component
`handling`
  onClick event by firing toggleView function prop

Sample usage is as follows:
```javascript
  <CalendarInput
    today={{
      year: 2015,
      monthOfYear: 9,
      dateOfTheMonth: 27,
    }}
    toggleView={() => {}}
  />
```
*/
