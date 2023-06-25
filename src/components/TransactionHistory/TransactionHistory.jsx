import PropTypes from 'prop-types';
import * as Styled from './StyledTransactionsHistory';

export const TransactionHistory = ({items}) => {
    return (
      <Styled.Table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <tr key = {id} >
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          ))}
                  </tbody>
      </Styled.Table>
    );
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf({
        id: PropTypes.number.isRequired, type: PropTypes.string.isRequired, amount: PropTypes.number.isRequired, currency: PropTypes.string.isRequired,
  })
}
