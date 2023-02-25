import app from "../../firebase/config";
import { authSlice } from "./authReducer";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
const auth = getAuth();

const authSignIn =
  ({ name, email, password }) =>
  async (dispatch, getState) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      const user = await auth().currentUser;

      await user.updateProfile({
        displayName: name,
      });

      const { displayName, uid } = await auth().currentUser;
      const userUpdProfile = {
        name: displayName,
        userId: uid,
      };

      dispatch(authSlice.actions.updateProfile(userUpdProfile));
      // console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

const authLogIn =
  ({ email, password }) =>
  async (dispatch, getState) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

const authSignOut = () => async (dispatch, getState) => {
  try {
    console.log("hi");
  } catch (error) {
    console.log(error);
  }
};

const authStateUser = () => async (dispatch, getState) => {};

export { authSignIn, authLogIn, authSignOut, authStateUser };
