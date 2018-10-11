import http from '../utils/http';

export const getUsers = model =>
    http({
        url: '/user',
        method: 'GET',
        authenticate: true,
        params: model
    });

export const getUser = id =>
    http({
        url: `/user/${encodeURIComponent(id)}`,
        method: 'GET',
        authenticate: true
    });

export const createUser = model =>
    http({
        url: '/user',
        method: 'POST',
        authenticate: true,
        data: model
    });

export const updateUser = (id, model) =>
    http({
        url: `/user/${encodeURIComponent(id)}`,
        method: 'PUT',
        authenticate: true,
        data: model
    });

export const lockUser = id =>
    http({
        url: `/user/${encodeURIComponent(id)}/lock`,
        method: 'PUT',
        authenticate: true
    });

export const unlockUser = id =>
    http({
        url: `/user/${encodeURIComponent(id)}/unlock`,
        method: 'PUT',
        authenticate: true
    });

export const deleteUser = id =>
    http({
        url: `/user/${encodeURIComponent(id)}`,
        method: 'DELETE',
        authenticate: true
    });
