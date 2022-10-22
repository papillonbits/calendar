/* eslint-disable no-shadow, react/prop-types, jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions, react/no-array-index-key, react/default-props-match-prop-types */
import { Component } from 'react'
import cx from 'classnames'
import { shape, arrayOf, number, func } from 'prop-types'
import { Select } from '../Action/Select'
import { Label } from '../../atom/Text/Label'
import { monthOptions, yearOptions, yearStart } from '../../../data/select'
import styles from './CalendarView.scss'

const dateShape = shape({
  day: number,
  month: number,
  year: number,
})

export class CalendarView extends Component {
  onDayChange = (index) => {
    const { onChange, displayDays } = this.props

    const day = displayDays.find((day) => day.index === index)

    onChange({
      year: day.year,
      monthOfYear: day.monthOfYear,
      dateOfTheMonth: day.dateOfTheMonth,
    })
  }

  onMonthChange = (index) => {
    const { onChange, displayDays } = this.props

    onChange({
      year: displayDays.find((day) => day.today === true).year,
      monthOfYear: index + 1,
      dateOfTheMonth: 1,
    })
  }

  onYearChange = (index) => {
    const { onChange, displayDays } = this.props

    onChange({
      year: yearOptions[index],
      monthOfYear: displayDays.find((day) => day.today === true).monthOfYear,
      dateOfTheMonth: 1,
    })
  }

  render() {
    const { dayNames, displayDays } = this.props

    return (
      <div className={styles.calendarView}>
        <div className={styles.calendarViewLabel}>
          <Label color="grey" size="small" text="Starting date" />
        </div>
        <div className={styles.calendarViewMonthYear}>
          <Select
            options={monthOptions.map((month) => month)}
            selectedOptionIndex={displayDays.find((day) => day.today === true).monthOfYear - 1}
            optionType="month"
            onChange={this.onMonthChange}
          />
          <Select
            options={yearOptions.map((year) => String(year))}
            selectedOptionIndex={displayDays.find((day) => day.today === true).year - yearStart}
            optionType="year"
            onChange={this.onYearChange}
          />
        </div>
        <div className={styles.calendarViewDay}>
          {dayNames.map((dayName) => (
            <span key={dayName} className={styles.calendarViewDayDay}>
              {dayName}
            </span>
          ))}
          {displayDays.map((day, index) => (
            <span
              ref={day.index}
              onClick={() => {
                this.onDayChange(day.index)
              }}
              key={index}
              className={cx(styles.calendarViewDayDay, {
                [styles.calendarViewDayDayLastMonth]: day.lastMonth,
                [styles.calendarViewDayDayThisMonth]: day.thisMonth,
                [styles.calendarViewDayDayToday]: day.today,
                [styles.calendarViewDayDayNextMonth]: day.nextMonth,
              })}
            >
              {day.dateOfTheMonth}
            </span>
          ))}
        </div>
      </div>
    )
  }
}

CalendarView.defaultProps = {
  dayNames: ['Su', 'Ma', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
}

CalendarView.propTypes = {
  displayDays: arrayOf(shape(dateShape.isRequired)).isRequired,
  onChange: func.isRequired,
}

/*
`CalendarView` is a
  stateless class component
  receiving `displayDays and onChange` props
`rendering`
  Label and Select components

`handling`
  a number of events via onDayChange, onMonthChange and onYearChange functions
  all firing onChange function prop

Sample usages are as follows:
```javascript
  <CalendarView
    displayDays={getDisplayDays({
      year: 2017,
      monthOfYear: 5,
      dateOfTheMonth: 15,
    })}
    toggleView={() => {}}
  />
```
*/
