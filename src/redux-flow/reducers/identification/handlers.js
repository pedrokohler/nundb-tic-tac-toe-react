export const handleSetIdentification = (state, action) => {
  const { userName } = action.payload;
  return {
    ...state,
    userName,
  };
};
