import Chart from "../../components/chart/Chart";
import { SalesData } from "../../chartData";
import { Link } from "react-router-dom";
import styled from "styled-components"
import "./product.css";
import { Publish } from "@material-ui/icons";
const ProductContainer = styled.div`
    flex:4;
    padding:20px;
`;

const ProductTitleContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
`;
const ProductTitle = styled.h1``;
const ProductAddButton = styled.button`
    width:80px;
    border:none;
    padding:5px;
    color:#fff;
    border-radius:5px;
    background-color:teal;
    font-size:16px;
    cursor:pointer;
`;

const ProductTop = styled.div`
    display:flex;    
`;
const ProductTopLeft = styled.div`
    flex:1;
    
`;
const ProductTopRight = styled.div`
    flex:1;
    padding:20px;
    margin:20px;
    box-shadow: 0px 0px 2px 0px rgb(0 0 0 / 81%);
    -webkit-box-shadow: 0px 0px 2px 0px rgb(0 0 0 / 81%);
    -moz-box-shadow: 0px 0px 2px 0px rgb(0 0 0 / 81%); 
`;
const ProductInfoTop = styled.div`
    display:flex;
    align-items:center;    
`;
const ProductInfoImage = styled.img`
    width:40px;
    height:40px;
    border-radius:50%;
    object-fit:cover;
    margin-right:20px;
`;
const ProductInfoTitle = styled.span``;

const ProductInfoBottom = styled.div`
    margin-top:10px;
`;
const ProductInfoItem = styled.div`
    width:150px;
    display:flex;
    justify-content:space-between;
`;
const ProductInfoKey = styled.span`
`;
const ProductInfoValue = styled.span`
    font-weight:300;
`;


const ProductBottom = styled.div`
    padding:20px;
    margin:20px;
    box-shadow: 0px 0px 2px 0px rgb(0 0 0 / 81%);
    -webkit-box-shadow: 0px 0px 2px 0px rgb(0 0 0 / 81%);
    -moz-box-shadow: 0px 0px 2px 0px rgb(0 0 0 / 81%); 
`;

const ProductForm = styled.form`
    display:flex;
    justify-content: space-between;

`;
const Label = styled.label`

`;
const Input = styled.input``;
const Select = styled.select``;
const Option = styled.option``;
const ProductFormLeft = styled.div`
    display:flex;
    flex-direction:column;
    & ${Label}{
        margin-bottom:10px;
        color:gray;
    }
    & ${Input}{
        margin-bottom:10px;
        border:none;
        padding:5px;
        border-bottom:1px solid gray;
    }
    & ${Select}{
        margin-bottom:10px;       
    }
`;


const ProductFormRight = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: space-between;
`;
const ProductUpload = styled.div``;
const ProductUploadImage = styled.img`
    width:100px;
    height:100px;
    border-radius:10px;
    object-fit:cover;
    margin-right:20px;
    
`;
const ProductButton = styled.button`
    border:none;
    padding:5px;
    border-radius:5px;
    background-color:darkblue;
    color:#fff;
    font-weight:600;
`;

const Product = () => {
    return (
        <ProductContainer>
            <ProductTitleContainer>
                <ProductTitle>Product</ProductTitle>
                <Link to="/newProduct">
                    <ProductAddButton>Create</ProductAddButton>
                </Link>
            </ProductTitleContainer>
            <ProductTop>
                <ProductTopLeft>
                    <Chart title="Sale Performance" data={SalesData} dataKey="Sales" grid/>
                </ProductTopLeft>
                <ProductTopRight>
                    <ProductInfoTop>
                        <ProductInfoImage src="https://m.media-amazon.com/images/I/615ekapl+pL._SL1500_.jpg" alt="product-image"/>
                        <ProductInfoTitle>Apple Airpods</ProductInfoTitle>
                    </ProductInfoTop>
                    <ProductInfoBottom>
                        <ProductInfoItem>
                            <ProductInfoKey>ID:</ProductInfoKey>
                            <ProductInfoValue>123</ProductInfoValue>
                        </ProductInfoItem>
                        <ProductInfoItem>
                            <ProductInfoKey>Sales</ProductInfoKey>
                            <ProductInfoValue>$234</ProductInfoValue>
                        </ProductInfoItem>
                        <ProductInfoItem>
                            <ProductInfoKey>Active</ProductInfoKey>
                            <ProductInfoValue>yes</ProductInfoValue>
                        </ProductInfoItem>
                        <ProductInfoItem>
                            <ProductInfoKey>In Stock</ProductInfoKey>
                            <ProductInfoValue>No</ProductInfoValue>
                        </ProductInfoItem>
                    </ProductInfoBottom>
                </ProductTopRight>
            </ProductTop>
            <ProductBottom>
                <ProductForm>
                    <ProductFormLeft>
                        <Label>Product Name</Label>
                        <Input type="text" placeholder="Apple Airpods"/>                    
                        <Label>In Stock</Label>
                        <Select name="inStock" id="inStock">
                            <Option value="no">No</Option>
                            <Option value="yes">Yes</Option>
                        </Select>
                    
                        <Label>Active</Label>
                        <Select name="active" id="active">
                            <Option value="no">No</Option>
                            <Option value="yes">Yes</Option>
                        </Select>
                    </ProductFormLeft>          
                    <ProductFormRight>
                        <ProductUpload>
                            <ProductUploadImage src="https://m.media-amazon.com/images/I/615ekapl+pL._SL1500_.jpg" alt="product-image"/>
                            <Label htmlFor="file"><Publish /></Label>
                            <Input type="file" id="file" style={{display:"none"}}/>
                        </ProductUpload>
                        <ProductButton>Update</ProductButton>
                    </ProductFormRight>
                </ProductForm>
            </ProductBottom>
        </ProductContainer>
    )
}

export default Product
