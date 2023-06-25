import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  max-width: 500px;
  border-collapse: collapse;

  & th,
  & td {
    padding: 10px;
    text-align: center;
    border-bottom: 1px solid #ccc;
  }

  & th {
    background-color: #f2f2f2;
    font-weight: bold;
  }

  & tbody tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  & tbody tr:hover {
    background-color: #eaeaea;
  }
`; 
  
