"use strict";

import { StyleSheet, css } from "./lib/aphrodite.js";
import React from "react";
import Firebase from 'firebase';

import SignupForm from "./components/signup-form.js";

const App = React.createClass({
    handleSubmit: function(state) {
        const firebaseURL = "https://math-facts-signup.firebaseio.com/";
        const firebaseRef = new Firebase(firebaseURL);
        firebaseRef.push({
            ...state,
            timestampInMilliseconds: Date.now(),
        }, (Error) => {
            console.log(Error)
            if (Error == null) {
                // success
                this.setState({
                    formErrors: false,
                    formComplete: true,
                });
            } else {
                // something went wrong :(
                this.setState({
                    formErrors: true,
                }, () => {
                    window.scrollTo(0, this.errorMessage.offsetTop - 10);
                });
            }
        });
    },
    getInitialState: function() {
        return {
            formComplete: false,
            formErrors: false,
        };
    },
    render: function() {
        const {
            formComplete,
            formErrors,
        } = this.state;

        return (<div className={css(ST.page)}>
            <div className={css(ST.content)}>
                <div className={css(ST.iconWrapper)}>
                    <img
                        className={css(ST.appIcon)}
                        src="./images/math-facts-app-icon.png"
                        alt=""
                    />
                </div>
                <h1 className={css(ST.appName)}>Math Facts</h1>
                <div className={css(ST.tagline)}>
                    A free app to help you learn addition and multiplication.
                </div>
                <div className={css(ST.divider)}></div>
                <div className={css(ST.fromKhanAcademy)}>
                    <div className={css(ST.from)}>
                        brought to you by
                    </div>
                    <img
                        className={css(ST.logo)}
                        src="./images/khan-academy-logo.png"
                        alt="Khan Academy"
                    />
                </div>
            </div>
            <div className={css(ST.splashContainer)}>
                <div className={css(ST.splash)}>
                    <div className={css(ST.splashBottomBorder)} />
                    <div className={css(ST.splashContent)}>
                        <img
                            className={css(ST.phone)}
                            src="./images/iphone-6-quizzer.png"
                            alt=""
                        />
                        <div className={css(ST.splashInfo)}>
                        </div>
                        <img
                            className={css(ST.phone)}
                            src="./images/iphone-6-progress.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className={css(ST.content, ST.formSection)}>
                <h2 className={css(ST.title)}>
                    Sign up to get an invitation
                </h2>
                <div className={css(ST.text)}>
                    This app isn't available on the app store yet because
                    it's still being built. If you'd like to get it early
                    and give us feedback on how it can be better please sign
                    up below!
                </div>
                {formComplete ?
                <div className={css(ST.message, ST.successMessage)}>
                    Thank you for applying! We'll be in contact very soon.
                </div> : <div>
                    {formErrors && <div
                        className={css(
                            ST.message,
                            ST.errorMessage
                        )}
                        ref={(ref) => this.errorMessage = ref}
                    >
                        Oops! It looks like there's a field left blank.
                        Please fill out the full form to apply!
                    </div>}
                    <SignupForm
                        handleSubmit={this.handleSubmit}
                    />
                </div>
                }
            </div>
        </div>);
    }
});

const ST = StyleSheet.create({
    srOnly: {
        position: "absolute",
        left: "-10000px",
        top: "auto",
        width: 1,
        height: 1,
        overflow: "hidden",
    },

    page: {
        color: "#555",
        height: "100%",
        fontWeight: 100,
        lineHeight: 1.5,
        textAlign: "center",
    },
    appName: {
        fontSize: 24,
        fontWeight: 100,
        marginBottom: 10,
        textAlign: "center",
    },
    tagline: {
    },
    divider: {
        borderTop: "1px solid #d6d8da",
        width: 30,
        margin: "10px auto",
    },
    fromKhanAcademy: {
        marginTop: 10,
    },
    from: {
        color: "#888d93",
        fontSize: 12,
        lineHeight: "20px",
    },
    logo: {
        height: 20,
        verticalAlign: "text-bottom",
    },
    appIcon: {
        width: 100,
        display: "block",
    },
    iconWrapper: {
        background: "#29abca",
        borderRadius: 20,
        display: "inline-block",
    },
    splashContainer: {
        position: "relative",
    },
    splash: {
        background: "url(../images/background.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
    },
    splashContent: {
        display: "inline-block",
        position: "relative",
    },
    splashBottomBorder: {
        background: "#F1F1F1",
        top: "80%",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
    },
    splashInfo: {
        color: "#fff",
        position: "absolute",
        top: 50,
        left: -200,
        width: 200,
    },
    phone: {
        marginTop: 30,
        maxWidth: "50%",
        width: 250,
    },
    content: {
        maxWidth: 600,
        margin: "0 auto",
        padding: 20,
    },
    title: {
        fontSize: 36,
        marginBottom: 10,
        textAlign: "center",
    },
    formSection: {
        paddingBottom: 100,
    },

    message: {
        border: "1px solid transparent",
        borderRadius: 5,
        fontSize: 15,
        marginTop: 20,
        padding: "10px 15px",
    },
    successMessage: {
        backgroundColor: "#fff",
        borderColor: "#d6e9c6",
        color: "#4FAD4E",
        padding: "20px 15px",
    },
    errorMessage: {
        backgroundColor: "#f2dede",
        borderColor: "#ebccd1",
        color: "#a94442",
    },
});

module.exports = App;
