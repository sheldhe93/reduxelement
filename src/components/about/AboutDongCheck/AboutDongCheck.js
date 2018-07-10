import React, { Component } from 'react';
import { AboutSelect } from 'components/about/AboutSelect';
import { AboutInput } from 'components/about/AboutInput';
import data from './data.json';
import styles from './AboutDongCheck.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

class AboutDongCheck extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.part3.dong === nextState.selectedOption && nextProps.part3.floor === nextState.selectedOption2) {
      return false;
    } else {
      return true;
    }
  }
  state = {
    selectedOption: this.props.part3.dong,
    selectedOption2: this.props.part3.floor === " " ? "" : { value: this.props.part3.floor, label: this.props.part3.floor },
    selectsubData: [{}],
    subOn: this.props.part3.floor === " " ? true : false,
    selectMode: true,
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    if (selectedOption) {
      var subData = [];
      var selectMode = true;
      if (selectedOption.floor) {
        for (let index = 0; index < selectedOption.floor; index++) {
          subData[index] = { "value": (index + 1) + "층", "label": (index + 1) + "층" };
        }
        selectMode = true;
      } else {
        subData = [];
        selectMode = false;
      }
      this.setState({
        selectedOption2: "",
        selectsubData: subData,
        subOn: false,
        selectMode: selectMode,
      });
      this.props.onDong(selectedOption.name);
    } else {
      this.setState({
        selectedOption2: "",
        selectsubData: [{}],
        subOn: true,
        selectMode: true,
      });
      this.props.onNonSuccess();
      this.props.onDong("");
    }
  }
  handleChange2 = (selectedOption2) => {
    this.setState({ selectedOption2 });
    if (selectedOption2) {
      this.props.onFloor(selectedOption2.value);
      this.props.onSuccess();

    } else {
      this.props.onFloor("");
      this.props.onNonSuccess();
    }
  }
  handleChange3 = (e) => {
    this.setState({
      selectedOption2: e.target.value,
    });
    this.props.onFloor(e.target.value);
  }

  render() {
    const { selectedOption, selectedOption2, subOn } = this.state;
    const { onSuccess, onNonSuccess, part3 } = this.props;
    const selectData = data.danjis[0].dong;
    const mainData = selectData.map(function (data) {
      data.label = data.name;
      data.value = data.name;
      return data;
    });
    const aboutselect =
      this.state.selectMode === true
        ? <AboutSelect
          name={"2"}
          selectedOption2={selectedOption2}
          selectsubData={mainData}
          subOn={subOn}
          changeGO={(selectedOption2) => { this.handleChange2(selectedOption2) }}
        />
        : <AboutInput
          onSuccess={onSuccess}
          onNonSuccess={onNonSuccess}
          part3={part3}
          selectedOption2={selectedOption2}
          subOn={subOn}
          changeGO={(selectedOption2) => { this.handleChange3(selectedOption2) }}
        />;
    return (
      <div className={cx('detailDongCheck', 'flexcenter', 'wid90')}>
        <AboutSelect name={"1"} selectedOption2={selectedOption} selectsubData={mainData} subOn={subOn} changeGO={(selectedOption) => { this.handleChange(selectedOption) }} />
        {aboutselect}
      </div>
    );
  }
}

export default AboutDongCheck;