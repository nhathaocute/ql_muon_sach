import axiosClient from "../utils/client";

const getURL = (url = "") => `/docGia/${url}`;

export const docGiaAPI = {
  register: async (data) => await axiosClient.post(getURL("register"), data),
  login: async (data) => await axiosClient.post(getURL("login"), data),
  getInfo: async (MaDocGia) =>
    await axiosClient.get(getURL(`getOne?id=${MaDocGia}`)),
  update: async (MaDocGia, data) =>
    await axiosClient.put(getURL(`update?id=${MaDocGia}`), data),
};
