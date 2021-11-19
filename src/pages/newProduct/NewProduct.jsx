import styled from "styled-components";

const NewProductContainer = styled.div`
    flex:4;
    padding:40px;
`;


const NewProductForm = styled.form`
    display:flex;
    flex-wrap:wrap;
`;

const Label = styled.label``;
const Input = styled.input``;
const NewProductFormItem = styled.div`
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

const NewProductSelect = styled.select`
    height:40px;
    border-radius:5px;
    width:400px;
`;
const NewProductSelectOption = styled.option``;
const NewProductButton = styled.button`
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

const NewProduct = () => {
    return (
        <NewProductContainer>
            <NewProductForm>
                <NewProductFormItem>
                    <Label>Product Name</Label>
                    <Input type="text" placeholder="Apple pods"/>
                </NewProductFormItem>
                <NewProductFormItem>
                    <Label>Product Image</Label>
                    <Input type="file" placeholder="Image"/>
                </NewProductFormItem>                
                <NewProductFormItem>
                    <Label>In Stock</Label>
                    <NewProductSelect name="inStock" id="inStock">
                        <NewProductSelectOption value="yes">Yes</NewProductSelectOption>
                        <NewProductSelectOption balue="no">No</NewProductSelectOption>
                    </NewProductSelect>
                </NewProductFormItem>
                <NewProductFormItem>
                    <Label>Active</Label>
                    <NewProductSelect name="active" id="active">
                        <NewProductSelectOption value="yes">Yes</NewProductSelectOption>
                        <NewProductSelectOption balue="no">No</NewProductSelectOption>
                    </NewProductSelect>
                </NewProductFormItem>
                <NewProductButton>Create</NewProductButton>
            </NewProductForm>
        </NewProductContainer>
    )
}

export default NewProduct
