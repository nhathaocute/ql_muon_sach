import axiosClient from "../utils/client";

const getURL = (url = "") => `/nhanVien/${url}`;

export const nhanVienAPI = {
  login: async (data) => await axiosClient.post(getURL("login"), data),
  register: async (data) => await axiosClient.post(getURL("create"), data),
  getOne: async (MSNV) => await axiosClient.get(getURL(`info?id=${MSNV}`)),
  getAll: async () => await axiosClient.get(getURL("all")),
};
