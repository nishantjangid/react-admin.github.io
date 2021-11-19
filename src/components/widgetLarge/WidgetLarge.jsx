import styled from "styled-components"


const WidgetLargeContainer = styled.div`
    flex:2;
    box-shadow: 0px 0px 2px 0px rgb(0 0 0 / 81%);
    -webkit-box-shadow: 0px 0px 2px 0px rgb(0 0 0 / 81%);
    -moz-box-shadow: 0px 0px 2px 0px rgb(0 0 0 / 81%);  
    padding:20px;    
`;

const WidgetLargeTitle = styled.span`
    font-size:22px;
    font-weight:bold;
`;

const WidgetLargeTable = styled.table`
    width:100%;
    border-spacing:20px;

`;
const WidgetLargeTr = styled.tr``;
const WidgetLargeTh = styled.th`
    text-align:left;
`;
const WidgetLargeTd = styled.td`

    &.WidgetLargeUser{
        display:flex;
        align-items:center;
        font-weight:600;
    }
    &.WidgetLargeAmount,&.WidgetLargeDate{
        font-weight:300;
    }
`;

const WidgetLargeImage = styled.img`
    width:40px;
    height:40px;
    object-fit:cover;
    border-radius:50%;
    margin-right:10px;
`;
const WidgetLargeName = styled.span``;
const WidgetLargeButton = styled.button`

    border-radius:10px;
    border:none;
    padding:5px 7px;

    &.Declined{
        background-color:#fff0f1;
        color:#d95087;
    }

    &.Approved{
        background-color:#e5faf2;
        color:#3bb077;
    }
    &.Pending{
        background-color:#ebf1fe;
        color:#2a7ade;
    }
`;

const WidgetLarge = () => {
    const Button = ({type}) => {
        return <WidgetLargeButton className={type} >{type}</WidgetLargeButton>
    }
    return (
        <WidgetLargeContainer>
            <WidgetLargeTitle>Latest Transactions</WidgetLargeTitle>
            <WidgetLargeTable>
                <WidgetLargeTr>
                    <WidgetLargeTh>Customer</WidgetLargeTh>
                    <WidgetLargeTh>Date</WidgetLargeTh>
                    <WidgetLargeTh>Amount</WidgetLargeTh>
                    <WidgetLargeTh>Status</WidgetLargeTh>
                </WidgetLargeTr>
                <WidgetLargeTr>
                    <WidgetLargeTd className="WidgetLargeUser">
                        <WidgetLargeImage src="https://avatars.dicebear.com/v2/avataaars/19f77e7573696f88e6a215cfc3282332.svg" />
                        <WidgetLargeName>Susan Carol</WidgetLargeName>
                    </WidgetLargeTd>
                    <WidgetLargeTd className="WidgetLargeDate">
                        2 jun 2021
                    </WidgetLargeTd>
                    <WidgetLargeTd className="WidgetLargeAmount">
                        $1231.231
                    </WidgetLargeTd>
                    <WidgetLargeTd className="WidgetLargeStatus">
                        <Button type="Approved"/>
                    </WidgetLargeTd>

                </WidgetLargeTr>
                <WidgetLargeTr>
                    <WidgetLargeTd className="WidgetLargeUser">
                        <WidgetLargeImage src="https://gravatar.com/avatar/b8f3e850e762f8364b9bc68d81c866cf?s=400&d=robohash&r=x" />
                        <WidgetLargeName>Susan Carol</WidgetLargeName>
                    </WidgetLargeTd>
                    <WidgetLargeTd className="WidgetLargeDate">
                        2 jun 2021
                    </WidgetLargeTd>
                    <WidgetLargeTd className="WidgetLargeAmount">
                        $1231.231
                    </WidgetLargeTd>
                    <WidgetLargeTd className="WidgetLargeStatus">
                        <Button type="Declined"/>
                    </WidgetLargeTd>

                </WidgetLargeTr>
                <WidgetLargeTr>
                    <WidgetLargeTd className="WidgetLargeUser">
                        <WidgetLargeImage src="https://avatars.dicebear.com/v2/avataaars/19f77e7573696f88e6a215cfc3282332.svg" />
                        <WidgetLargeName>Susan Carol</WidgetLargeName>
                    </WidgetLargeTd>
                    <WidgetLargeTd className="WidgetLargeDate">
                        2 jun 2021
                    </WidgetLargeTd>
                    <WidgetLargeTd className="WidgetLargeAmount">
                        $1231.231
                    </WidgetLargeTd>
                    <WidgetLargeTd className="WidgetLargeStatus">
                        <Button type="Pending"/>
                    </WidgetLargeTd>

                </WidgetLargeTr>
                <WidgetLargeTr>
                    <WidgetLargeTd className="WidgetLargeUser">
                        <WidgetLargeImage src="https://gravatar.com/avatar/b8f3e850e762f8364b9bc68d81c866cf?s=400&d=robohash&r=x" />
                        <WidgetLargeName>Susan Carol</WidgetLargeName>
                    </WidgetLargeTd>
                    <WidgetLargeTd className="WidgetLargeDate">
                        2 jun 2021
                    </WidgetLargeTd>
                    <WidgetLargeTd className="WidgetLargeAmount">
                        $1231.231
                    </WidgetLargeTd>
                    <WidgetLargeTd className="WidgetLargeStatus">
                        <Button type="Declined"/>
                    </WidgetLargeTd>

                </WidgetLargeTr>
            </WidgetLargeTable>

        </WidgetLargeContainer>
    )
}

export default WidgetLarge
