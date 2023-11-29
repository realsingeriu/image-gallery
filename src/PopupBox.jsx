import React from "react";

const PopupBox = ({ item, setItem }) => {
  //console.log(item);
  const url = item?.urls?.regular;

  const viewsCount = "6,676,693";
  const downloadsCount = "235,685";
  const likesCount = "4,235,568";

  const shareUrl = "https://www.naver.com";

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
        <div className="table">
          <div className="view">
            <i className="uil uil-eye"></i>
            <h3 className="views">조회수</h3>
            <span>{viewsCount}</span>
          </div>
          <div className="download">
            <i className="uil uil-cloud-download"></i>
            <h3 className="downloads">다운로드</h3>
            <span>{downloadsCount}</span>
          </div>
          <div className="like">
            <i className="uil uil-heart"></i>
            <h3 className="likes">좋아요</h3>
            <span>{likesCount}</span>
          </div>
        </div>
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
