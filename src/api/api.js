import axios from "axios";

export const getUsers = (pageNumber, pageSize) => {
  return axios.get(
    `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`,
    { withCredentials: true }
  );
};
