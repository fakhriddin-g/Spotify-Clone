import axios from "axios";

const token = location.href.split('access_token=').at(-1)
const baseURL = import.meta.env.VITE_API_KEY

const enums = {
    get: "get",
    post: "post",
    patch: "patch",
    put: "put",
    delete: "delete"
}

export const userHTTP = () => {
    const request = async (url, method) => {
        if (!enums[method]) {
            throw new Error("Axios has not provide method " + method)
        }

        try {
            const res = await axios[method](baseURL + url, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            if (res.status === 200 || res.status === 201) {
                return res
            }
        } catch (error) {
            return error
        }
    }

    return {
        request
    }
}