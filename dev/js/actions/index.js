export const selectUser = (user) => {
  console.log('You selected user: ' + user.firstName + ' ' + user.lastName);
  return {
    type: 'USER_SELECTED',
    payload: user
  };
};