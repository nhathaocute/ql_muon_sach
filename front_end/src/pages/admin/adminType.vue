<script>
import { ref, onMounted } from "vue";
import router from "~/router";
import { loaiSachAPI } from "~/services/loaiSach.service";
export default {
  setup() {
    const TenLoai = ref("");
    const handlecreatetype = async () => {
      try {
        const res = await loaiSachAPI.create({
          TenLoai: TenLoai.value,
        });
        alert(res.message);
        router.push("/admintype");
      } catch (e) {
        alert("that bai");
      }
    };
    const data = ref([]);
    const getData = async () => {
      try {
        const res = await loaiSachAPI.getAll();
        if (res.errorCode == 0) {
          data.value = res.data;
        }
      } catch (e) {
        console.log(e);
      }
    };

    onMounted(async () => {
      await getData();
    });
    return {
      TenLoai,
      handlecreatetype,
      data,
    };

    //
  },
};
</script>
<template>
  <button
    class="add-product"
    data-bs-toggle="modal"
    data-bs-target="#staticBackdrop"
  >
    <i class="fa-solid fa-square-plus"></i>
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
      @submit.prevent="handlecreatetype"
      class="modal-dialog modal-dialog-scrollable"
    >
      <div class="modal-content form_add">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">
            Thêm Loại Sách
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
              placeholder="Nhập tên loại sách"
              v-model="TenLoai"
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
  <div class="row">
    <div class="t-heard d-flex">
      <div class="field-heard col-md-3">id</div>
      <div class="field-heard col-md-6">Tên loại</div>
      <div class="field-heard col-md-3">Thao tác</div>
    </div>
  </div>
  <div class="row">
    <div
      class="t-body-product"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
      v-if="data"
      v-for="item in data"
      :key="item._id"
    >
      <div class="t-body d-flex">
        <div class="field-body col-md-3">
          <p>{{ item._id }}</p>
        </div>
        <div class="field-body col-md-6">
          <p>{{ item.TenLoai }}</p>
        </div>

        <div class="field-body thaotac col-md-3">
          <button class="edit"><i class="fa-solid fa-pen-nib"></i></button>
          <button class="delete"><i class="fa-solid fa-trash-can"></i></button>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              Chi tiết loại
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body body-view">
            <div class="py-2">
              id:
              <span>3`12323212`</span>
            </div>
            <div class="py-2">
              Tên loại:
              <span>nha sach van nang</span>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import url("~/pages/admin/adminType.scss");
</style>
