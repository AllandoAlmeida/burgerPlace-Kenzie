import { StyledProdNotFound } from "./styles";

export const ProductNotFound = () => {
    return (
        <StyledProdNotFound>
            <h1 className="information">
                O produto pesquisado não foi localizado ou não está disponível.
            </h1>
        </StyledProdNotFound>
    )
}