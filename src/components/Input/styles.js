import styled from "styled-components";

export const InputContainer = styled.div`
    width: 100%;
    min-height: 75px;
    background-color: #fff;
    border-radius: 20px 20px 0 0;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    input {
        width: 100%;
        min-height: 75px;
        background-color: #fff;
        border: 2px solid #000;
        border-radius: 20px 20px 0 0;
        outline: 0;
        font-size: 25px;
        font-family: Roboto;

        padding: 0 10px;

        display: flex;
        flex-direction: columns;
        align-items: flex-end;
    }

`