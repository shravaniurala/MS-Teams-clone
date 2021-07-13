let state = {
  socketId: null,
  localStream: null,
  remoteStream: null,
  screenSharingActive: false,
  screenSharingStream: null,
};

//initialise the socket id
export const setSocketId = (socketId) => {
  state = {
    ...state,
    socketId,
  };
  console.log(state);
};

//initialise the local stream
export const setLocalStream = (stream) => {
  state = {
    ...state,
    localStream: stream,
  };
};

//initialise the screen share state
export const setScreenSharingActive = (screenSharingActive) => {
  state = {
    ...state,
    screenSharingActive,
  };
};

//initialise the screen share stream
export const setScreenSharingStream = (stream) => {
  state = {
    ...state,
    screenSharingStream: stream,
  };
};

//initialise the remote stream
export const setRemoteStream = (stream) => {
  state = {
    ...state,
    remoteStream: stream,
  };
};

//return the state 
export const getState = () => {
  return state;
};
