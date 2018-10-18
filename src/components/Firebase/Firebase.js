import React, { Component } from "react";
import axios from "axios";
import firebaseinit from "../../firebaseinit";
import FileUploader from "react-firebase-file-uploader";

class Firebase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      file: "",
      fileURL: ""
    };
  }

  handleUploadStart = () => this.setState({ isUploading: true });

  handleUploadError = error => {
    this.setState({ isUploading: false });
    console.error(error);
  };
  handleUploadSuccess = filename => {
    this.setState({
      file: filename
    });
    firebaseinit
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ fileURL: url }));
    // .then(() => {
    //   axios.post("/api/files", { url: this.state.fileURL });
    // });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <form>
          <label>Upload Multiple Files: </label>

          {/* {this.state.isUploading && <p>{this.state.progress}</p>} */}

          <div className="firebase-box">
            <div className="file-box">{/* <p>{this.state.file}</p> */}</div>
          </div>

          <FileUploader
            // accept="image/*"
            name="avatar"
            randomizeFilename
            storageRef={firebaseinit.storage().ref("images")}
            onUploadStart={this.handleUploadStart}
            onUploadError={this.handleUploadError}
            onUploadSuccess={this.handleUploadSuccess}
            onProgress={this.handleProgress}
            multiple={"multiple"}
          />
        </form>
      </div>
    );
  }
}

export default Firebase;
