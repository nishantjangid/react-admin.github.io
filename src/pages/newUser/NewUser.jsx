import styled from "styled-components";
import "./newUser.css";

const NewUserContainer = styled.div`
    flex:4;
    padding:20px;
`;
const NewUserTitle = styled.h1``;
const NewUserForm = styled.form`
    display:flex;
    flex-wrap:wrap;
`;

const Label = styled.label``;
const Input = styled.input``;
const NewUserFormItem = styled.div`
    width:400px;
    display:flex;
    flex-direction:column;
    margin-top:10px;
    margin-right:20px;
    & ${Label}{
        margin-bottom:10px;
        font-size:14px;
        font-weight:600;
        color:rgb(151, 150, 150);
    }
    & ${Input}{
        height:20px;
        padding:10px;
        border:1px solid gray;
        border-radius:5px;
    }
`;

const NewUserGender = styled.div`
    display:flex;
    align-items:center;
    & ${Input}{
        
    }
    & ${Label}{
        margin:10px;
        font-size:18px;
        color:#555;
    }    
`;

// const NewUserItem = styled.div`
//     display:flex;
//     flex-direction:column;
//     margin-top:10px;
//     & ${Label}{
//         margin-bottom:10px;
//         font-size:14px;
//         font-weight:600;
//         color:rgb(151, 150, 150);
//     }   
// `;
const NewUserSelect = styled.select`
    height:40px;
    border-radius:5px;
    width:400px;
`;
const NewUserSelectOption = styled.option``;
const NewUserButton = styled.button`
    width:400px;
    border:none;
    background-color:darkblue;
    color:#fff;
    padding:7px 10px;
    cursor:pointer;
    border-radius:10px;
    font-weight:600;
    margin-top:30px;
    
`;

const NewUser = () => {
    return (
        <NewUserContainer>
            <NewUserTitle>New User</NewUserTitle>
            <NewUserForm>
                <NewUserFormItem>
                    <Label>Username</Label>
                    <Input type="text" placeholder="jhon"/>
                </NewUserFormItem>
                <NewUserFormItem>
                    <Label>Full Name</Label>
                    <Input type="text" placeholder="jhon Smith"/>
                </NewUserFormItem>
                <NewUserFormItem>
                    <Label>Email</Label>
                    <Input type="email" placeholder="jhon@gmail.com"/>
                </NewUserFormItem>
                <NewUserFormItem>
                    <Label>Password</Label>
                    <Input type="password" placeholder="password"/>
                </NewUserFormItem>
                <NewUserFormItem>
                    <Label>Phone</Label>
                    <Input type="text" placeholder="+91 9999999999"/>
                </NewUserFormItem>
                <NewUserFormItem>
                    <Label>Address</Label>
                    <Input type="text" placeholder="New york, USA"/>
                </NewUserFormItem>
                <NewUserFormItem>
                    <Label>Gender</Label>
                    <NewUserGender>
                        <Input type="radio" name="gender" id="male" value="male"/>
                        <Label htmlFor="male">Male</Label>
                        <Input type="radio" name="gender" id="female" value="female"/>
                        <Label htmlFor="female">Female</Label>
                        <Input type="radio" name="gender" id="other" value="other"/>
                        <Label htmlFor="other">Other</Label>
                    </NewUserGender>
                </NewUserFormItem>
                <NewUserFormItem>
                    <Label>Active</Label>
                    <NewUserSelect name="active" id="active">
                        <NewUserSelectOption value="yes">Yes</NewUserSelectOption>
                        <NewUserSelectOption balue="no">No</NewUserSelectOption>
                    </NewUserSelect>
                </NewUserFormItem>
                <NewUserButton>Create</NewUserButton>
            </NewUserForm>
        </NewUserContainer>
    )
}

export default NewUser
