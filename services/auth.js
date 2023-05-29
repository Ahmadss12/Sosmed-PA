import { Auth } from 'aws-amplify';

export const signUp = async (password, email) => {
    try {
        const signUpResponse = await Auth.signUp({
            email,
            password,
        });
        return signUpResponse.user;
    } catch (error) {
        throw error;
    }
};

export const signIn = async (email, password) => {
    try {
        const signInResponse = await Auth.signIn(email, password);
        return signInResponse.signInUserSession.accessToken.jwtToken;
    } catch (error) {
        throw error;
    }
};

export const signOut = async () => {
    try {
        await Auth.signOut();
    } catch (error) {
        throw error;
    }
};

export const getCurrentUser = () => {
    try {
        const currentUser = Auth.currentAuthenticatedUser();
        return currentUser;
    } catch (error) {
        throw error;
    }
};
