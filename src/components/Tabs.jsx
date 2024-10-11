export default function Tabs({children, buttons, buttonsContainer}) {
    const ButtonContainer = buttonsContainer;
    return(
        <>
        <ButtonsContainer>
           {buttons}
            </ButtonsContainer>
            {children}
            </>
    )
}