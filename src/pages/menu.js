import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { setIdentification, setRoom } from '../redux-flow/reducers/identification/action-creators';

const Container = styled.div`
  width: 95vw;
  height: 95vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-family: sans-serif;
`;

const MenuPage = () => {
  const { userName, room: roomName } = useSelector((store) => store.identification);
  const dispatch = useDispatch();

  const handleClick = useCallback((e) => {
    if (!roomName) {
      e.preventDefault();
    }
  }, [roomName]);

  return (
    <Container>
      <div>
        <label htmlFor="userName">
          <p>
            Type in your username:
          </p>
          <input
            name="userName"
            onInput={(e) => dispatch(setIdentification(e.target.value))}
            value={userName}
          />
        </label>
      </div>
      <div>
        <label htmlFor="roomName">
          <p>
            Type in the room name:
          </p>
          <input
            name="roomName"
            onInput={(e) => dispatch(setRoom(e.target.value))}
            value={roomName}
          />
        </label>
        <Link
          to={`/room/${roomName}`}
          onClick={handleClick}
        >
          <p>Join room</p>
        </Link>
      </div>
    </Container>
  );
};

export default MenuPage;
