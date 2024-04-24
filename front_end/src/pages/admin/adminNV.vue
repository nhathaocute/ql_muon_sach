<script>
import { ref, onMounted } from "vue";
import router from "~/router";
import { nhanVienAPI } from "~/services/nhanVien.service";

export default {
  setup() {
    const HoTenNV = ref("");
    const ChucVu = ref("");
    const DienThoai = ref("");
    const Password = ref("");
    const DiaChi = ref("");
    const info = ref({});

    const handleRegister = async () => {
      try {
        const res = await nhanVienAPI.register({
          HoTenNV: HoTenNV.value,
          ChucVu: ChucVu.value,
          DienThoai: DienThoai.value,
          Password: Password.value,
          DiaChi: DiaChi.value,
        });
        alert(res.message);
        await getData();
      } catch (e) {
        alert("that bai");
      }
    };

    const data = ref([]);
    const getData = async () => {
      try {
        const res = await nhanVienAPI.getAll();
        if (res.errorCode == 0) {
          data.value = res.data;
        }
      } catch (e) {
        console.log(e);
      }
    };

    const getInfo = async (id) => {
      try {
        const res = await nhanVienAPI.getOne(id);
        if (res.data) {
          return res.data;
        }
      } catch (err) {
        console.log(err);
      }
    };

    const handleClick = async (id) => {
      info.value = await getInfo(id);
      console.log(info.value);
    };

    onMounted(async () => {
      await getData();
    });
    return {
      HoTenNV,
      ChucVu,
      DienThoai,
      DiaChi,
      Password,
      handleRegister,
      data,
      handleClick,
      info,
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
      @submit.prevent="handleRegister"
      class="modal-dialog modal-dialog-scrollable"
    >
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
              v-model="HoTenNV"
            />
          </div>

          <div class="input-group input_box">
            <p class="px-3">chon chuc vu</p>

            <select v-model="ChucVu">
              <option value="Nhân viên">Nhân viên</option>
              <option value="Quản lý">Quản lý</option>
            </select>
          </div>
          <div class="input-group input_box">
            <span class="input-group-text input-add" id="addon-wrapping"
              ><i class="fa-solid fa-mobile-screen-button"></i
            ></span>
            <input
              type="text"
              class="form-control"
              placeholder="Số điện thoại"
              v-model="DienThoai"
            />
          </div>
          <div class="input-group input_box">
            <span class="input-group-text input-add" id="addon-wrapping"
              ><i class="fa-solid fa-mobile-screen-button"></i
            ></span>
            <input
              type="text"
              class="form-control"
              placeholder="Địa chỉ"
              v-model="DiaChi"
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
              v-model="Password"
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
      <div class="field-heard col-md-1">id</div>
      <div class="field-heard col-md-2">Tên nhân viên</div>
      <div class="field-heard col-md-2">Chức vụ</div>
      <div class="field-heard col-md-2">SĐT</div>
      <div class="field-heard col-md-4">Địa chỉ</div>
      <div class="field-heard col-md-1">Thao tác</div>
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
        <div class="field-body col-md-1">
          <p>{{ item._id }}</p>
        </div>
        <div class="field-body col-md-2">
          <p>{{ item.HoTenNV }}</p>
        </div>
        <div class="field-body col-md-2">
          <p>{{ item.ChucVu }}</p>
        </div>
        <div class="field-body col-md-2">
          <p>{{ item.DienThoai }}</p>
        </div>
        <div class="field-body col-md-4">
          <p>
            {{ item.DiaChi }}
          </p>
        </div>

        <div class="field-body thaotac col-md-1">
          <button
            class="edit"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            @click="handleClick(item._id)"
          >
            <i class="fa-solid fa-pen-nib"></i>
          </button>
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
              Chi tiết nhân viên
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body body-view" v-if="info">
            <div class="py-2">
              id:
              <span>{{ info._id }}</span>
            </div>
            <div class="py-2">
              Tên nhân viên:
              <span>{{ info.HoTenNV }}</span>
            </div>
            <div class="py-2">
              Chức vụ:
              <span>{{ info.ChucVu }}</span>
            </div>
            <div class="py-2">
              SĐT:
              <span>{{ info.DienThoai }}</span>
            </div>
            <div class="py-2">
              Địa chỉ:
              <span>{{ info.DiaChi }}</span>
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
@import url("~/pages/admin/adminPhieu.scss");
</style>
