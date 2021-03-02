export const handleSetIdentification = (state, action) => {
  const { userName } = action.payload;
  return {
    ...state,
    userName,
  };
};

export const handleSetRoom = (state, action) => {
  const { room } = action.payload;
  return {
    ...state,
    room,
  };
};
