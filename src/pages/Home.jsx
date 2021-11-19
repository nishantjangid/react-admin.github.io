import styled from "styled-components";
import Chart from "../components/chart/Chart";
import FeaturedInfo from "../components/featuredInfo/FeaturedInfo";
import { ChartData } from "../chartData";
import WidgetSmall from "../components/widgetSmall/WidgetSmall";
import WidgetLarge from "../components/widgetLarge/WidgetLarge";
const HomeContianer = styled.div``;
const HomeWidgets = styled.div`
    display:flex;
    margin:20px;
`;
const Home = () => {
    return (
        <HomeContianer>
            <FeaturedInfo/>
            <Chart data={ChartData} title={"User Analitics"} dataKey={"ActiveUser"} grid={true}/>
            <HomeWidgets>
                <WidgetSmall />
                <WidgetLarge />
            </HomeWidgets>
        </HomeContianer>
    )
}

export default Home
