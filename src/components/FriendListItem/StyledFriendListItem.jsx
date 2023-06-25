import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px 10px;
  background-color: #f2f2f2;
  border-radius: 10px;
  `;

export const Status = styled.span`
  display: block;
  margin-right: 10px;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: ${({isOnline}) => (isOnline ? 'green' : 'red')};
`;
 
export const Avatar = styled.img`
  margin-right: 10px;
  padding: 5px;
  background-color: #cdcdcd;
  border-radius: 5px;
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: bold;
`;
