const Footer = ({ footerdata }) => {
  return (
    <footer>
      <img src={footerdata.FIMAGE} alt="" />
      <div className="fleft">
        <span>A PROPOS</span>
        {footerdata.FLEFT.map((ele) => (
          <span>{ele}</span>
        ))}
      </div>
      <div className="fmiddle"></div>
      <span>SERVICES</span>
      {footerdata.FMIDLE.map((ele) => (
        <span>{ele}</span>
      ))}
      <div className="fright">
        <span>S’ABONNER</span>
        {footerdata.FRIGHT.map((ele) => (
          <span>{ele}</span>
        ))}
      </div>
    </footer>
  );
};
export default Footer;
