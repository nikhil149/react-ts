import { faLink, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import classes from './modalFooter.module.css';

const ModalFooter: React.FC = () => {
  return (
    <div className={classes.popFooter}>
    <div className={classes.popFooterDiv}>
      <div className={classes.learnDiv}>
        <FontAwesomeIcon icon={faQuestionCircle} />
        <span className={classes.learnSpan}>learn about sharing</span>
      </div>
      <button type="button" className={classes.copyLink}>
        <FontAwesomeIcon icon={faLink} />
        Copy Link
      </button>
    </div>
  </div>
  )
}

export default ModalFooter