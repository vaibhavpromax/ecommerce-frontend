import SortDD from "../SortDropdown/SortDropdown"
const Search = () => {
  return (
    <div className="search">
      <div
        className="searchbar"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          position: 'relative',
          borderBottom: '1px solid grey',
          width: '80%',
          margin: '15px auto ',
          paddingBottom: '10px',
          height:'50px'
   


        }}
      >
        <span className="review"
        style={{
          width: "225px",
          height: "29px",
          fontFamily: "Gelasio",
fontSize:"24px",
fontWeight:"500",
lineheight:" 29px",
letterSpacing:"0em",
color: "#3F373A"


  
        }}
        
        >221 Product reviews</span>
        {/* <input type="text" className="postreview" placeholder="write product review" />
        <span
          className="arr"
          style={{
            position: 'absolute',
            left: '57%'
          }}
        >
         &#9660;
        </span> */}
        <span className="latest"
        style={{
          width: "128px",
          height: "29px",
          fontSize:"16px"

          

        }}
        >Sort By: &nbsp;<SortDD /></span>
      </div>
    </div>
  );
};

export default Search