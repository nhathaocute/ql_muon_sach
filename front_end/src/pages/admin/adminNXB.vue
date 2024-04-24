<script>
import { ref, onMounted } from "vue";
import router from "~/router";
import { nhaXuatBanAPI } from "~/services/nhaXuatBan.service";
export default {
  setup() {
    const TenNXB = ref("");
    const DiaChi = ref("");
    const uTenNXB = ref("");
    const uDiaChi = ref("");
    const info = ref({});

    const idbook = ref("");

    const handlecreatenxb = async () => {
      try {
        const res = await nhaXuatBanAPI.create({
          TenNXB: TenNXB.value,
          DiaChi: DiaChi.value,
        });
        alert(res.message);
        await getData();
      } catch (e) {
        alert("that bai");
      }
    };

    const handleupdate = async () => {
      try {
        const res = await nhaXuatBanAPI.update(idbook.value, {
          TenNXB: uTenNXB.value,
          DiaChi: uDiaChi.value,
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
        const res = await nhaXuatBanAPI.getAll();
        if (res.errorCode == 0) {
          data.value = res.data;
        }
      } catch (e) {
        console.log(e);
      }
    };

    const getInfo = async (id) => {
      try {
        const res = await nhaXuatBanAPI.getOne(id);
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

    const updateClick = async (id) => {
      idbook.value = id;
      const hung = await getInfo(id);
      console.log(hung);
      if (hung) {
        uTenNXB.value = hung.TenNXB;
        uDiaChi.value = hung.DiaChi;
      }
    };

    onMounted(async () => {
      await getData();
    });
    return {
      TenNXB,
      DiaChi,
      uTenNXB,
      uDiaChi,
      handlecreatenxb,
      data,
      handleClick,
      info,
      handleupdate,
      updateClick,
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
  <div class="row">
    <div class="t-heard d-flex">
      <div class="field-heard col-md-1">id</div>
      <div class="field-heard col-md-2">Tên nhà xuất bản</div>
      <div class="field-heard col-md-8">Địa chỉ</div>
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
          <p>{{ item.TenNXB }}</p>
        </div>
        <div class="field-body col-md-8">
          <p>
            {{ item.DiaChi }}
          </p>
        </div>

        <div class="field-body thaotac col-md-1">
          <button class="edit" @click="handleClick(item._id)">
            <i class="fa-solid fa-eye"></i>
          </button>
          <button
            class="delete"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop1"
            @click="updateClick(item._id)"
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
              Chi tiết nhà xuất bản
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
              Tên nhà xuất bản:
              <span>{{ info.TenNXB }}</span>
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
    <div
      class="modal fade"
      id="staticBackdrop1"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <form
        class="modal-dialog modal-dialog-scrollable"
        @submit.prevent="handleupdate"
      >
        <div class="modal-content form_add">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">
              Sửa nhà xuất bản
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
                placeholder="Nhập tên sách"
                v-model="uTenNXB"
              />
            </div>

            <div class="input-group input_box">
              <input
                type="text"
                class="form-control"
                placeholder="Nhập tên tác giả"
                v-model="uDiaChi"
              />
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn_close" data-bs-dismiss="modal">
              Đóng
            </button>
            <button type="submit" class="btn btn_accept">Sửa</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import url("~/pages/admin/adminPhieu.scss");
</style>
