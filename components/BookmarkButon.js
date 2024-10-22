import styled from "styled-components";

const StyledButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
`;
export default function BookmarkButton({ isFavorite, onToggleFavorite }) {
  return (
    <StyledButton onClick={onToggleFavorite}>
      {isFavorite ? "❤️" : "🤍"}
    </StyledButton>
  );
}
