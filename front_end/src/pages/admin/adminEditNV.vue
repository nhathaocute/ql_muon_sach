<script>
// import { ref, onMounted } from "vue";
// import router from "~/router";
// import { docGiaAPI } from "~/services/docGia.service";

// export default {
//   setup() {
//     const TenNV = ref("");
//     const ChucVu = ref("");
//     const DienThoai = ref("");
//     const Password = ref("");
//     const DiaChi = ref("");

//     const handleRegister = async () => {
//       if (Password.value == passwordSub.value) {
//         try {
//           const res = await docGiaAPI.register({
//             Ten: Ten.value,
//             HoLot: HoLot.value,
//             DienThoai: DienThoai.value,
//             Password: Password.value,
//           });
//           alert(res.message);
//           router.push("/login");
//         } catch (e) {
//           alert("that bai");
//         }
//       }
//     };
//     return {
//       hide,
//       toggle,
//       Password,
//       passwordSub,
//       Ten,
//       HoLot,
//       DienThoai,
//       handleRegister,
//     };

//     //
//   },
// };
</script>
<template>
  <button
    class="add-product"
    data-bs-toggle="modal"
    data-bs-target="#staticBackdrop"
  >
    <i class="fa-solid fa-pen-nib"></i>
  </button>
  <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content form_add">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">
            Thêm Nhân Viên
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="input-group input_box">
            <span class="input-group-text input-add" id="basic-addon1"
              ><i class="fa-solid fa-file-signature"></i
            ></span>
            <input
              type="text"
              class="form-control"
              placeholder="Nhập tên nhân viên"
            />
          </div>

          <div class="input-group input_box">
            <input type="text" class="form-control" placeholder="Địa chỉ" />
            <button
              class="btn btn-outline-secondaryn input-add"
              type="button"
              data-bs-toggle="dropdown"
            >
              Chọn chức vụ<i class="fa-solid fa-sort-down ml-2"></i>
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
              <li><a class="dropdown-item" href="#">Nhân Viên</a></li>
              <li><a class="dropdown-item" href="#">Quản Lý</a></li>
            </ul>
          </div>
          <div class="input-group input_box">
            <span class="input-group-text input-add" id="addon-wrapping"
              ><i class="fa-solid fa-mobile-screen-button"></i
            ></span>
            <input
              type="text"
              class="form-control"
              placeholder="Số điện thoại"
            />
          </div>
          <div class="input-group input_box">
            <span class="input-group-text input-add" id="addon-wrapping"
              ><i class="fa-solid fa-lock"></i
            ></span>
            <input
              type="password"
              class="form-control"
              placeholder="Nhập mật khẩu"
            />
          </div>
          <div class="input-group input_box">
            <span class="input-group-text input-add" id="addon-wrapping"
              ><i class="fa-solid fa-lock"></i
            ></span>
            <input
              type="password"
              class="form-control"
              placeholder="Nhập lại mật khẩu"
            />
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn_close" data-bs-dismiss="modal">
            Đóng
          </button>
          <button type="button" class="btn btn_accept">Thêm</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import url("~/pages/admin/adminPhieu.scss");
</style>
