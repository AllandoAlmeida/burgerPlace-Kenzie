import styled from "styled-components";

export const CartSection = styled.ul`
display: flex;
justify-content: space-between;
width:100%;
max-width: 453px;
height: 80px;
margin: 18px auto;

li:nth-child(1){
    display:flex;
    gap:10px;
    height: 80px;
    list-style-type: none;
    flex-wrap:wrap;

    figure{
        background-color: var(--color-grey-100);
        width: 83px;
        height: 80px;
        padding: 13px;
        border-radius: 5px
    }

    img{
        width: 55px;
        height: 54px;
    }

}
li:nth-child(2){
    list-style-type: none;
}

`