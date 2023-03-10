export const selectToken = state => state.auth.token;

export const selectUser = state => state.auth.user;

export const selectIsLoading = state => state.auth.isLoading;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectisFetchingCurrent = state => state.auth.isFetchingCurrentUser;

export const selectIsError = state => state.auth.error;;