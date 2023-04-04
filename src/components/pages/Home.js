import React from 'react';
import profile from '../images/profile.png'

export default function Home() {
  return (
    <div>
      <h1>Tom Houf</h1>
      <img alt="profile image" src={profile}/>
      <h4>
Tom Houf is a graduate of the Case Western Reserve full-stack web development bootcamp.
      </h4>
    </div>
  );
}
