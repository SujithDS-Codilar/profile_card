import React, { useEffect, useState } from 'react';
import "./Profilecard.scss";
import Loader from './Loader';

export default function ProfileCard({ state }) {
  const [profiledata, setprofiledata] = useState(null);
  useEffect(() => {

    setTimeout(async () => {
      const response = await fetch('https://reqres.in/api/users?page=' + state);
      const data = await response.json();
      setprofiledata(data.data);
    }, 500);

  }, [state])
  return (
    <>
      <div className="cards_main">
        {profiledata &&
          profiledata.map((userdata) => {
            return (

              <div className="i_card" key={userdata.id}>
                <div className="avatars">
                  <img src={userdata.avatar} alt="img" />
                </div>
                <div className="user_name"> {userdata.first_name} {userdata.last_name}</div>
                <div className="email_id">{userdata.email}</div>
              </div>

            )
          })
        }
        {!profiledata && [1, 2, 3, 4, 5, 6].map((n) => <Loader key={n} />)}

      </div>
    </>
  );

}