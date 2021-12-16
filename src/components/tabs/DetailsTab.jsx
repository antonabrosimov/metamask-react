import React from 'react';

const DetailsTab = ({
  opens,
  fcfsOpens,
  closes,
  swapRate,
  cap,
  totalUsersParticipated,
  name,
  tokenSymbol,
  tokenSupply
}) => (
  <>
    <div className="col-md-7">
      <table className="text-white">
        <thead>
          <tr>
            <th colSpan={2}>Pool information</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Opens</th>
            <td>{opens}</td>
          </tr>
          <tr>
            <th scope="row">FCFS Opens</th>
            <td>{fcfsOpens}</td>
          </tr>
          <tr>
            <th scope="row">Closes</th>
            <td>{closes}</td>
          </tr>
          <tr>
            <th scope="row">Swap Rate</th>
            <td>{swapRate}</td>
          </tr>
          <tr>
            <th scope="row">Cap</th>
            <td>{cap}</td>
          </tr>
          <tr>
            <th scope="row">Total Users Participated</th>
            <td>{totalUsersParticipated}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="col-md-5">
      <table className="text-white">
        <thead>
          <tr>
            <th colSpan={2}>Token information</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Name</th>
            <td>{name}</td>
          </tr>
          <tr>
            <th scope="row">Token Symbol</th>
            <td>{tokenSymbol}</td>
          </tr>
          <tr>
            <th scope="row">Token Supply</th>
            <td>{tokenSupply}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td></td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td></td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </>
);

export default DetailsTab;

