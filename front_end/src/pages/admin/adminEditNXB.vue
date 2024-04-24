<script>
// import { ref, onMounted } from "vue";
// import router from "~/router";
// import { nhaXuatBanAPI } from "~/services/nhaXuatBan.service";
// export default {
//   setup() {
//     const TenNXB = ref("");
//     const DiaChi = ref("");
//     const handlecreatenxb = async () => {
//       try {
//         const res = await nhaXuatBanAPI.create({
//           TenNXB: TenNXB.value,
//           DiaChi: DiaChi.value,
//         });
//         alert(res.message);
//         await getData();
//       } catch (e) {
//         alert("that bai");
//       }
//     };
//     const data = ref([]);
//     const getData = async () => {
//       try {
//         const res = await nhaXuatBanAPI.getAll();
//         if (res.errorCode == 0) {
//           data.value = res.data;
//         }
//       } catch (e) {
//         console.log(e);
//       }
//     };

//     onMounted(async () => {
//       await getData();
//     });
//     return {
//       TenNXB,
//       DiaChi,
//       handlecreatenxb,
//       data,
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
    <form
      @submit.prevent="handlecreatenxb"
      class="modal-dialog modal-dialog-scrollable"
    >
      <div class="modal-content form_add">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">
            Thêm Nhà Xuất Bản
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
              placeholder="Nhập tên nhà xuất bản"
              v-model="TenNXB"
            />
          </div>

          <div class="input-group input_box">
            <span class="input-group-text input-add" id="addon-wrapping"
              ><i class="fa-solid fa-image"></i
            ></span>
            <input
              type="text"
              class="form-control"
              placeholder="Địa chỉ"
              v-model="DiaChi"
            />
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn_close" data-bs-dismiss="modal">
            Đóng
          </button>
          <button type="submit" class="btn btn_accept">Thêm</button>
        </div>
      </div>
    </form>
  </div>
</template>
<style lang="scss" scoped>
@import url("~/pages/admin/adminPhieu.scss");
</style>
