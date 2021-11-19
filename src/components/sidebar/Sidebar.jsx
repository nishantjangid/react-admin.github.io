import { LineStyle,Timeline,TrendingUp,PermIdentity,Storefront, AttachMoney, Equalizer, MailOutline, DynamicFeed, MessageOutlined, WorkOutline, ReportOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const SidebarContainer = styled.div`
    flex:1;
    height:calc(100vh - 50px);
    background-color:rgb(251,251,255);
    position:sticky;
    top:50px;
    right:0px;
    overflow-y:scroll;
`;

const SidebarWrapper = styled.div`
    padding:20px;
    color:#555;
`;

const SidebarMenu = styled.div`
    margin-bottom:10px;
`;
const SidebarTitle = styled.h3`
    font-size:15px;
    color:rgb(187,186,186);
`;
const SidebarList = styled.ul`
    list-style:none;
    padding:5px;
`;
const SidebarListItem = styled.li`
    padding:5px;
    cursor:pointer;
    display:flex;
    align-item:center;
    border-radius:10px;
    width:100%;
    &:hover {
        background-color:rgb(240, 240, 255);
    }

    &.active {
        background-color:rgb(240, 240, 255);
    }

   
`;
const Sidebar = () => {

    return (
        <SidebarContainer>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarTitle>Dashboard</SidebarTitle>
                    <SidebarList>
                        <Link   to="/">
                        <SidebarListItem className="active">
                                <LineStyle className="dashboardIcon"/>
                                Home
                        </SidebarListItem>
                        </Link>
                        <SidebarListItem>
                            <Timeline className="dashboardIcon"/>
                            Analytics
                        </SidebarListItem>
                        <SidebarListItem>
                            <TrendingUp className="dashboardIcon"/>
                            Sales
                        </SidebarListItem>
                    </SidebarList>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarTitle>Quick Menu</SidebarTitle>
                    <SidebarList>
                        <Link   to="/users">
                        <SidebarListItem>
                                <PermIdentity className="dashboardIcon"/>
                                User
                        </SidebarListItem>
                        </Link>
                        <Link   to="/products">
                        <SidebarListItem>
                            <Storefront className="dashboardIcon"/>
                            Products
                        </SidebarListItem>
                        </Link>
                        <SidebarListItem>
                            <AttachMoney className="dashboardIcon"/>
                            Transactions
                        </SidebarListItem>
                        <SidebarListItem>
                            <Equalizer className="dashboardIcon"/>
                            Reports
                        </SidebarListItem>                        
                    </SidebarList>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarTitle>Notifications</SidebarTitle>
                    <SidebarList>
                        <SidebarListItem>
                            <MailOutline className="dashboardIcon"/>
                            Mail
                        </SidebarListItem>
                        <SidebarListItem>
                            <DynamicFeed className="dashboardIcon"/>
                            Feeback
                        </SidebarListItem>
                        <SidebarListItem>
                            <MessageOutlined className="dashboardIcon"/>
                            Message
                        </SidebarListItem>
                    </SidebarList>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarTitle>Staff</SidebarTitle>
                    <SidebarList>
                        <SidebarListItem>
                            <WorkOutline className="dashboardIcon"/>
                            Manage
                        </SidebarListItem>
                        <SidebarListItem>
                            <Timeline className="dashboardIcon"/>
                            Analytics
                        </SidebarListItem>
                        <SidebarListItem>
                            <ReportOutlined className="dashboardIcon"/>
                            Reports
                        </SidebarListItem>
                    </SidebarList>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}
export default Sidebar
