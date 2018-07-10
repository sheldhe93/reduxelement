import React from 'react';
import { Icon } from 'react-icons-kit'
import { numberOne } from 'react-icons-kit/metrize/numberOne'
import { numberTwo } from 'react-icons-kit/metrize/numberTwo'
import { numberThree } from 'react-icons-kit/metrize/numberThree'
import { vinyl } from 'react-icons-kit/entypo/vinyl'
import styles from './Menu.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const AgreeButton = ({ match }) => {
  const title = match.path === "/result" ? "작성리뷰 확인하기" : "아파트 리뷰 작성하기";
  const progressView = {
    display: match.path === "/result" ? "none" : "flex"
  };
  const activeStyle = {
    width: 30, height: 30, color: match.path === "/" ? "#9e9e9e" : "#fff",
  };
  const activeStyle2 = {
    width: 30, height: 30, color: match.path === "/about" ? "#9e9e9e" : "#fff",
  };
  const activeStyle3 = {
    width: 30, height: 30, color: match.path === "/detail" ? "#9e9e9e" : "#fff",
  };
  const icon1 = match.path === "/" ? numberOne : vinyl;
  const icon2 = match.path === "/" ? numberTwo : match.path === "/about" ? numberTwo : vinyl;
  const icon3 = match.path === "/result" ? vinyl : numberThree;
  return (
    <div>
      <div className={cx('viewer-subject')}>
        {title}
      </div>
      <div className={cx('viewer-progress')} style={progressView} >
        <div className={cx('flexcenter')} >
          <div className={cx('flexcenter')} style={activeStyle}>
            <Icon size={'100%'} icon={icon1} />
          </div>
          <div className={cx('flexcenter')} style={activeStyle2}>
            <Icon size={'100%'} icon={icon2} />
          </div>
          <div className={cx('flexcenter')} style={activeStyle3}>
            <Icon size={'100%'} icon={icon3} />
          </div>
        </div>
      </div>
    </div>

  );
};

export default AgreeButton;