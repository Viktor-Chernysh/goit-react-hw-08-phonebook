export const getToken = state => state.userAuth.token;
export const getName = state => state.userAuth.user.name;
export const isLogin = state => state.userAuth.isAuth;

// export const{isLogin,getToken,getName}=authSelectors
