import styled from "styled-components"
import { DataGrid } from '@material-ui/data-grid';
import "./UserList.css";
import { DeleteOutline } from "@material-ui/icons";
import {rows} from "../../UserDummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
const UserListContainer = styled.div`
    flex:1;
    padding:20px;
`;

const UserListEdit = styled.button`
  border:none;
  border-radius:10px;
  padding:5px 10px;
  background-color:#3bb077;
  color:#fff;
  cursor:pointer;
  margin-right:20px;
`;
const UserList = () => {

    const [userRow, setUserRow] = useState(rows);

    const handleDelete = (id) => {
      setUserRow(userRow.filter(item=>item.id !== id));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        {
          field: 'user',
          headerName: 'Username',
          width: 200,          
          renderCell:(params) => {
            return (
              <div className="userList">
                <img src={params.row.avatar} alt="avatar" className="userListImage"/>
                <span>{params.row.username}</span>
              </div>
            )
          }
        },
        {
          field: 'email',
          headerName: 'Email',
          type: 'email',
          width: 110,
          
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
            
        },
        {
            field: 'transaction',
            headerName: 'Transactions Amount',
            width: 160,
            
        },
        {
          field: 'action',
          headerName: 'Action',
          width: 150,
          renderCell:(params) => {
            return(
              <>
              <Link to={"/user/"+params.row.id}>
                <UserListEdit>Edit</UserListEdit>
              </Link>
                <DeleteOutline className="userDeleteBtn" onClick={() => handleDelete(params.row.id)}/>
              </>
            )
          }
        }
      ];
      

    return (
        <UserListContainer>
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={userRow}
                columns={columns}
                pageSize={8}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
        </UserListContainer>
    )
}

export default UserList
