export const getUsers = model => ({
    type: 'GET_USERS',
    payload: {
        request: {
            url: '/user',
            method: 'GET',
            authenticate: true,
            params: model
        }
    }
});

export const getUser = id => ({
    type: 'GET_USER',
    payload: {
        request: {
            url: `/user/${id}`,
            method: 'GET',
            authenticate: true
        }
    }
});

export const createUser = model => ({
    type: 'CREATE_USER',
    payload: {
        request: {
            url: '/user',
            method: 'POST',
            authenticate: true,
            data: model
        }
    }
});

export const updateUser = (id, model) => ({
    type: 'UPDATE_USER',
    payload: {
        request: {
            url: `/user/${id}`,
            method: 'PUT',
            authenticate: true,
            data: model
        }
    }
});

export const lockUser = id => ({
    type: 'LOCK_USER',
    payload: {
        request: {
            url: `/user/${id}/lock`,
            method: 'PUT',
            authenticate: true
        }
    }
});

export const unlockUser = id => ({
    type: 'UNLOCK_USER',
    payload: {
        request: {
            url: `/user/${id}/unlock`,
            method: 'PUT',
            authenticate: true
        }
    }
});

export const deleteUser = id => ({
    type: 'DELETE_USER',
    payload: {
        request: {
            url: `/user/${id}`,
            method: 'DELETE',
            authenticate: true
        }
    }
});
