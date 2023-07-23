import React, { useState } from "react";
import RatingStar from "../RatingStar/RatingStar";

const Review = ({ data }) => {
  data = [
    {
      username: "Donald Duck",
      rating: <RatingStar rating={3} />,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisi elit, sed do eiusmod tempor incididunt ut ero labore. Lorem ipsum dolor sit amet, consectetur adipisi elit, sed do eiusmod tempor incididunt ut ero labore.",
      profile_pic: require("../../../assets/profile.png"),
      date: "17, jun 2023",
    },
    {
      username: "johny Walker",
      rating: <RatingStar rating={3} />,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisi elit, sed do eiusmod tempor incididunt ut ero labore. Lorem ipsum dolor sit amet, consectetur adipisi elit, sed do eiusmod tempor incididunt ut ero labore.",
      profile_pic: require("../../../assets/profile.png"),
      date: "17, jun 2023",
    },
    {
      username: "Amitabh",
      rating: <RatingStar rating={2} />,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisi elit, sed do eiusmod tempor incididunt ut ero labore. Lorem ipsum dolor sit amet, consectetur adipisi elit, sed do eiusmod tempor incididunt ut ero labore.",
      profile_pic: require("../../../assets/profile.png"),
      date: "17, jun 2023",
    },
    {
      username: "Shiraz",
      rating: <RatingStar rating={3.4} />,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisi elit, sed do eiusmod tempor incididunt ut ero labore. Lorem ipsum dolor sit amet, consectetur adipisi elit, sed do eiusmod tempor incididunt ut ero labore.",
      profile_pic: require("../../../assets/profile.png"),
      date: "17, jun 2023",
    },
    {
      username: "Captain",
      rating: <RatingStar rating={3} />,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisi elit, sed do eiusmod tempor incididunt ut ero labore. Lorem ipsum dolor sit amet, consectetur adipisi elit, sed do eiusmod tempor incididunt ut ero labore.",
      profile_pic: require("../../../assets/profile.png"),
      date: "17, jun 2023",
    },
    {
      username: "Captain",
      rating: <RatingStar rating={3.5} />,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisi elit, sed do eiusmod tempor incididunt ut ero labore. Lorem ipsum dolor sit amet, consectetur adipisi elit, sed do eiusmod tempor incididunt ut ero labore.",
      profile_pic: require("../../../assets/profile.png"),
      date: "17, jun 2023",
    },
    {
      username: "Donald Duck",
      rating: <RatingStar rating={3} />,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisi elit, sed do eiusmod tempor incididunt ut ero labore. Lorem ipsum dolor sit amet, consectetur adipisi elit, sed do eiusmod tempor incididunt ut ero labore.",
      profile_pic: require("../../../assets/profile.png"),
      date: "17, jun 2023",
    },
    {
      username: "johny Walker",
      rating: <RatingStar rating={3} />,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisi elit, sed do eiusmod tempor incididunt ut ero labore. Lorem ipsum dolor sit amet, consectetur adipisi elit, sed do eiusmod tempor incididunt ut ero labore.",
      profile_pic: require("../../../assets/profile.png"),
      date: "17, jun 2023",
    },
    {
      username: "Amitabh",
      rating: <RatingStar rating={2} />,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisi elit, sed do eiusmod tempor incididunt ut ero labore. Lorem ipsum dolor sit amet, consectetur adipisi elit, sed do eiusmod tempor incididunt ut ero labore.",
      profile_pic: require("../../../assets/profile.png"),
      date: "17, jun 2023",
    },
    {
      username: "Shiraz",
      rating: <RatingStar rating={3} />,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisi elit, sed do eiusmod tempor incididunt ut ero labore. Lorem ipsum dolor sit amet, consectetur adipisi elit, sed do eiusmod tempor incididunt ut ero labore.",
      profile_pic: require("../../../assets/profile.png"),
      date: "17, jun 2023",
    },
    {
      username: "Captain",
      rating: <RatingStar rating={3} />,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisi elit, sed do eiusmod tempor incididunt ut ero labore. Lorem ipsum dolor sit amet, consectetur adipisi elit, sed do eiusmod tempor incididunt ut ero labore.",
      profile_pic: require("../../../assets/profile.png"),
      date: "17, jun 2023",
    },
    {
      username: "Captain",
      rating: <RatingStar rating={3} />,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisi elit, sed do eiusmod tempor incididunt ut ero labore. Lorem ipsum dolor sit amet, consectetur adipisi elit, sed do eiusmod tempor incididunt ut ero labore.",
      profile_pic: require("../../../assets/profile.png"),
      date: "17, jun 2023",
    },
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPagination = () => {
    const pagesToShow = 2; // Number of pages to show before and after the current page
    const pages = [];
    let startPage = Math.max(currentPage - pagesToShow, 1);
    let endPage = Math.min(currentPage + pagesToShow, totalPages);

    if (currentPage > 1) {
      pages.push(
        <span key="prev" onClick={() => handlePageChange(currentPage - 1)}>
          {"<"}
        </span>
      );
    }

    if (startPage > 1) {
      pages.push(
        <span key={1} onClick={() => handlePageChange(1)}>
          1
        </span>
      );
      if (startPage > 2) {
        pages.push(<span key="ellipsis1">...</span>);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <span
          key={i}
          onClick={() => handlePageChange(i)}
          style={{
            display: "inline-block",
            width: "40px",
            height: "40px",
            fontSize: "35px",
            marginLeft: "25px",
            color: "#615C5E",
            border:i === currentPage ? "1px solid red" : "none",
            fontWeight: i === currentPage ? "bold" : "normal",
            cursor: i === currentPage ? " default " : "pointer",
          }}
        >
          {i}
        </span>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(<span key="ellipsis2">...</span>);
      }
      pages.push(
        <span key={totalPages} onClick={() => handlePageChange(totalPages)}>
          {totalPages}
        </span>
      );
    }

    if (currentPage < totalPages) {
      pages.push(
        <span key="next" onClick={() => handlePageChange(currentPage + 1)}>
          {">"}
        </span>
      );
    }

    return pages;
  };

  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      {paginatedData.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            marginBottom: "20px",
            justifyContent: "center",
            alignItems: "start",
            borderBottom: "2px solid grey",
            flexDirection: "column",
            width: "80%",
            height: "30%",
          }}
        >
          <div style={{ marginRight: "20px", display: "flex" }}>
            <img
              src={item.profile_pic}
              alt={`Item ${index + 1}`}
              style={{
                height: "50px",
                width: "50px",
                borderRadius: "50%",
                border: "2px solid white",
                marginRight: "10px",
              }}
            />
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "20px",
              }}
            >
              {item.username}
            </span>
          </div>
          <div style={{}}>
            <h3>{item.rating}</h3>
            <p
              style={{
                width: "548px",
                height: "57px",
                fontFamily: "Jost",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "19px",
                letterSpacing: "0em",
                textAlign: "left",
              }}
            >
              {item.review}
            </p>
            <span
              style={{
                marginTop: "10px",
                padding: "5px 5px 10px 0px",
                display: "block",
              }}
            >
              Dated On: &nbsp; {item.date}
            </span>
          </div>
        </div>
      ))}

      <div
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems:"center",
          marginTop: "28px",
          marginLeft: "120px",
          textAlign:"center"
        }}
      >
        {renderPagination()}
      </div>
    </div>
  );
};

export default Review;
