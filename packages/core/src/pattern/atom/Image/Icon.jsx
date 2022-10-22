import { shape } from 'prop-types'
import { iconShape } from '../../../data/shape'
import { getPath } from '../../../library/font'

export function Icon({ name, width, height, fill, className }) {
  return (
    <svg fill={fill} fontSize="1px" width={width} height={height} viewBox="0 0 1024 1024" className={className}>
      <path d={getPath(name)} />
    </svg>
  )
}

Icon.defaultProps = {
  className: '',
  fill: '',
}

Icon.propTypes = shape(iconShape).isRequired

/*
`Icon` is a
  stateless function component
  receiving `name, width, height, fill, className` props
`rendering`
  an svg element passing on a path
  matching different icons with name.

Sample usages are as follows:
```javascript
  <Icon name={'chevron-thin-left'} width={20} height={20} />
  <Icon name={'chevron-thin-right'} width={20} height={20} />
  <Icon name={'backward'} width={20} height={20} />
  <Icon name={'forward'} width={20} height={20} />
  <Icon name={'calendar'} width={20} height={20} />
```
*/
