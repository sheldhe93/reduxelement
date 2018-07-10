import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';


class AboutSelect extends Component {
  handleGo = (selectedOption2) => {
    this.props.changeGO(selectedOption2);
  }
  render() {
    const { name, selectedOption2, selectsubData, subOn } = this.props;
    return (
      <div>
        <Select
          name="form-field-name2"
          value={selectedOption2}
          placeholder="층선택"
          onChange={this.handleGo}
          options={selectsubData}
          disabled={name === "2" ? subOn : false}
        />
      </div>
    );
  }
}

export default AboutSelect;