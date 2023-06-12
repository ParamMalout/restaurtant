import styled from "styled-components";

export const ButtonModal = styled.button`
  width: 9rem;
  height: 3rem;
  border-radius: 1rem;
  border: none;
  color: white;
  background: ${({ Background }) => Background | "red"};
  font-size: 21px;
  margin-left: 1rem;
`;
