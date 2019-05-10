import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import NavigationUtil from '../navigator/NavigationUtil'


type Props = {};
export default class WelcomePage extends Component<Props> {
    componentDidMount() {
        // 定时器，在欢迎页面停留2秒，然后跳转到首页
        this.timer = setTimeout(() => {
            NavigationUtil.resetToHomePage({
                navigation: this.props.navigation
            })
        }, 200);
    }

    componentWillUnmount() {
        // 定时器的存在，会导致页面泄露，所以在组件关闭时需要取消定时器
        this.timer && clearTimeout(this.timer);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>WelcomePage</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});
