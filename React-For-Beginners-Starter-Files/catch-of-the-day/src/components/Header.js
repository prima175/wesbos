import React from "react";
import PropTypes from "prop-types";
// const Header = ({ tagline, age }) => (
//   <header className="top">
//     <h1>
//       catch
//       <span className="ofThe">
//         <span className="of">of</span>
//         <span className="the">the</span>
//       </span>
//       day
//     </h1>
//     <h3 className="tagline">
//       <span>
//         {tagline} {age}
//       </span>
//     </h3>
//   </header>
// );

const Header = (props) => (
  <header className="top">
    <h1>
      catch
      <span className="ofThe">
        <span className="of">of</span>
        <span className="the">the</span>
      </span>
      day
    </h1>
    <h3 className="tagline">
      <span>{props.tagline}</span>
    </h3>
  </header>
);
Header.propTypes = {
  tagline: PropTypes.string.isRequired,
};

export default Header;
