import { PermIdentity,Today,PhoneAndroid, MailOutline, LocationOnOutlined, Publish } from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components"
import "./user.css";
const UserContainer = styled.div`
    flex:4;
    padding:20px;
`;

const UserTitleContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
`;
const UserTitle = styled.h1``;
const UserAddBtn = styled.button`
    width:80px;
    border:none;
    padding:5px;
    background-color:teal;
    color:#fff;
    cursor:pointer;
    font-size:16px;

`;

const UserCointainer = styled.div`
    display:flex;
    margin-top:20px;
`;
const UserShow = styled.div`
    flex:1;
    padding:20px;
    box-shadow: 2px 0px 10px -2px rgba(0,0,0,0.75) inset;
-webkit-box-shadow: 2px 0px 10px -2px rgba(0,0,0,0.75) inset;
-moz-box-shadow: 2px 0px 10px -2px rgba(0,0,0,0.75) inset;
       
`;

const UserShowTop = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
`;
const UserShowTopTitle = styled.div`
    display:flex;
    flex-direction:column;
    margin-left:10px;
`;
const UserShowUsername = styled.span`
    font-weight:600;    
`;
const UserShowUserTitle = styled.span`
    font-weight:300;
`;

const UserShowImage = styled.img`
    width:40px;
    height:40px;
    border-radius:50%;
    object-fit:cover;
`;

const UserShowB0ttom = styled.div`
    margin-top:20px;
`;
const UserShowTitle = styled.span`
    font-size:14px;
    font-weight:600;
    color:rgb(175, 170, 170);
`;

const UserShowInfo = styled.div`
    display:flex;
    align-items:center;
    margin:20px 0px;
    color:#444;

`;
const UserShowInfoTitle = styled.span`
    margin-left:10px;
`;



const UserUpdate = styled.div`
    flex:2;
    padding:20px;
    box-shadow: 0px 0px 2px 0px rgb(0 0 0 / 81%);
    -webkit-box-shadow: 0px 0px 2px 0px rgb(0 0 0 / 81%);
    -moz-box-shadow: 0px 0px 2px 0px rgb(0 0 0 / 81%);  
    margin-left:20px;
`;

const UserUpdateTitle = styled.span`
    font-size:24px;
    font-weight:600;
`;
const UserUpdateForm = styled.form`
    display:flex;
    justify-content:space-between;
    margin-top:20px;
`;

let Label = styled.label`
    
`;
const UserUpdateLeft = styled.div`

    & ${Label}{
        font-size:14px;
        margin-bottom:5px;
    }
`;
const UserUpdateItem = styled.div`
    display:flex;
    flex-direction:column;
    margin-top:10px;

`;

const Input = styled.input`
    border:none;
    width:250px;
    height:30px;
    border-bottom:1px solid grey;
`;


const UserUpdateRight = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;  
`;
const UserUpdateUpload = styled.div`
    display:flex;
    align-items:center;
`;
const UserUpdateImage = styled.img`
    width:100px;
    height:100px;
    border-radius:10px;
    object-fit:cover;
`;
const UserUpdateButton = styled.button`
    border:none;
    border-radius:5px;
    padding:5px;
    cursor:pointer;
    background-color:darkblue;
    color:white;
    font-weight:bold;
`;

const User = () => {
    return (
        <UserContainer>
            <UserTitleContainer>
                <UserTitle>Edit User</UserTitle>
                <Link to="/newUser">
                <UserAddBtn>Create</UserAddBtn>
                </Link>
            </UserTitleContainer>
            <UserCointainer>
                <UserShow>
                    <UserShowTop>
                        <UserShowImage src="https://gravatar.com/avatar/b8f3e850e762f8364b9bc68d81c866cf?s=400&d=robohash&r=x" alt=""/>
                        <UserShowTopTitle>
                            <UserShowUsername>Anna Bakka</UserShowUsername>
                            <UserShowUserTitle>Web Developer</UserShowUserTitle>
                        </UserShowTopTitle>
                    </UserShowTop>
                    <UserShowB0ttom>
                        <UserShowTitle>Account Details</UserShowTitle>
                        <UserShowInfo>
                            <PermIdentity className="userShowIcon"/>
                            <UserShowInfoTitle>annaBack99</UserShowInfoTitle>
                        </UserShowInfo>
                        <UserShowInfo>
                            <Today className="userShowIcon"/>
                            <UserShowInfoTitle>16/04/1998</UserShowInfoTitle>
                        </UserShowInfo>
                        <UserShowTitle>Contact Details</UserShowTitle>
                        <UserShowInfo>
                            <PhoneAndroid className="userShowIcon"/>
                            <UserShowInfoTitle>+123 99 99 99 99</UserShowInfoTitle>
                        </UserShowInfo>
                        <UserShowInfo>
                            <MailOutline className="userShowIcon"/>
                            <UserShowInfoTitle>annabella@gmail.com</UserShowInfoTitle>
                        </UserShowInfo>
                        <UserShowInfo>
                            <LocationOnOutlined className="userShowIcon"/>
                            <UserShowInfoTitle>New York , USA</UserShowInfoTitle>
                        </UserShowInfo>                     
                    </UserShowB0ttom>
                </UserShow>

                <UserUpdate>
                    <UserUpdateTitle>Edit</UserUpdateTitle>
                    <UserUpdateForm>
                        <UserUpdateLeft>
                            <UserUpdateItem>
                                <Label>Username</Label>
                                <Input type="text" placeholder="annaBack99" className="userUpdateInput"/>
                            </UserUpdateItem>
                            <UserUpdateItem>
                                <Label>D.O.B.</Label>
                                <Input type="date" placeholder="16-04-1998" pattern="\d{4}-\d{2}-\d{2}" className="userUpdateInput"/>
                            </UserUpdateItem>
                            <UserUpdateItem>
                                <Label>Phone No.</Label>
                                <Input type="text" placeholder="123 99 99 99 99" className="userUpdateInput"/>
                            </UserUpdateItem>
                            <UserUpdateItem>
                                <Label>Email</Label>
                                <Input type="text" placeholder="annabella@gmail.com" className="userUpdateInput"/>
                            </UserUpdateItem>                           
                            <UserUpdateItem>
                                <Label>Address</Label>
                                <Input type="text" placeholder="New York , USA" className="userUpdateInput"/>
                            </UserUpdateItem>
                        </UserUpdateLeft>
                        <UserUpdateRight>
                            <UserUpdateUpload>
                                <UserUpdateImage src="https://gravatar.com/avatar/b8f3e850e762f8364b9bc68d81c866cf?s=400&d=robohash&r=x" alt="" />
                                <Label htmlFor="file">
                                    <Publish className="userUpdateIcon"/>
                                </Label>
                                <Input type="file" id="file" style={{display:"none"}}/>
                            </UserUpdateUpload>
                            <UserUpdateButton>Update</UserUpdateButton>
                        </UserUpdateRight>
                    </UserUpdateForm>
                </UserUpdate>
            </UserCointainer>
        </UserContainer>
    )
}

export default User
