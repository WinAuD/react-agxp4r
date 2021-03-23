import React from "react";
import ReactDOM from "react-dom";

class NameTag extends React.Component {
            render() {
                const myNiceNameTag = {
                    display: "inline-block",    // display: inline-block TEST;
                    padding: "10px",            // padding: 30px
                    borderRadius: '50%',        // border-radius: 50%
                    backgroundColor: this.props.bgcolor, // background-color: #C6DCEE
                    fontFamily: "courier",      // font-family: fantasy
                    fontSize: 64,           // font-size: 64px
                    textAlign: "center"         // text-align: center
                };

                return (
                    <div style={myNiceNameTag}>
                        {this.props.children}
                    </div>
                );
            }
        }

        ReactDOM.render(
            <div>
                <NameTag bgcolor="#F00">Spiderman</NameTag>
                <NameTag bgcolor="#AEA">Spiderman</NameTag>
                
            </div>,
            document.getElementById("myContainer")
        );
