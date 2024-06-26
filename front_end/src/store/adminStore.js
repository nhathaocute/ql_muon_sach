import { defineStore } from "pinia";
import { nhanVienAPI } from "~/services/nhanVien.service";

export const useAdminStore = defineStore("admin", {
  state: () => ({
    isLoggedIn: false,
    admin: null,
  }),
  actions: {
    async login(Password, DienThoai) {
      try {
        const { data, message } = await nhanVienAPI.login({
          Password,
          DienThoai,
        });

        if (data) {
          this.admin = data;
          this.isLoggedIn = true;
          alert(message);
        } else {
          console.error("Failed to login");
        }
      } catch (error) {
        console.error("Failed to login:", error);
      }
    },
    async setInfo(MSNV) {
      try {
        const { data } = await nhanVienAPI.getOne(MSNV);

        if (data) {
          this.admin = data;
        } else {
          console.error("Failed to get info");
        }
      } catch (error) {
        console.error("Failed to get info: ", error);
      }
    },
    logout() {
      this.isLoggedIn = false;
      this.admin = null;
    },
  },
});
