import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

const authSignIn =
  ({ name, email, password }) =>
  async (dispatch, getState) => {
    try {
      createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

const authSignUp = () => async (dispatch, getState) => {
  try {
    console.log("hi");
  } catch (error) {}
};

const authSignOut = () => async (dispatch, getState) => {
  try {
    console.log("hi");
  } catch (error) {
    console.log(error);
  }
};

export { authSignIn, authSignUp, authSignOut };
