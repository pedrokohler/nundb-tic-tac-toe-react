import styled from 'styled-components';

const Container = styled.div`
    width: 98px;
    height: 98px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    font-size: 2.5em;

    border: solid 1px black;

    /* guarantee no text selection  */
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently */
`;

const Square = ({ children, ...props }) => (
    <Container {...props}>{children}</Container>
);

export default Square;