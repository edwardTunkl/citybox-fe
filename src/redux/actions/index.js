export const SET_USER_INFO = "SET_USER_INFO";
export const SET_USER_ITEMS = "SET_USER_ITEMS";
export const SET_SEARCH_ITEMS = "SET_SEARCH_ITEMS";
export const SEARCH_LOADING = "SEARCH_LOADING";
export const SET_SEARCH = "SET_SEARCH";
export const SEARCH_CLEANUP = "SEARCH_CLEANUP";
export const SET_IMCOMING_REQUESTS = "SET_IMCOMING_REQUESTS"
export const SET_ACCEPTED_REQUESTS = "SET_ACCEPTED_REQUESTS"

export const getRequest = (value) => {
  return async (dispatch, getState) => {
    const query = getState()
    try {
      let req = await fetch(process.env.REACT_APP_BE_URL + `/requests/${query.user._id} `, {
        method: "GET"
      });
      if (req.ok) {
        let userRequests = await req.json();
        dispatch({
          type: SET_IMCOMING_REQUESTS,
          payload: userRequests,
        });
      } else {
        throw new Error(req.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  };

}

export const searchItems = (value) => {
  return async (dispatch, getState) => {
    let query = await getState();
    if (query.items.query.length > 2) {
      dispatch({
        type: SEARCH_LOADING,
        payload: true,
      });
      try {
        let req = await fetch(
          process.env.REACT_APP_BE_URL +
            `/items?category=${query.items.query}&type=${query.items.query}&model=${query.items.query}&brand=${query.items.query}`,
          {
            method: "GET"
          }
        );
        let result = await req.json();
        if (req.ok) {
          console.log(result);
          dispatch({
            type: SET_SEARCH_ITEMS,
            payload: result,
          });
          dispatch({
            type: SEARCH_LOADING,
            payload: false,
          });
        } else {
          dispatch({
            type: SEARCH_LOADING,
            payload: false,
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
};

export const setQuery = (value) => {
  return async (dispatch) => {
    dispatch({
      type: SET_SEARCH,
      payload: value,
    });
    if (value.length === 0) {
      dispatch({
        type: SEARCH_CLEANUP,
        payload: value,
      });
    }
  };
};

export const cleanUp = (value) => {
  return async (dispatch) => {
    dispatch({
      type: SEARCH_CLEANUP,
      payload: value,
    });
  };
};

export const setUserInfo = (name) => {
  return async (dispatch, getState) => {
    try {
      let req = await fetch(process.env.REACT_APP_BE_URL + "/users/me", {
        method: "GET",
        headers: { Authorization: localStorage.getItem("token") },
      });
      if (req.ok) {
        let userInfo = await req.json();
        dispatch({
          type: SET_USER_INFO,
          payload: userInfo,
        });
      } else {
        throw new Error(req.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const setUserItems = (name) => {
  return async (dispatch, getState) => {
    const query = await getState();
    const id = query.user._id;
    console.log("USERID", id);
    try {
      let req = await fetch(
        process.env.REACT_APP_BE_URL + `/items/user/${id}`,
        {
          method: "GET",
        }
      );
      if (req.ok) {
        let userItems = await req.json();
        console.log("USERITEMS", userItems);
        dispatch({
          type: SET_USER_ITEMS,
          payload: userItems,
        });
      } else {
        throw new Error(req.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  };
};
