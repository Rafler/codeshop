import {createStackNavigator} from "react-navigation-stack";
import {BarcodeScannerExample} from "../pages/ScanPage/Scan";
import Item from "../pages/ItemPage/Item";

const HomeStack = createStackNavigator({
    Home: { screen: BarcodeScannerExample },
    Item: {screen: Item},
});

export default HomeStack;
