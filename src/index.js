import React from "react";
import ReactDOM from "react-dom";

class MyNum extends React.Component {
            render() {
                const myNiceNum = {
                    display: "inline-block",    // display: inline-block TEST;
                    padding: "30px",            // padding: 30px
                    borderRadius: '50%',        // border-radius: 50%
                    backgroundColor: this.props.myColor, // background-color: #C6DCEE
                    fontFamily: this.props.myColor,      // font-family: fantasy
                    fontSize: 64,           // font-size: 64px
                    textAlign: "center"         // text-align: center
                };

                return (
                    <div style={myNiceNum}>
                        {this.props.children}
                    </div>
                );
            }
        }

        ReactDOM.render(
            <div>
                <MyNum myColor="#AEA" myFont="courier">1</MyNum>
                <MyNum myColor="#EEA" myFont="courier">3</MyNum>
                <MyNum myColor="#AAA" myFont="courier">4</MyNum>
                <MyNum myColor="#EEE" myFont="courier">5</MyNum>

            </div>,
            document.getElementById("myContainer")
        );
