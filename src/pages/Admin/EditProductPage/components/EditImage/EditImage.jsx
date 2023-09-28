import React, { useEffect, useState } from "react";
import styles from "./EditImage.module.scss";
import { ICONS } from "../../../../../icons";
import useImage from "../../../../../apis/useImage";
import Skeleton from "../../../../../components/Skeleton/Skeleton";
import toast from "react-hot-toast";
import { extractKeyfromurl } from "../../../../../utils/extractKeyfromurl";

const EditImage = ({
  productInfo,
  setProductInfo,
  updatedPayload,
  setUpdatedPayload,
  fetchProductInfo,
}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [primaryImage, setPrimaryImage] = useState(null);
  const [hoverPrimary, setHoverPrimary] = useState(false);
  const [imageHover, setImageHover] = useState({
    0: false,
    1: false,
    2: false,
  });
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
  const {
    uploadImage,
    uploadImageLoading,
    deleteImage,
    editImage,
    attachImageWithProduct,
  } = useImage();
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
    formdata.append("product_id", productInfo?.product_id);
    formdata.append("is_primary", isPrimary);
    attachImageWithProduct(formdata, (res) => {
      fetchProductInfo();
      // if (isPrimary) {
      //   setPrimaryImage(res?.data);
      //   setUpdatedPayload({ ...updatedPayload, primary_image: res?.data });
      //   return;
      // }

      // let newImages = images.map((i, k) => {
      //   if (k == key) return { url: res?.data };
      //   else return i;
      // });
      // console.log(newImages);
      // setImages(newImages);
      // setUpdatedPayload({ ...updatedPayload, sec_images: newImages });
      // setImages([...images, (images[key].url = res?.data)]);
    });
    // }
  };

  const deleteImageHandler = async (id, url) => {
    deleteImage(extractKeyfromurl(url), { image_id: id }, () => {
      fetchProductInfo();
      toast.success("Image deleted successfully", {
        style: {
          backgroundColor: "#F7F6F5",
          fontFamily: "Jost",
        },
      });
    });
  };

  const editImageHandler = async (e, url, image_id) => {
    const formdata = new FormData();
    formdata.append("image", e.target.files[0]);
    formdata.append("image_id", image_id);
    editImage(extractKeyfromurl(url), formdata, () => {
      fetchProductInfo();
    });
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
    // console.log(secImages);
    setImageHover({
      0: false,
      1: false,
      2: false,
    });
    setHoverPrimary(false);
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
            {primaryImage?.image_url ? (
              <div
                onMouseEnter={() => setHoverPrimary(true)}
                onMouseLeave={() => setHoverPrimary(false)}
                className={styles.priHover}
              >
                {!hoverPrimary ? (
                  <img
                    width={222}
                    height={222}
                    src={primaryImage?.image_url}
                    alt="primary"
                  />
                ) : (
                  <div className={styles.primaryHover}>
                    <span
                      onClick={() => {
                        deleteImageHandler(
                          primaryImage?.image_id,
                          primaryImage?.image_url
                        );
                      }}
                      className={styles.deleteimg}
                    >
                      {ICONS.redTrash}
                    </span>
                    <label htmlFor="primaryImage">
                      {ICONS.addImage}
                      <input
                        type="file"
                        id="primaryImage"
                        onChange={(e) => {
                          editImageHandler(
                            e,
                            primaryImage?.image_url,
                            primaryImage?.image_id
                          );
                        }}
                        style={{ display: "none" }}
                      />
                    </label>
                  </div>
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
            {images[0]?.image_url ? (
              <div
                onMouseEnter={(e) => setImageHover({ ...imageHover, 0: true })}
                onMouseLeave={(e) => setImageHover({ ...imageHover, 0: false })}
                className={styles.secHover}
              >
                {!imageHover[0] ? (
                  <img
                    width={135}
                    height={123}
                    src={images[0]?.image_url}
                    alt="secondary"
                  />
                ) : (
                  <div className={styles.hover}>
                    <span
                      onClick={() => {
                        deleteImageHandler(
                          images[0]?.image_id,
                          images[0]?.image_url
                        );
                      }}
                      className={styles.deleteimg}
                    >
                      {ICONS.redTrash}
                    </span>
                    <label htmlFor="secImage">
                      {ICONS.addImage}
                      <input
                        type="file"
                        id="secImage"
                        onChange={(e) => {
                          editImageHandler(
                            e,
                            images[0]?.image_url,
                            images[0]?.image_id
                          );
                        }}
                        style={{ display: "none" }}
                      />
                    </label>
                  </div>
                )}
              </div>
            ) : (
              <label htmlFor="secImage" className={styles.secondaryImage}>
                {ICONS.addImage}
                <input
                  type="file"
                  id="secImage"
                  onChange={(e) => {
                    handleUpload(e, false, 0);
                  }}
                  style={{ display: "none" }}
                />
              </label>
            )}

            {images[1]?.image_url ? (
              <div
                onMouseEnter={(e) => setImageHover({ ...imageHover, 1: true })}
                onMouseLeave={(e) => setImageHover({ ...imageHover, 1: false })}
                className={styles.secHover}
              >
                {!imageHover[1] ? (
                  <img
                    width={135}
                    height={123}
                    src={images[1]?.image_url}
                    alt="secondary"
                  />
                ) : (
                  <div className={styles.hover}>
                    {" "}
                    <span
                      onClick={() => {
                        deleteImageHandler(
                          images[1]?.image_id,
                          images[1]?.image_url
                        );
                      }}
                      className={styles.deleteimg}
                    >
                      {ICONS.redTrash}
                    </span>
                    <label htmlFor="secImage">
                      {ICONS.addImage}
                      <input
                        type="file"
                        id="secImage"
                        onChange={(e) => {
                          editImageHandler(
                            e,
                            images[1]?.image_url,
                            images[1]?.image_id
                          );
                        }}
                        style={{ display: "none" }}
                      />
                    </label>
                  </div>
                )}
              </div>
            ) : (
              <label htmlFor="secImage" className={styles.secondaryImage}>
                {ICONS.addImage}
                <input
                  type="file"
                  id="secImage"
                  onChange={(e) => {
                    handleUpload(e, false, 1);
                  }}
                  style={{ display: "none" }}
                />
              </label>
            )}
            {images[2].image_url ? (
              <div
                onMouseEnter={(e) => setImageHover({ ...imageHover, 2: true })}
                onMouseLeave={(e) => setImageHover({ ...imageHover, 2: false })}
                className={styles.secHover}
              >
                {!imageHover[2] ? (
                  <img
                    width={135}
                    height={123}
                    src={images[2].image_url}
                    alt="secondary"
                  />
                ) : (
                  <div className={styles.hover}>
                    <span
                      onClick={() => {
                        deleteImageHandler(
                          images[2]?.image_id,
                          images[2]?.image_url
                        );
                      }}
                      className={styles.deleteimg}
                    >
                      {ICONS.redTrash}
                    </span>
                    <label htmlFor="secImage">
                      {ICONS.addImage}
                      <input
                        type="file"
                        id="secImage"
                        onChange={(e) => {
                          editImageHandler(
                            e,
                            images[2]?.image_url,
                            images[2]?.image_id
                          );
                        }}
                        style={{ display: "none" }}
                      />
                    </label>
                  </div>
                )}
              </div>
            ) : (
              <label htmlFor="secImage" className={styles.secondaryImage}>
                {ICONS.addImage}
                <input
                  type="file"
                  id="secImage"
                  onChange={(e) => {
                    handleUpload(e, false, 2);
                  }}
                  style={{ display: "none" }}
                />
              </label>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default EditImage;
