import React, { Component } from 'react';
import { Icon } from 'react-icons-kit';
import { iosCheckmarkOutline } from 'react-icons-kit/ionicons/iosCheckmarkOutline'
import { iosCheckmark } from 'react-icons-kit/ionicons/iosCheckmark'
import { thinRight } from 'react-icons-kit/entypo/thinRight'
import { thinDown } from 'react-icons-kit/entypo/thinDown'
import { AboutStar } from 'components/about/AboutStar';
import styles from './AboutPart1.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function createWarning(funcName) {
  return () => console.warn(funcName + ' is not defined');
}
const defaultProps = {
  onOpen2_1: createWarning('onOpen2_1'),
  onClose2_1: createWarning('onClose2_1'),
  part1: { name: "교통여건", on: "off", success: "", star: 0, memo: "" },
};
class AboutMain extends Component {
  constructor(props) {
    super(props);
    this.setMemo = this.setMemo.bind(this);
  }

  setMemo(e) {
    const memo = e.target.value;
    if (memo.length >= 50) {
      this.props.onSuccess();
    } else if (memo.length < 50) {
      this.props.onNonSuccess();
    }
    this.props.onChangeMeno(memo);
  }
  render() {
    const { onOpen2_1, onClose2_1 } = this.props;
    const { part1 } = this.props;
    const part1Click = () => {
      part1.on === "on" ? onClose2_1() : onOpen2_1();
    }
    const placehol = `${part1.name}의 장단점을 입력해주세요.`;
    return (
      <div className={cx('aboutPart')}>
        <div onClick={part1Click} className={cx(`toggle${part1.on}`, "cursor")}>
          <div className={cx('wid15', 'flexcenter', `onOff${part1.success}`)} >
            <Icon
              size={25}
              icon={part1.success === "Y" ? iosCheckmark : iosCheckmarkOutline}
            />
          </div>
          <div className={cx('wid75')}>{part1.name}</div>
          <div className={cx('wid10', 'flexcenter', 'borderleft')}>
            <Icon size={20} icon={part1.on === "on" ? thinDown : thinRight} />
          </div>
        </div>
        <div className={cx(`detail${part1.on}`)}>
          <div className={cx('detailIntro', 'wid85')}>
            <div>대중교통이용이나, 자동차 운행과 같은 {part1.name}</div>
            <div>대해 평가해주세요.(50자이상)</div>
          </div>
          <AboutStar part={part1} onChangeStar={this.props.onChangeStar} />
          <div className={cx('detailEx', 'wid90')}>
            <div>(예시)삼각지역이 도보 3분거리이고,
              종각으로 가는 501버스를 집 바로 앞 버스 정류장에서 탈 수 있다.
              배차 간격이 짧아 출 퇴근이 편리하다. 하지만 서울역이 근처에 있어서 차가 항상 막혀, 자가용 이용은
              자제하려고 한다.
            </div>
          </div>
          <div className={cx('detailMemo', 'wid90')}>
            <textarea placeholder={placehol} name="" id="" value={part1.memo} onChange={this.setMemo}></textarea>
          </div>
        </div>
      </div>
    );
  }
}
AboutMain.defaultProps = defaultProps;
export default AboutMain;