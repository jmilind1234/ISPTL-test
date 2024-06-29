import styled from "styled-components";

export const PostContainer = styled.div`
  border: 3px solid blue;
  padding: 10px;
  background-color: #cde6f0;
  margin-bottom: 10px;
`;

export const NavigationBar = styled.div`
  position: sticky;
  top: 0;
  border: 3px solid red;
  background-color: #f7c1ba;
  display: flex;
  gap: 10px;
  height: auto;
  font-size: 16px;
  line-height: 24px;
`;

export const NavigationList = styled.ul`
  display: flex;
  gap: 10px;
  height: 24px;
  font-size: 16px;
  list-style-type : none;
  line-height: 24px;
`;