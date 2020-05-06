import React, { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Notification.module.scss';

const Notification = ({ text }) => {
  const [isShown, setVisibility] = useState(false);

  const CheckVisibility = () => {
    if (isShown) {
      setTimeout(() => {
        return (
          <div
            className={classnames('notification is-info', styles.notification)}
          >
            {text}
          </div>
        );
      }, 2000);
      setVisibility(false);
    } else {
      setVisibility(true);
      return <></>;
    }
  };

  return <div>{CheckVisibility()}</div>;
};

Notification.propType = {
  text: PropTypes.string.isRequired,
};

export default Notification;
