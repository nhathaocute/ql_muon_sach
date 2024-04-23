<script>
import { ref, onMounted } from "vue";
import router from "~/router";
import { docGiaAPI } from "~/services/docGia.service";

export default {
  setup() {
    const Ten = ref("");
    const HoLot = ref("");
    const DienThoai = ref("");
    const Password = ref("");
    const passwordSub = ref("");
    const hide = ref(false);
    const toggle = async () => {
      hide.value = !hide.value;
    };
    const handleRegister = async () => {
      if (Password.value == passwordSub.value) {
        try {
          const res = await docGiaAPI.register({
            Ten: Ten.value,
            HoLot: HoLot.value,
            DienThoai: DienThoai.value,
            Password: Password.value,
          });
          alert(res.message);
          router.push("/login");
        } catch (e) {
          alert("that bai");
        }
      }
    };
    return {
      hide,
      toggle,
      Password,
      passwordSub,
      Ten,
      HoLot,
      DienThoai,
      handleRegister,
    };

    //
  },
};
</script>
<template>
  <div class="form-log">
    <div class="container">
      <h2>Đăng Ký</h2>
      <div class="form-log-father">
        <span class="form-log-child">
          <span class="form-log-fi">
            <i class="fa-regular fa-circle-user"></i>
          </span>
        </span>
        <form
          @submit.prevent="handleRegister"
          method="post"
          class="form-log-body"
        >
          <div class="bao-input">
            <i class="fa-solid fa-user-tie"></i>
            <input
              type="text"
              name="username"
              placeholder="Tên"
              required
              v-model="Ten"
            />
          </div>
          <div class="bao-input">
            <i class="fa-solid fa-file-signature"></i>
            <input
              type="text"
              name="username"
              placeholder="Họ"
              required
              v-model="HoLot"
            />
          </div>
          <div class="bao-input">
            <i class="fa-solid fa-mobile-screen-button"></i>
            <input
              type="text"
              name="username"
              placeholder="Số điện thoại"
              required
              v-model="DienThoai"
            />
          </div>
          <div class="bao-input">
            <i class="fa-solid fa-lock"></i>
            <input
              :type="hide ? 'text' : 'password'"
              name="password"
              placeholder="Mật khẩu"
              required
              v-model="Password"
            />
            <i
              :class="`fa-solid ${hide ? 'fa-eye-slash' : 'fa-eye'}`"
              id="togglePassword"
              @click="toggle"
            ></i>
          </div>
          <div class="bao-input">
            <i class="fa-solid fa-lock"></i>
            <input
              :type="hide ? 'text' : 'password'"
              name="password"
              placeholder="Nhập lại mật khẩu"
              required
              v-model="passwordSub"
            />
            <i
              :class="`fa-solid ${hide ? 'fa-eye-slash' : 'fa-eye'}`"
              id="togglePassword"
              @click="toggle"
            ></i>
          </div>
          <button class="btn btn-submit-log" type="submit">Đăng Ký</button>
        </form>
        <div class="sigup d-flex">
          <p class="px-3">bạn chưa có tài khoản?</p>
          <router-link to="/login" class="form-group__link"
            >đăng nhập ngay</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import url("~/pages/form/kyNhap.scss");
</style>
