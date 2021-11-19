import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import styled from "styled-components"

const FeaturedContainer = styled.div`
    width:100%;
    display:flex;
    justify-contentn:space-between;
`;
const FeaturedItem = styled.div`
    flex:1;
    margin:0px 20px;
    padding:30px;
    border-radius:10px;
    cursor:pointer;
    box-shadow: 0px 0px 2px 0px rgb(0 0 0 / 81%);
    -webkit-box-shadow: 0px 0px 2px 0px rgb(0 0 0 / 81%);
    -moz-box-shadow: 0px 0px 2px 0px rgb(0 0 0 / 81%);  
`;
const FeaturedTitle = styled.span`
    font-size:20px;
`;
const FeaturedMoneyContainer = styled.div`
    display:flex;
    align-items:center;
    ${'' /* justify-content:space-between; */}
    margin:10px 0px;
`;
const FeaturedMoney = styled.span`
    font-size:30px;
    font-weight:bold;
`;
const FeaturedMoneyRate = styled.span`
    display:flex;
    align-items:center;
    margin-left:20px;
`;
const FeaturedSub = styled.span`
    font-size:15px;
    color:grey; 
`;
const FeaturedInfo = () => {
    return (
        <FeaturedContainer>
            <FeaturedItem>
                <FeaturedTitle>Revenue</FeaturedTitle>
                <FeaturedMoneyContainer>
                    <FeaturedMoney>$2,415</FeaturedMoney>
                    <FeaturedMoneyRate>-11.4 %<ArrowDownward className="featuredIcon negative"/></FeaturedMoneyRate>
                </FeaturedMoneyContainer>
                <FeaturedSub>Compare to Last Month</FeaturedSub>
            </FeaturedItem>
            <FeaturedItem>
                <FeaturedTitle>Sales</FeaturedTitle>
                <FeaturedMoneyContainer>
                    <FeaturedMoney>$4,235</FeaturedMoney>
                    <FeaturedMoneyRate>+31.4 %<ArrowUpward className="featuredIcon"/></FeaturedMoneyRate>
                </FeaturedMoneyContainer>
                <FeaturedSub>Compare to Last Month</FeaturedSub>
            </FeaturedItem>
            <FeaturedItem>
                <FeaturedTitle>Cost</FeaturedTitle>
                <FeaturedMoneyContainer>
                    <FeaturedMoney>$7,435</FeaturedMoney>
                    <FeaturedMoneyRate>+41.4 %<ArrowUpward className="featuredIcon"/></FeaturedMoneyRate>
                </FeaturedMoneyContainer>
                <FeaturedSub>Compare to Last Month</FeaturedSub>
            </FeaturedItem>
        </FeaturedContainer>
    )
}

export default FeaturedInfo
