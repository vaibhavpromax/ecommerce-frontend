import React, { useState } from "react";
import styles from "./AddImage.module.scss";
import { ICONS } from "../../../../../icons";
import useImage from "../../../../../apis/useImage";

const AddImage = ({ productInfo, setProductInfo }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [primaryImage, setPrimaryImage] = useState(null);
  const [images, setImages] = useState([
    {
      url: null,
    },
    {
      url: null,
    },
    {
      url: null,
    },
  ]);
  const { uploadImage, uploadImageLoading } = useImage();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = (e, isPrimary, key) => {
    // Implement your upload logic here
    // if (primaryImage) {
    // Use APIs like FormData to upload the file

    const formdata = new FormData();
    formdata.append("image", e.target.files[0]);
    uploadImage(formdata, (res) => {
      if (isPrimary) {
        setPrimaryImage(res?.data);
        setProductInfo({ ...productInfo, primary_image: res?.data });
        return;
      }

      let newImages = images.map((i, k) => {
        if (k == key) return { url: res?.data };
        else return i;
      });
      console.log(newImages);
      setImages(newImages);
      setProductInfo({ ...productInfo, sec_images: newImages });
      // setImages([...images, (images[key].url = res?.data)]);
    });
    // }
  };

  return (
    <div className={styles.addImageWrapper}>
      <div className={styles.left}>Images</div>
      <div className={styles.right}>
        <div className={styles.p}>
          {primaryImage ? (
            <img width={222} height={222} src={primaryImage} alt="primary" />
          ) : (
            <label htmlFor="primaryImage" className={styles.primaryImage}>
              {ICONS.addImage}
              <input
                type="file"
                id="primaryImage"
                onChange={(e) => {
                  handleUpload(e, true);
                }}
                style={{ display: "none" }}
              />
            </label>
          )}
        </div>
        <div className={styles.secondaryImages}>
          {images?.map((img, key) => {
            return (
              <>
                {img.url ? (
                  <img width={135} height={123} src={img.url} alt="secondary" />
                ) : (
                  <label htmlFor="secImage" className={styles.secondaryImage}>
                    {ICONS.addImage}
                    <input
                      type="file"
                      id="secImage"
                      onChange={(e) => {
                        handleUpload(e, false, key);
                      }}
                      style={{ display: "none" }}
                    />
                  </label>
                )}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AddImage;
