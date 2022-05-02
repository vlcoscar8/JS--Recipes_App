let storageId = [];

const setUserId = (userId) => {
    if (userId) {
        storageId.push(userId);
    }
};

let storageToken = [];

const setUserToken = (token) => {
    if (token) {
        storageToken.push(token);
    }
};

const removeUser = () => {
    storageToken = [];
    storageId = [];
};

export { setUserId, setUserToken, removeUser, storageToken, storageId };
