import {
    createStackNavigator, // 基础导航
    createMaterialTopTabNavigator, // 顶部导航
    createBottomTabNavigator, // 底部导航
    createSwitchNavigator, // 用于欢迎页跳转到首页，然后不在跳到欢迎页
    createAppContainer
} from 'react-navigation'

import WelcomePage from '../page/WelcomePage'
import HomePage from '../page/HomePage'
import DetailPage from '../page/DetailPage'

/**
 * 欢迎页导航器
 * @type {NavigationContainer}
 */
const InitNavigator = createStackNavigator({
    WelcomePage: {
        screen: WelcomePage,
        navigationOptions: {
            header: null, // 可以通过将header设为null，来禁用StackNavigator的Navigation Bar
        }
    }
});

/**
 * 主界面导航器
 * @type {NavigationContainer}
 */
const MainNavigator = createStackNavigator({
    HomePage: {
        screen: HomePage,
        navigationOptions: {
            header: null, // 可以通过将header设为null，来禁用StackNavigator的Navigation Bar
        }
    },
    DetailPage: {
        screen: DetailPage,
        /*navigationOptions: {
            header: null, // 可以通过将header设为null，来禁用StackNavigator的Navigation Bar
        }*/
    }
});

/**
 * 用来连接InitNavigator和MainNavigator,第一个参数是配置路由，第二个参数是相关路由的一些配置
 */
const App = createSwitchNavigator({
    Init: InitNavigator,
    Main: MainNavigator,
}, {
    navigationOptions: {
        header: null, // 可以通过将header设为null，来禁用StackNavigator的Navigation Bar
    }
})

/**
 * 在v2及更早版本中，React Navigation中的容器由create * Navigator函数自动提供。从v3开始，需要直接使用容器。在v3中，createNavigationContainer重命名为createAppContainer
 */
export default createAppContainer(App)
