import React, { useState } from 'react';
import NavBarSub1 from './navbarsub1';
import NavBarSub2 from './navbarsub2';

const navigation = () => {
  const [viewState, setViewState] = useState('navbarsub1');

  const views = {
    navbarsub1: <NavBarSub1 />,
    navbarsub2: <NavBarSub2 />,
  }

  const toSub1 = () => {
    setViewState('navbarsub1');
  }

  const toSub2 = () => {
    setViewState('navbarsub2');
  }

  const viewToggle = views[viewState]

  return (
    <div>
      <button onClick={toSub1}>ToSub1</button>
      <button onClick={toSub2}>ToSub2</button>
      {viewToggle}
    </div>
  )
}

export default navigation;