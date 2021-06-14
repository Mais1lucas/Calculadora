import { StatusBar } from "expo-status-bar";

import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

class Botao extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        let c = 1;
        {
            if (props.c) {
                c = parseInt(this.props.c);
            }
        }

        let bg = "#e0e0e0";
        let txtcolor = "#000";
        if (props.bg) {
            bg = props.bg;
        }
        if (props.color) {
            txtcolor = props.color;
        }

        this.styles = StyleSheet.create({
            area: {
                flex: c,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1,
                borderColor: "#999999",
                backgroundColor: bg,
            },
            text: {
                fontSize: 25,
                color: txtcolor,
            },
        });
    }
    render() {
        return (
            <TouchableOpacity
                style={this.styles.area}
                onPress={this.props.onPress}
            >
                <Text style={this.styles.text}>{this.props.n}</Text>
            </TouchableOpacity>
        );
    }
}

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { r: "0" };
        this.btn = this.btn.bind(this);
    }

    btn(b) {
        let s = this.state;
        if (b == "C") {
            s.r = "0";
        } else if (b == "=") {
            s.r = eval(s.r);
        } else {
            if (s.r == "0" && b != ".") {
                s.r = b;
            } else {
                s.r += b;
            }
        }
        this.setState(s);
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.linha}>
                    <Text style={styles.res}>{this.state.r}</Text>
                </View>
                <View style={styles.linha}>
                    <Botao
                        c="3"
                        n="C"
                        bg="#bedbed"
                        onPress={() => {
                            this.btn("C");
                        }}
                    />
                    <Botao
                        n="/"
                        bg="#87c8f0"
                        color="#fff"
                        onPress={() => {
                            this.btn("/");
                        }}
                    />
                </View>
                <View style={styles.linha}>
                    <Botao
                        n="7"
                        onPress={() => {
                            this.btn("7");
                        }}
                    />
                    <Botao
                        n="8"
                        onPress={() => {
                            this.btn("8");
                        }}
                    />
                    <Botao
                        n="9"
                        onPress={() => {
                            this.btn("9");
                        }}
                    />
                    <Botao
                        n="*"
                        bg="#87c8f0"
                        color="#fff"
                        onPress={() => {
                            this.btn("*");
                        }}
                    />
                </View>
                <View style={styles.linha}>
                    <Botao
                        n="4"
                        onPress={() => {
                            this.btn("4");
                        }}
                    />
                    <Botao
                        n="5"
                        onPress={() => {
                            this.btn("5");
                        }}
                    />
                    <Botao
                        n="6"
                        onPress={() => {
                            this.btn("6");
                        }}
                    />
                    <Botao
                        n="-"
                        bg="#87c8f0"
                        color="#fff"
                        onPress={() => {
                            this.btn("-");
                        }}
                    />
                </View>
                <View style={styles.linha}>
                    <Botao
                        n="1"
                        onPress={() => {
                            this.btn("1");
                        }}
                    />
                    <Botao
                        n="2"
                        onPress={() => {
                            this.btn("2");
                        }}
                    />
                    <Botao
                        n="3"
                        onPress={() => {
                            this.btn("3");
                        }}
                    />
                    <Botao
                        n="+"
                        bg="#87c8f0"
                        color="#fff"
                        onPress={() => {
                            this.btn("+");
                        }}
                    />
                </View>
                <View style={styles.linha}>
                    <Botao
                        c="2"
                        n="0"
                        onPress={() => {
                            this.btn("0");
                        }}
                    />
                    <Botao
                        n="."
                        onPress={() => {
                            this.btn(".");
                        }}
                    />
                    <Botao
                        n="="
                        bg="#87c8f0"
                        color="#fff"
                        onPress={() => {
                            this.btn("=");
                        }}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flex: 1,
    },
    linha: {
        flex: 1,
        flexDirection: "row",
    },
    res: {
        backgroundColor: "#222222",
        color: "#FFFFFF",
        fontSize: 50,
        flex: 1,
        textAlign: "right",
    },
});
