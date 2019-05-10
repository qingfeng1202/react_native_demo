/**
 * 全局导航跳转工具类
 */
export default class NavigationUtil {

    /**
     * 跳转到指定页面
     * @param params 要传递的参数
     * @param page 要跳转的页面
     */
    static goPage(params, page) {
        // 因为HomePage页面下的PopularPage、TrendingPage、FavoritePage、MyPage与DetailPage不是处在同一导航器下，属于多级嵌套，所以navigation需要在HomePage那存储进来
        const navigation = NavigationUtil.navigation;
        if (!navigation) {
            console.log('NavigationUtil.navigation can not be null')
        }
        navigation.navigate(page, {
            ...params
        });
    }

    /**
     * 返回上一页
     * @param params
     */
    static goBack(navigation) {
        navigation.goBack();
    }

    /**
     * 重置到首页
     * @param params
     */
    static resetToHomePage(params) {
        const {navigation} = params;
        navigation.navigate("Main");
    }
}