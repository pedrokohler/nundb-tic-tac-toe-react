import React from 'react';
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
  const { room: roomName } = useSelector((store) => store.identification);
  const dispatch = useDispatch();

  return (
    <Container>
      <div>
        <label htmlFor="userName">
          <p>
            Type in your username:
          </p>
          <input name="userName" onInput={(e) => dispatch(setIdentification(e.target.value))} />
        </label>
      </div>
      <div>
        <label htmlFor="roomName">
          <p>
            Type in the room name:
          </p>
          <input name="roomName" onInput={(e) => dispatch(setRoom(e.target.value))} />
        </label>
        <Link
          to={`/room/${roomName}`}
          onClick={(e) => {
            if (!roomName) {
              e.preventDefault();
            }
          }}
        >
          <p>Join room</p>
        </Link>
      </div>
    </Container>
  );
};

export default MenuPage;
