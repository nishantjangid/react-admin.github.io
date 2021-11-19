import { NotificationsNoneOutlined,LanguageOutlined,SettingsOutlined } from "@material-ui/icons";
import styled from "styled-components"

const TopBar = styled.div`
    width:100%;
    height:50px;
    background-color:#ffffff;
    position:sticky;
    top:0;
    z-index:999;
`;
const TopbarWrapper = styled.div`
    height:100%;
    padding:0px 20px;
    display:flex;
    align-items:center;
    justify-content:space-between;
`;

const TopLeft = styled.div``;
const Logo = styled.span`
    font-weight:bold;
    font-size:30px;
    color:darkblue;
    cursor:pointer;
`;



const TopRight = styled.div`
    display:flex;
    align-items:center;
    justify-content:center; 
`;
const TopbarIconsContainer = styled.div`
    position:relative;
    cursor:pointer;
    margin-right:10px;
`;
const TopIconBadge = styled.span`
    position:absolute;
    top:-5px;
    right:0px;
    background-color:red;
    color:#ffffff;
    border-radius:50%;
    width:15px;
    height:15px;
    display:flex;
    align-items:center;
    justify-content:center;
    padding:1px;
    font-size:10px;
`;

const TopAvatar = styled.img`
    width:30px;
    height:30px;
    border-radius:50%;
    cursor:pointer;
    object-fit:cover;
`;

const Topbar = () => {
    return (
        <TopBar>
            <TopbarWrapper>
                <TopLeft>
                    <Logo>ADMIN</Logo>
                </TopLeft>
                <TopRight>
                    <TopbarIconsContainer>
                        <NotificationsNoneOutlined />
                        <TopIconBadge>2</TopIconBadge>
                    </TopbarIconsContainer>
                    <TopbarIconsContainer>
                        <LanguageOutlined />
                        <TopIconBadge>2</TopIconBadge>
                    </TopbarIconsContainer>
                    <TopbarIconsContainer>
                        <SettingsOutlined />                        
                    </TopbarIconsContainer>    
                    <TopAvatar src="https://cdn.pixabay.com/photo/2016/04/01/10/11/avatar-1299805_960_720.png" alt="avatar"/>
                </TopRight>
            </TopbarWrapper>
        </TopBar>
    )
}

export default Topbar
