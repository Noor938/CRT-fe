import React from 'react'
import bitcoin from '../assets/img/bitcoin.svg'
import { CiMenuKebab } from 'react-icons/ci'
import '../styles/table.css'

const Table = () => {
  return (
    <div>
          <div class="table-container">
        <table class="custom-table">
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>Tokens</th>
              <th>Crypto</th>
              <th>USD</th>
              <th>Wallet</th>
              <th>Type</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#1254632</td>
              <td>3 CRT</td>
              <td class="crypto-cell">
                <img src={bitcoin} alt="Bitcoin" />
                Bitcoin
              </td>
              <td>$253.63</td>
              <td>$253.63</td>
              <td>Token Type</td>
              <td>
                <button class="status-btn">Buy</button>
              </td>
              <td>
              <CiMenuKebab />
              </td>
            </tr>
        
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table