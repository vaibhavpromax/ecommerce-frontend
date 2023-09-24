import React, { useEffect, useState } from "react";
import styles from "./EditImage.module.scss";
import { ICONS } from "../../../../../icons";
import useImage from "../../../../../apis/useImage";
import Skeleton from "../../../../../components/Skeleton/Skeleton";

const EditImage = ({
  productInfo,
  setProductInfo,
  updatedPayload,
  setUpdatedPayload,
}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [primaryImage, setPrimaryImage] = useState(null);
  const [hoverPrimary, setHoverPrimary] = useState(false);
  const [imageHover, setImageHover] = useState(false);
  const [images, setImages] = useState([
    {
      image_url: null,
    },
    {
      image_url: null,
    },
    {
      image_url: null,
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
        setUpdatedPayload({ ...updatedPayload, primary_image: res?.data });
        return;
      }

      let newImages = images.map((i, k) => {
        if (k == key) return { url: res?.data };
        else return i;
      });
      console.log(newImages);
      setImages(newImages);
      setUpdatedPayload({ ...updatedPayload, sec_images: newImages });
      // setImages([...images, (images[key].url = res?.data)]);
    });
    // }
  };

  useEffect(() => {
    let arr = productInfo.Images;
    const secImages = [];

    for (let img in arr) {
      if (arr[img].is_primary) setPrimaryImage(arr[img]);
      else {
        secImages.push(arr[img]);
      }
    }
    if (secImages.length < 3) {
      const remainingImages = 3 - secImages.length;
      for (let index = 0; index < remainingImages; index++) {
        secImages.push({
          image_url: null,
        });
      }
    }
    console.log(secImages);
    setImages(secImages);
  }, [productInfo]);

  return (
    <div className={styles.addImageWrapper}>
      <div className={styles.left}>Images</div>
      {uploadImageLoading ? (
        <div className={styles.right}>
          <Skeleton className={styles.imageLoader} />
        </div>
      ) : (
        <div className={styles.right}>
          <div className={styles.p}>
            {primaryImage ? (
              <div
                onMouseEnter={() => setHoverPrimary(true)}
                onMouseLeave={() => setHoverPrimary(false)}
                className={styles.priHover}
              >
                <img
                  width={222}
                  height={222}
                  src={primaryImage.image_url}
                  alt="primary"
                />
                {hoverPrimary && (
                  <>
                    {" "}
                    {ICONS.trash} {ICONS.addImage}{" "}
                  </>
                )}
              </div>
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
                  {img.image_url ? (
                    <div
                      onMouseEnter={(e) => setImageHover(true)}
                      onMouseLeave={() => setImageHover(false)}
                      className={styles.secHover}
                    >
                      <img
                        width={135}
                        height={123}
                        src={img.image_url}
                        alt="secondary"
                      />

                      {imageHover && (
                        <>
                          {" "}
                          {ICONS.trash} {ICONS.addImage}{" "}
                        </>
                      )}
                    </div>
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
      )}
    </div>
  );
};

export default EditImage;
