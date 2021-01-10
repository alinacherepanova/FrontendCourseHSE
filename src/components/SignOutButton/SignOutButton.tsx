import * as React from "react";
import { auth } from "../../firebase";
import "./SignOut.css";

export const SignOutButton = () => (
<button type="button" onClick={doSignOut} className="NavigaionButton">
                                                                     Sign Out
  </button>


);

const doSignOut = () => {
                          localStorage.setItem('authUser', '');
                          auth.doSignOut();
                      }