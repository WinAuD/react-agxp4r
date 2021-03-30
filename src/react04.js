import React from "react";
import ReactDOM from "react-dom";

function getRandomColor() {
  return "#" + ((Math.random() * 0xfff) << 0).toString(16);
}

class NameTag extends React.Component {
  render() {
    const myNiceNameTag = {
      display: "inline-block", // display: inline-block TEST;
      padding: "10px", // padding: 30px
      borderRadius: "50%", // border-radius: 50%
      backgroundColor: this.props.bgcolor || getRandomColor(), // background-color: #C6DCEE
      fontFamily: "courier", // font-family: fantasy
      fontSize: 64, // font-size: 64px
      textAlign: "center" // text-align: center
    };

    return <div style={myNiceNameTag}>{this.props.children}</div>;
  }
}

ReactDOM.render(
  <div>
    <NameTag bgcolor="#F00">Spiderman</NameTag>
    <NameTag bgcolor="#AEA">Batman</NameTag>
    <NameTag>AntWoman</NameTag>
    <NameTag>IronMan</NameTag>
  </div>,
  document.getElementById("myContainer")
);
