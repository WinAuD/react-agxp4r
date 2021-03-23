import React from "react";
import ReactDOM from "react-dom";

class NameTag extends React.Component {
            render() {
                const myNiceNameTag = {
                    display: "inline-block",    // display: inline-block TEST;
                    padding: "40px",            // padding: 30px
                    borderRadius: '50%',        // border-radius: 50%
                    backgroundColor: this.props.myColor, // background-color: #C6DCEE
                    fontFamily: this.props.myColor,      // font-family: fantasy
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
                <NameTag myColor="#AEA" myFont="courier">1</NameTag>
                <NameTag myColor="#EEA" myFont="courier">3</NameTag>
                <NameTag myColor="#AAA" myFont="courier">4</NameTag>
                <NameTag myColor="#EEE" myFont="courier">5</NameTag>

            </div>,
            document.getElementById("myContainer")
        );
