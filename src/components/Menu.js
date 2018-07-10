import React from 'react';
import AgreeButton from './AgreeButton';
import { Route } from 'react-router-dom';
// import styles from './Menu.scss';
// import classNames from 'classnames/bind';

// const cx = classNames.bind(styles);

const Menu = () => {

  return (
    <header>
      <Route path="/" component={AgreeButton} exact />
      <Route path="/about" component={AgreeButton} />
      <Route path="/detail" component={AgreeButton} />
      <Route path="/result" component={AgreeButton} />

    </header>
  );
};

export default Menu;