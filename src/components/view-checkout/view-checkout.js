import React from 'react'
import styles from './view-checkout-style.css'
import classnames from 'classnames'

export default class ViewCheckout {
  render() {
    let h1Style = classnames('class1', 'class2', 'class3')
    let buttonStyle = classnames('pure', 'btn-primary', styles.button)
    return (
      <div className={ styles.root }>
        <p className={ styles.text }>
        Scoped Selectors</p>
        <h1 className="pure-h1">h1 here </h1>
        <button className={ buttonStyle }></button>
      </div>

    )
  }
}
