import React, {useEffect, useState} from 'react';
import { db } from '../../firebase';
import { ref, onValue } from "firebase/database";
import DetailsTab from './DetailsTab';
import ScheduleTab from './ScheduleTab';
import AllocationTab from './AllocationTab';

const Tabs = () => {
  const [pools, setPools] = useState('');
  const [tokens, setTokens] = useState('');
  useEffect(() => {
    const pollInfoRef = ref(db, `users/client1/pool_info`);
    onValue(pollInfoRef, (snapshot) => {
      const data = snapshot.val();
      setPools(data);
    });
    const tokenInfoRef = ref(db, `users/client1/token_info`);
    onValue(tokenInfoRef, (snapshot) => {
      const data = snapshot.val();
      setTokens(data);
    });
  }, []);
  
  return (
    <div className="tabs px-2">
      <div className="container">
        <div className="justify-content-center">
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button className="nav-item text-muted active" id="project-details-tab" data-bs-toggle="tab" data-bs-target="#project-details" type="button" role="tab" aria-controls="project-details" aria-selected="true">
              Project Details
            </button>
            <button className="nav-item text-muted" id="schedule-tab" data-bs-toggle="tab" data-bs-target="#schedule" type="button" role="tab" aria-controls="schedule" aria-selected="false">
              Schedule
            </button>
            <button className="nav-item text-muted" id="allocation-tab" data-bs-toggle="tab" data-bs-target="#allocation" type="button" role="tab" aria-controls="allocation" aria-selected="false">
              Your Allocation
            </button>
          </div>
          <div className="tab-content py-2" id="nav-tab">
            <div className="tab-pane fade show active" id="project-details" role="tabpanel" aria-labelledby="project-details-tab">
              <div className="row">
                <DetailsTab
                  pools={pools}
                  tokens={tokens}
                />
              </div>
            </div>
            <div className="tab-pane fade" id="schedule" role="tabpanel" aria-labelledby="schedule-tab">
              <ScheduleTab />
            </div>
            <div className="tab-pane fade" id="allocation" role="tabpanel" aria-labelledby="allocation-tab">
              <AllocationTab />
            </div>
          </div>
        </div>
      </div>
    </div>
  )};

export default Tabs;

