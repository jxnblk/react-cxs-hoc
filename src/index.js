
import React from 'react'
import classnames from 'classnames'
import cxs from 'cxs'

const withCxs = (Comp) => {
  class CxsComponent extends React.Component {
    render () {
      const {
        css,
        className,
        ...rest
      } = this.props

      const cx = classnames(className, cxs(css))

      return <Comp {...rest} className={cx} />
    }
  }

  CxsComponent.propTypes = {
    css: React.PropTypes.object
  }

  return CxsComponent
}

export cxs from 'cxs'

export default withCxs

