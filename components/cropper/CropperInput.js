import React, { Component, createRef } from "react";
import Cropper from "react-cropper";
export class CropperInput extends Component {
  cropper = createRef();
  cropImage = () => {
    const { setImage } = this.props;
    console.log(this.cropper.current);
    // if (typeof this.cropper.current.getCroppedCanvas() === "undefined") {
    //   return;
    // }
    // this.cropper.current.getCroppedCanvas().toBlob(blob => {
    setImage(this.cropper.current.src);
    // }, "image/*");
  };
  render() {
    const { imagePreview } = this.props;
    return (
      <Cropper
        ref={this.cropper}
        src={imagePreview}
        style={{ height: 400, width: "100%" }}
        preview=".img-preview"
        aspectRatio={1}
        viewMode={1}
        dragMode="move"
        guides={false}
        scalable={true}
        cropBoxMovable={true}
        cropBoxResizable={true}
        crop={this.cropImage}
      />
    );
  }
}

export default CropperInput;
