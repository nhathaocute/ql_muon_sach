import axiosClient from "../utils/client";

const getURL = (url = "") => `/loaiSach/${url}`;

export const loaiSachAPI = {
  create: async (data) => await axiosClient.post(getURL("create"), data),
  getAll: async () => await axiosClient.get(getURL("all")),
  update: async (MALOAI, data) =>
    await axiosClient.put(getURL(`update?id=${MALOAI}`), data),
  getOne: async (MALOAI) => await axiosClient.get(getURL(`info?id=${MALOAI}`)),
};
