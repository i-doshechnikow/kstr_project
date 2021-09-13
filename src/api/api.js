import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "234cc3be-73fc-42c6-9994-80baa9a4fe68",
  },
});

export const userApi = {
  getIsAuth() {
    return instance.get(`auth/me`).then((response) => {
      return response.data;
    });
  },
  getUsers(pageNumber = 1, pageSize = 5) {
    return instance
      .get(`users?page=${pageNumber}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  getUserInfo(id) {
    return instance.get(`profile/${id}`).then((response) => {
      return response.data;
    });
  },
  onFollowClick(id) {
    return instance.post(`follow/${id}`).then((response) => {
      return response.data;
    });
  },
  onUnfollowClick(id) {
    return instance.delete(`follow/${id}`).then((response) => {
      return response.data;
    });
  },
};
