import { Visibility } from "@material-ui/icons";
import styled from "styled-components"


const WidgetSmallContainer = styled.div`
    flex:1;
    box-shadow: 0px 0px 2px 0px rgb(0 0 0 / 81%);
    -webkit-box-shadow: 0px 0px 2px 0px rgb(0 0 0 / 81%);
    -moz-box-shadow: 0px 0px 2px 0px rgb(0 0 0 / 81%);  
    padding:20px;
    margin-right:20px;
`;

const WidgetSmallTitle = styled.span`
    font-size:22px;
    font-weight:bold;
`;
const WidgetSmallList = styled.ul`
    list-style:none;
    margin:0;
    padding:0;
`;
const WidgetSmallListItem = styled.li`
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin:20px 0px;

`;

const WidgetSmallImage = styled.img`
    width:40px;
    height:40px;
    object-fit:cover;
    border-radius:50%;
`;
const WidgetSmallUser = styled.div`
    display:flex;
    flex-direction:column;
`;
const WidgetSmallUserName = styled.span`
    font-weight:600;
`;
const WidgetSmallUserJobTitle = styled.span`
    font-wight:300;
    color:grey;
`;
const WidgetSmallButton = styled.button`
    display:flex;
    align-items:center;
    border:none;
    border-radius:10px;
    padding:7px 10px;
    background-color:#eeeef7;
    color:#555;    
    cursor:pointer; 
`;

const WidgetSmall = () => {
    return (
        <WidgetSmallContainer>
            <WidgetSmallTitle>New Join Members</WidgetSmallTitle>
            <WidgetSmallList>
                <WidgetSmallListItem>
                    <WidgetSmallImage src="https://gravatar.com/avatar/b8f3e850e762f8364b9bc68d81c866cf?s=400&d=robohash&r=x" alt="user-image"/>
                    <WidgetSmallUser>
                        <WidgetSmallUserName>Jhon doe</WidgetSmallUserName>
                        <WidgetSmallUserJobTitle>Software engineer</WidgetSmallUserJobTitle>
                    </WidgetSmallUser>
                    <WidgetSmallButton>                        
                        <Visibility className="widgetIcon"/>
                        Display
                    </WidgetSmallButton>
                </WidgetSmallListItem>
                <WidgetSmallListItem>
                    <WidgetSmallImage src="https://gravatar.com/avatar/b8f3e850e762f8364b9bc68d81c866cf?s=400&d=robohash&r=x" alt="user-image"/>
                    <WidgetSmallUser>
                        <WidgetSmallUserName>Jhon doe</WidgetSmallUserName>
                        <WidgetSmallUserJobTitle>Software engineer</WidgetSmallUserJobTitle>
                    </WidgetSmallUser>
                    <WidgetSmallButton>                        
                        <Visibility className="widgetIcon"/>
                        Display
                    </WidgetSmallButton>
                </WidgetSmallListItem>
                <WidgetSmallListItem>
                    <WidgetSmallImage src="https://gravatar.com/avatar/b8f3e850e762f8364b9bc68d81c866cf?s=400&d=robohash&r=x" alt="user-image"/>
                    <WidgetSmallUser>
                        <WidgetSmallUserName>Jhon doe</WidgetSmallUserName>
                        <WidgetSmallUserJobTitle>Software engineer</WidgetSmallUserJobTitle>
                    </WidgetSmallUser>
                    <WidgetSmallButton>                        
                        <Visibility className="widgetIcon"/>
                        Display
                    </WidgetSmallButton>
                </WidgetSmallListItem>
                <WidgetSmallListItem>
                    <WidgetSmallImage src="https://gravatar.com/avatar/b8f3e850e762f8364b9bc68d81c866cf?s=400&d=robohash&r=x" alt="user-image"/>
                    <WidgetSmallUser>
                        <WidgetSmallUserName>Jhon doe</WidgetSmallUserName>
                        <WidgetSmallUserJobTitle>Software engineer</WidgetSmallUserJobTitle>
                    </WidgetSmallUser>
                    <WidgetSmallButton>                        
                        <Visibility className="widgetIcon"/>
                        Display
                    </WidgetSmallButton>
                </WidgetSmallListItem>
                <WidgetSmallListItem>
                    <WidgetSmallImage src="https://gravatar.com/avatar/b8f3e850e762f8364b9bc68d81c866cf?s=400&d=robohash&r=x" alt="user-image"/>
                    <WidgetSmallUser>
                        <WidgetSmallUserName>Jhon doe</WidgetSmallUserName>
                        <WidgetSmallUserJobTitle>Software engineer</WidgetSmallUserJobTitle>
                    </WidgetSmallUser>
                    <WidgetSmallButton>                        
                        <Visibility className="widgetIcon"/>
                        Display
                    </WidgetSmallButton>
                </WidgetSmallListItem>
            </WidgetSmallList>
        </WidgetSmallContainer>
    )
}

export default WidgetSmall
