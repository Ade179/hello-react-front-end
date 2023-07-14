import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import setGreetings from '../redux/messageThunk';

function Greeting() {
  const greeting = useSelector((state) => state.greetings.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setGreetings());
  }, [dispatch]);

  return (
    <div>
      <h1>Greetings:</h1>
      <p>{greeting || 'Loading ...'}</p>
    </div>
  );
}

export default Greeting;
