import * as React from "react";
import { firebase } from ".";
import { AuthUserContext } from "./authUser";


interface InterfaceProps {
    authUser?: any;
}

interface InterfaceState {
    authUser?: any;
}

export const withAuthentication = (Component: any) => {
    class WithAuthentication extends React.Component<InterfaceProps, InterfaceState> {
        constructor(props: any) {
            super(props);

            this.state = {
                authUser: null
            };
        }

        public componentDidMount() {
            // @ts-ignore
            firebase.auth.onAuthStateChanged(authUser => {
                authUser
                    ? this.setState(() => ({ authUser }))
                    : this.setState(() => ({ authUser: null }));
            });
        }

        public render() {
            const { authUser } = this.state;
            return (
                <AuthUserContext.Provider value={authUser}>
                    <Component />
                </AuthUserContext.Provider>
            );
        }
    }
    return WithAuthentication;
};