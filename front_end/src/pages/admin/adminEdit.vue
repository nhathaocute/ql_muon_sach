<script>
import { ref, onMounted } from "vue";
import router from "~/router";
import { sachAPI } from "~/services/Sach.service";
import { nhaXuatBanAPI } from "~/services/nhaXuatBan.service";
import { loaiSachAPI } from "~/services/loaiSach.service";

export default {
  setup() {
    const TenSach = ref("");
    const DonGia = ref("");
    const SoQuyen = ref("");
    const NamXuatBan = ref("");
    const MaNXB = ref("");
    const MaLoai = ref("");
    const TacGia = ref("");
    const HinhAnh = ref(null);
    const info = ref({});
    const types = ref([]);
    const nxbs = ref([]);

    const handlecreatetype = async () => {
      try {
        const res = await sachAPI.create({
          TenSach: TenSach.value,
          DonGia: +DonGia.value,
          SoQuyen: +SoQuyen.value,
          NamXuatBan: +NamXuatBan.value,
          MaNXB: MaNXB.value,
          MaLoai: MaLoai.value,
          TacGia: TacGia.value,
          HinhAnh: HinhAnh.value,
        });
        alert(res.message);
        router.push("/admin");
      } catch (e) {
        alert("that bai");
      }
    };

    const data = ref([]);

    const getData = async () => {
      try {
        const res = await sachAPI.getAll();
        if (res.errorCode == 0) {
          data.value = res.data;
        }
      } catch (e) {
        console.log(e);
      }
    };

    const getInfo = async (id) => {
      try {
        const res = await sachAPI.getOne(id);
        if (res.errorCode == 0) {
          return res.data;
        }
      } catch (err) {
        console.log(err);
      }
    };

    const handleClick = async (id) => {
      info.value = await getInfo(id);
    };

    const getTypes = async () => {
      try {
        const res = await loaiSachAPI.getAll();
        if (res.errorCode == 0) {
          types.value = res.data;
        }
      } catch (e) {
        console.log(e);
      }
    };

    const getNxbs = async () => {
      try {
        const res = await nhaXuatBanAPI.getAll();
        if (res.errorCode == 0) {
          nxbs.value = res.data;
        }
      } catch (e) {
        console.log(e);
      }
    };

    onMounted(async () => {
      await getData();
      await getNxbs();
      await getTypes();
    });

    return {
      TenSach,
      DonGia,
      SoQuyen,
      NamXuatBan,
      MaNXB,
      MaLoai,
      TacGia,
      HinhAnh,
      handlecreatetype,
      data,
      handleClick,
      info,
      types,
      nxbs,
    };
  },
};
</script>
<template>
  <form
    class="modal-dialog modal-dialog-scrollable"
    @submit.prevent="handlecreatetype"
  >
    <div class="modal-content form_add">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Thêm sách</h1>
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
            placeholder="Nhập tên sách"
            v-model="TenSach"
          />

          <select id="types" v-if="types" v-model="MaLoai">
            <option :value="el._id" v-for="el in types">
              {{ el.TenLoai }}
            </option>
          </select>
        </div>

        <div class="input-group input_box">
          <input
            type="text"
            class="form-control"
            placeholder="Nhập tên tác giả"
            v-model="TacGia"
          />

          <select id="nxbs" v-if="nxbs" v-model="MaNXB">
            <option :value="el._id" v-for="el in nxbs">
              {{ el.TenNXB }}
            </option>
          </select>
        </div>
        <div class="bao_input_add d-flex">
          <div class="input-group input_box">
            <span class="input-group-text input-add" id="addon-wrapping"
              ><i class="fa-solid fa-image"></i
            ></span>
            <input
              type="text"
              class="form-control"
              placeholder="Hình ảnh"
              v-model="HinhAnh"
            />
          </div>
          <div class="input-group input_box">
            <span class="input-group-text input-add" id="addon-wrapping"
              ><i class="fa-solid fa-layer-group"></i
            ></span>

            <input
              type="number"
              class="form-control"
              placeholder="Nhập số lượng"
              v-model="SoQuyen"
            />
          </div>
        </div>
        <div class="bao_input_add d-flex">
          <div class="input-group input_box">
            <span class="input-group-text input-add" id="addon-wrapping"
              ><i class="fa-solid fa-dong-sign"></i
            ></span>
            <input
              type="number"
              class="form-control"
              placeholder="Giá sách"
              v-model="DonGia"
            />
          </div>

          <div class="input-group input_box">
            <span class="input-group-text input-add" id="addon-wrapping"
              ><i class="fa-regular fa-calendar-days"></i
            ></span>
            <input
              type="number"
              class="form-control"
              placeholder="Nhập năm xuất bản"
              v-model="NamXuatBan"
            />
          </div>
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
</template>
<style lang="scss" scoped>
@import url("~/pages/admin/adminProduct.scss");
</style>
