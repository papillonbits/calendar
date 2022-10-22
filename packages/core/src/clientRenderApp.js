/* eslint-disable import/no-import-module-exports */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { checkAccessibilityIssues } from '@papillonbits/library/a11y'
import { Calendar } from './pattern/organism/Date/Calendar'

/* istanbul ignore next */
function renderApp() {
  checkAccessibilityIssues(React, ReactDOM, 1000)

  ReactDOM.createRoot(document.getElementById('app')).render(
    <Calendar
      today={{
        year: 2018,
        monthOfYear: 8,
        dateOfTheMonth: 7,
      }}
    />,
  )

  if (module.hot) {
    module.hot.accept()
  }
}

renderApp()
