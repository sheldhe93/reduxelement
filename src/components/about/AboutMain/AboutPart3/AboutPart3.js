import React, { Component } from 'react';
import { Icon } from 'react-icons-kit';
import { iosCheckmarkOutline } from 'react-icons-kit/ionicons/iosCheckmarkOutline'
import { iosCheckmark } from 'react-icons-kit/ionicons/iosCheckmark'
import { thinRight } from 'react-icons-kit/entypo/thinRight'
import { thinDown } from 'react-icons-kit/entypo/thinDown'
import { AboutDong } from 'components/about/AboutDong';
import styles from './AboutPart3.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function createWarning(funcName) {
  return () => console.warn(funcName + ' is not defined');
}
const defaultProps = {
  onOpen2_3: createWarning('onOpen2_3'),
  onClose2_3: createWarning('onClose2_3'),
};
class AboutPart3 extends Component {
  render() {
    const { onOpen2_3, onClose2_3 } = this.props;
    const { part3 } = this.props;
    const part3Click = () => {
      part3.on === "on" ? onClose2_3() : onOpen2_3();
    }
    return (
      <div className={cx('aboutPart')}>
        <div onClick={part3Click} className={cx(`toggle${part3.on}`, "cursor", "borderbottom")}>
          <div className={cx('wid15', 'flexcenter', `onOff${part3.success}`)} >
            <Icon size={25} icon={part3.success === "Y" ? iosCheckmark : iosCheckmarkOutline} />
          </div>
          <div className={cx('wid75')}>{this.props.part3.name}</div>
          <div className={cx('wid10', 'flexcenter', 'borderleft')}>
            <Icon size={20} icon={part3.on === "on" ? thinDown : thinRight} />
          </div>
        </div>
        <AboutDong />
      </div>
    );
  }
}
AboutPart3.defaultProps = defaultProps;
export default AboutPart3;