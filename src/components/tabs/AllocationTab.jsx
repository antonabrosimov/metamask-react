import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ref, onValue } from "firebase/database";
import { db } from '../../firebase';

const AllocationTab = () => {
  const [allocations, setAllocations] = useState(null);
  useEffect(() => {
    const pollInfoRef = ref(db, `users/client1/allocation_info`);
    onValue(pollInfoRef, (snapshot) => {
      const data = snapshot.val();
      setAllocations(data);
    });
  },[])
  return (
    <table className="text-white">
      <thead>
        <tr>
          <th>No.</th>
          <th>Token Allocation</th>
          <th>Date</th>
          <th>Token(s) Claimed</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {
        allocations ?
          Object.keys(allocations).map((allocationKey) => {
            const allocation = allocations[allocationKey];
            return (
              <tr key={uuidv4()}>
                <td>{allocation.no}</td>
                <td>{allocation.token_allocation}</td>
                <td>{allocation.date}</td>
                <td>{allocation.token_claimed}</td>
                <td>{allocation.action}</td>
              </tr> 
            );
          })
        :
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      }
      </tbody>
    </table>
  )
}

export default AllocationTab;
