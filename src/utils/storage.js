export const getItem = key => {
    const json = sessionStorage.getItem(key) || localStorage.getItem(key);

    try {
        return JSON.parse(json);
    } catch (error) {
        removeItem(key);
        return undefined;
    }
};

export const setItem = (key, value, persist) => {
    const json = JSON.stringify(value);

    if (persist || (persist === undefined && !!localStorage.getItem(key))) {
        sessionStorage.removeItem(key);
        localStorage.setItem(key, json);
        return;
    }

    localStorage.removeItem(key);
    sessionStorage.setItem(key, json);
};

export const removeItem = key => {
    sessionStorage.removeItem(key);
    localStorage.removeItem(key);
};
