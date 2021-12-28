import React from 'react';

const DetailsTab = ({
  pools,
  tokens,
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
        {
          pools ?
            Object.keys(pools).map((poolKey) => {
              const pool = pools[poolKey];
              return (
                <tr key={poolKey}>
                  <td>{pool.name}</td>
                  <td>{pool.value}</td>
                </tr> 
              );
            })
          :
          <tr>
            <td></td>
            <td></td>
          </tr>
        }
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
        {
          tokens ?
            Object.keys(tokens).map((tokenKey) => {
              const token = tokens[tokenKey];
              return (
                <tr key={tokenKey}>
                  <td>{token.name}</td>
                  <td>{token.value}</td>
                </tr> 
              );
            })
          :
          <tr>
            <td></td>
            <td></td>
          </tr>
        }
        </tbody>
      </table>
    </div>
  </>
);

export default DetailsTab;

