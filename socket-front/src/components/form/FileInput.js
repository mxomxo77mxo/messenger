import React, { Component } from 'react';
import _ from 'lodash';

class FileInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
    }
  }

  handleChange = (ev) => {
    const files = [...ev.target.files];
    files.forEach(file => {
      file.preview = URL.createObjectURL(file);
    })
    this.setState({ files })
    this.props.onChange(ev, files);
    ev.target.value = '';
  }

  render() {
    const { files, } = this.state;
    const { ...props } = this.props;
    return (
      <label className="fileInput">
        <ul>
          {files.map(file => (
            <li>
              <img width={100} src={file.preview} alt={file.name} />
              <span>{file.name}</span>
            </li>
          ))}
        </ul>
        {_.isEmpty(files) ? <span>Please Select File</span> : null}
        <input {...props} type="file" onChange={this.handleChange} />
      </label>
    );
  }
}

export default FileInput;
