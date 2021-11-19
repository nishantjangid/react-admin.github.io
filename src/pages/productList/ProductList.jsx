import "./productList.css";
import { DataGrid } from '@material-ui/data-grid';
import {rows} from "../../ProductDummyData";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { useState } from "react";
import { DeleteOutline } from '@material-ui/icons';

const ProductListContiner = styled.div`
    flex:4;
    padding:20px;
`;

const ProductListEdit = styled.button`
  border:none;
  border-radius:10px;
  padding:5px 10px;
  background-color:#3bb077;
  color:#fff;
  cursor:pointer;
  margin-right:20px;
`;

const ProductList = () => {

    const [productRows, setProductRow] = useState(rows);

    const handleDelete = (id) => {
        setProductRow(productRows.filter(item => item.id !== id));
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'product',
          headerName: 'Product',
          width: 200,
          renderCell:(params) => {
            return (
              <div className="productList">
                <img src={params.row.image} alt="avatar" className="productListImage"/>
                <span>{params.row.name}</span>
              </div>
            )
          }
        },       
        {
          field: 'stock',
          headerName: 'Stock',
          type: 'number',
          width: 150,
        },
        {
            field: 'price',
            headerName: 'Price',
            type: 'number',
            width: 150,            
        }, 
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell:(params) => {
              return(
                <>
                <Link to={"/product/"+params.row.id}>
                  <ProductListEdit>Edit</ProductListEdit>
                </Link>
                  <DeleteOutline className="productDeleteBtn" onClick={() => handleDelete(params.row.id)}/>
                </>
              )
            }
          }              
      ];            

    return (
        <ProductListContiner>
            <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={productRows}
                columns={columns}
                pageSize={5}
                checkboxSelection
                disableSelectionOnClick
            />
            </div>            
        </ProductListContiner>
    )
}

export default ProductList
