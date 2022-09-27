import React from 'react';

export function Overlay(props) {

    return (
        <div style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
        }}
        >
            <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                onClick={props.onClickInner}>
                    {props.children}
                    <div style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                    }} onClick={props.onClickOuter}>&nbsp;</div>
                </div>
        </div>
    )
}










