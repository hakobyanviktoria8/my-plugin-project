import React, { Component } from "react";
import PropTypes from "prop-types";

class UploadFileForm extends Component {
  state = {
    file: null,
    type: null,
    options: {
      filename: null
    }
  };
  onChangeImportFile = file => {
    file &&
    this.setState({
      file,
      type: file.type,
      options: { ...this.state.options, filename: file.name }
    });
  };
  render() {
    return <input
      onChange={({target:{files}}) => files && this.onChangeImportFile(files[0])} name="file_input" accept=".csv" type="file" />;
  }
}

export default UploadFileForm;