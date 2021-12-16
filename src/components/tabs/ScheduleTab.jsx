import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ref, onValue } from "firebase/database";
import { db } from '../../firebase';

const ScheduleTab = () => {
  const [schedules, setSchedules] = useState(null);
  useEffect(() => {
    const pollInfoRef = ref(db, `users/client1/schedule_info`);
    onValue(pollInfoRef, (snapshot) => {
      const data = snapshot.val();
      setSchedules(data);
    });
  },[])
  return (
    <table className="text-white">
      <thead>
        <tr>
          <th>Round</th>
          <th>Opens</th>
          <th>Closes</th>
        </tr>
      </thead>
      <tbody>
      {
        schedules ?
          Object.keys(schedules).map((scheduleKey) => {
            const schedule = schedules[scheduleKey];
            return (
              <tr key={uuidv4()}>
                <td>{schedule.round_name}</td>
                <td>{schedule.opens_at}</td>
                <td>{schedule.closes_at}</td>
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

export default ScheduleTab
