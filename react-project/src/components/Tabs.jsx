export default function Tabs({ children, buttons, ButtonsContaine = "menu" }) {
    return (
        <>
            <ButtonsContainer>{buttons}</ButtonsContainer>
            {children}
        </>
    )
}