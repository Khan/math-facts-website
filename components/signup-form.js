"use strict";

import { StyleSheet, css }  from "../lib/aphrodite.js";
import React from "react";

const SignupForm = React.createClass({
    propTypes: {
        handleSubmit: React.PropTypes.func.isRequired,
    },
    getInitialState: function() {
        return {
            name: "",
            email: "",
            device: "",
            participation: "",
        };
    },
    handleSubmit: function(e) {
        e.preventDefault();
        this.props.handleSubmit(this.state);
    },
    render: function() {
        const {
            name,
            email,
            device,
            participation,
        } = this.state;

        return <form
            className={css(ST.form)}
            onSubmit={this.handleSubmit}
        >
            <div className={css(ST.formRow)}>
                <label className={css(ST.srOnly)} htmlFor="your-name">
                    Parent Name
                </label>
                <input
                    id="your-name"
                    className={css(ST.input)}
                    type="text"
                    placeholder="Parent Name"
                    value={name}
                    onChange={(event) => {
                        this.setState({
                            name: event.target.value,
                        });
                    }}
                />
                <label className={css(ST.srOnly)} htmlFor="your-email">
                    Parent Email
                </label>
                <input
                    id="your-email"
                    className={css(ST.input)}
                    type="text"
                    placeholder="Parent Email"
                    value={email}
                    onChange={(event) => {
                        this.setState({
                            email: event.target.value,
                        });
                    }}
                />
            </div>
            <div className={css(ST.formRow)}>
                <label className={css(ST.srOnly)} htmlFor="phone-type">
                    What type of iPhone or iPad do you have?
                </label>
                <input
                    id="phone-type"
                    className={css(ST.input, ST.inputLarge)}
                    type="text"
                    placeholder={"What type of iPhone or iPad do you have?"}
                    value={device}
                    onChange={(event) => {
                        this.setState({
                            device: event.target.value,
                        });
                    }}
                />
                <div className={css(ST.helpText)}>
                    <div>
                        This app only works on iPhones and iPads right now.
                    </div>
                    <div>
                        If you don't have an iPad or iPhone let us know what
                        devices you do have and we'll let you know when
                        your device is supported!
                    </div>
                </div>
            </div>
            <div className={css(ST.formTitleRow)}>
                Would you like to give feedback about the app?
            </div>
            <div className={css(ST.formRow)}>
                <fieldset>
                    <legend className={css(ST.srOnly)}>
                        Would you like to give feedback?
                    </legend>
                    <label className={css(ST.radioLabel)}>
                        <input
                            type="radio"
                            name="participation"
                            value="yes"
                            className={css(ST.radio)}
                            checked={participation === "yes"}
                            onChange={(event) => {
                                this.setState({
                                    participation: "yes",
                                });
                            }}
                        />
                        <div className={css(ST.radioText)}>
                            Yes, I would like to provide feedback about the
                            app by answering emails and surveys.
                        </div>
                    </label>
                    <label className={css(ST.radioLabel)}>
                        <input
                            type="radio"
                            name="participation"
                            value="no"
                            className={css(ST.radio)}
                            checked={participation === "no"}
                            onChange={(event) => {
                                this.setState({
                                    participation: "no",
                                });
                            }}
                        />
                        <div className={css(ST.radioText)}>
                            No, I don't want to give feedback but would
                            like to be notified when the app is released.
                        </div>
                    </label>
                </fieldset>
            </div>
            <div className={css(ST.formRow)}>
                <input
                    className={css(ST.button, ST.submitButton)}
                    type="submit"
                    value="Request Invitation"
                />
            </div>
        </form>;
    },
});


const smallSize = "500px";
const ST = StyleSheet.create({
    srOnly: {
        position: "absolute",
        left: "-10000px",
        top: "auto",
        width: 1,
        height: 1,
        overflow: "hidden",
    },
    form: {
        marginTop: 30,
    },
    formRow: {
        margin: "10px 0",
        position: "relative",
    },
    formTitleRow: {
        fontSize: 22,
        margin: "20px 0 10px",
    },
    input: {
        border: "1px solid #ddd",
        fontFamily: "inherit",
        fontSize: "inherit",
        fontWeight: "inherit",
        margin: "0 3px",
        maxWidth: 200,
        padding: 10,
        width: "100%",
        ":focus": {
            border: "1px solid #56B5F8",
            outline: "none",
        },
        [`@media (max-width: ${smallSize})`]: {
            maxWidth: "100%",
        },
    },
    inputLarge: {
        maxWidth: 400 + 6,
    },
    helpText: {
        fontSize: 12,
        margin: "5px auto",
        maxWidth: 400 + 6,
    },
    radioLabel: {
        display: "block",
        textAlign: "left",
        marginBottom: 10,
    },
    radio: {
        float: "left",
        marginTop: 5,
    },
    radioText: {
        fontSize: 14,
        marginLeft: 20,
    },
    button: {
        background: "transparent",
        border: "1px solid #4FAD4E",
        borderRadius: 50,
        color: "#4FAD4E",
        cursor: "pointer",
        fontFamily: "inherit",
        fontSize: 18,
        fontWeight: "inherit",
        padding: "7px 25px",
        transition: "all 0.1s",
        ":hover": {
            background: "#4FAD4E",
            color: "#fff",
            outline: "none",
        },
        ":focus": {
            background: "#4FAD4E",
            color: "#fff",
            outline: "none",
        },

    },
    smallButton: {
        fontSize: 12,
    },
    submitButton: {
        background: "#4FAD4E",
        border: "1px solid #4FAD4E",
        borderRadius: 50,
        color: "#fff",
        marginTop: 10,
        ":hover": {
            background: "#349048",
            borderColor: "#349048",
            outline: "none",
        },
        ":focus": {
            background: "#349048",
            borderColor: "#349048",
            outline: "none",
        },
    },
    removeRow: {
        background: "transparent",
        border: "none",
        borderRadius: "100%",
        color: "#4FAD4E",
        cursor: "pointer",
        fontSize: 24,
        marginRight: -30,
        textAlign: "center",
        transition: "all 0.1s",
        width: 30,
        ":hover": {
            color: "#333",
        },
        ":focus": {
            color: "#333",
            outline: "none",
        },
        [`@media (max-width: ${smallSize})`]: {
            background: "rgba(0, 0, 0, 0.05)",
            borderRadius: "0 0 5px 5px",
            lineHeight: 1,
            margin: "0 3px",
            paddingBottom: 5,
            width: "100%",
            ":hover": {
                background: "rgba(0, 0, 0, 0.1)",
            },
            ":focus": {
                background: "rgba(0, 0, 0, 0.1)",
            },
        },
    },
});

module.exports = SignupForm;