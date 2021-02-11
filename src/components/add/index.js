import React from 'react';

import {
    Container, Header, Form, InpuContainer, InputText, List,InputTextArea, InputSelect,Style,
    SubmitButton,
} from './styles/add';

function Add({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Add.Header = function AddHeader({children, ...restProps}) {
    return <Header {...restProps}>{children}</Header>
}

Add.Form = function AddForm({children, ...restProps}) {
    return <Form {...restProps}>{children}</Form>
}

Add.InpuContainer = function AddInpuContainer({children, ...restProps}) {
    return <InpuContainer {...restProps}>{children}</InpuContainer>
}

Add.List = function AddList({children, ...restProps}) {
    return <List {...restProps}>{children}</List>
}

Add.InputText = function AddInputText({ ...restProps}) {
    return <InputText {...restProps} />
}

Add.InputSelect = function AddInputSelect({children, ...restProps}) {
    return <InputSelect {...restProps}>{children}</InputSelect>
}

Add.Style = function AddStyle({children, ...restProps}) {
    return <Style {...restProps}>{children}</Style>
}

Add.InputTextArea = function AddInputTextArea({children, ...restProps}) {
    return <InputTextArea {...restProps}>{children}</InputTextArea>
}

Add.SubmitButton = function AddSubmitButton({children, ...restProps}) {
    return <SubmitButton {...restProps}>{children}</SubmitButton>
}

export default Add;
