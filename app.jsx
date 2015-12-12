const { StyleSheet, css } = require("./lib/aphrodite.js");
const React = require("react");

const App = React.createClass({

    render: function() {

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
            <div className={css(ST.content)}>
                <h2 className={css(ST.title)}>
                    Sign up to get an invitation
                </h2>
                <div className={css(ST.text)}>
                    This app isn't available on the app store yet because
                    it's still being built. If you'd like to get it early
                    and give us feedback on how it can be better please sign
                    up below!
                </div>
                <form className={css(ST.form)}>
                    <div className={css(ST.formRow)}>
                        <label className={css(ST.srOnly)} htmlFor="your-name">
                            Name
                        </label>
                        <input
                            id="your-name"
                            className={css(ST.input)}
                            type="text"
                            placeholder="Your name"
                        />
                        <label className={css(ST.srOnly)} htmlFor="your-email">
                            Name
                        </label>
                        <input
                            id="your-email"
                            className={css(ST.input)}
                            type="text"
                            placeholder="Your email"
                        />
                    </div>
                    <div className={css(ST.formRow)}>
                        <label className={css(ST.srOnly)} htmlFor="phone-type">
                            What type of phone do you have?
                        </label>
                        <input
                            id="phone-type"
                            className={css(ST.input, ST.inputLarge)}
                            type="text"
                            placeholder={"What type of phone do you have? " +
                                "(iPhone 5s, Nexus 5, etc)"}
                        />
                    </div>
                    <div className={css(ST.formTitleRow)}>
                        Who will use this app?
                        // TODO: checkbox for "do you want to give feedback?"
                    </div>
                    <div className={css(ST.formRow)}>
                        <label
                            className={css(ST.srOnly)}
                            htmlFor={`name-${1}`}
                        >
                            Name
                        </label>
                        <input
                            id={`name-${1}`}
                            className={css(ST.input)}
                            type="text"
                            placeholder="Name"
                        />
                        <label
                            className={css(ST.srOnly)}
                            htmlFor={`name-${1}`}
                        >
                            Age
                        </label>
                        <input
                            id={`age-${1}`}
                            className={css(ST.input)}
                            type="text"
                            placeholder="Age"
                        />
                    </div>
                    <div className={css(ST.formRow)}>
                        <button
                            className={css(ST.button)}
                        >
                            + Add another person
                        </button>
                    </div>
                    <div className={css(ST.formRow)}>
                        <input
                            className={css(ST.button)}
                            type="submit"
                            value="Request Invitation"
                        />
                    </div>
                </form>
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
    form: {
        marginTop: 30,
        marginBottom: 100,
    },
    formRow: {
        margin: "10px 0",
    },
    formTitleRow: {
        fontSize: 22,
        margin: "20px 0 10px",
    },
    input: {
        fontFamily: "inherit",
        fontSize: "inherit",
        fontWeight: "inherit",
        margin: "0 3px",
        maxWidth: 200,
        padding: 10,
        width: "100%",
    },
    inputLarge: {
        maxWidth: 400 + 6,
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
});

module.exports = App;
