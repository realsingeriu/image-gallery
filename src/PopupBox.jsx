import React, { useEffect, useState } from "react";

const PopupBox = ({ item, setItem }) => {
  //console.log(item);
  const [photoInfo, setphotoInfo] = useState(null);
  const url = item?.urls?.regular;

  const shareUrl = item?.links?.html || "https://unsplash.com";

  useEffect(() => {
    const fetchPhotoInfo = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/photos/${item?.id}?client_id=${
            import.meta.env.VITE_ACCESS_KEY
          }`
        );
        const data = await response.json();
        setphotoInfo(data);
      } catch (error) {
        console.error("Error fetching photo info:", error);
      }
    };

    if (item?.id) {
      fetchPhotoInfo();
    }
  }, [item]);

  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    shareUrl
  )}`;
  const youtubeShareUrl = `https://www.youtube.com/share?url=${encodeURIComponent(
    shareUrl
  )}`;
  const lineShareUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(
    shareUrl
  )}`;

  return (
    <div className="lightbox show">
      <div className="wrapper">
        <header>
          <div className="details">
            <i className="uil uil-camera"></i>
            <span>Image Preview</span>
          </div>
          <div className="buttons" onClick={() => setItem(null)}>
            <i className="close-icon uil uil-times"></i>
          </div>
        </header>
        <div className="preview-img">
          <div className="img">
            <img src={url} alt="preview-img" />
          </div>
        </div>
        <hr></hr>
        <div className="table">
          <div className="view">
            <i className="uil uil-eye"></i>
            <h3 className="views">조회수</h3>
            <span>{photoInfo?.views}</span>
          </div>
          <div className="download">
            <i className="uil uil-cloud-download"></i>
            <h3 className="downloads">다운로드</h3>
            <span>{photoInfo?.downloads}</span>
          </div>
          <div className="like">
            <i className="uil uil-heart"></i>
            <h3 className="likes">좋아요</h3>
            <span>{photoInfo?.likes}</span>
          </div>
        </div>
        <hr></hr>
        <div className="sharing">
          <div className="twitter">
            <a href={twitterShareUrl} target="_blank" rel="noopener noreferrer">
              <i className="uil uil-twitter"></i>
            </a>
          </div>
          <div className="youtube">
            <a href={youtubeShareUrl} target="_blank" rel="noopener noreferrer">
              <i className="uil uil-youtube"></i>
            </a>
          </div>
          <div className="line">
            <a href={lineShareUrl} target="_blank" rel="noopener noreferrer">
              <i className="uil uil-line"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PopupBox;
