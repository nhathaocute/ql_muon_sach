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
    const uTenSach = ref("");
    const uDonGia = ref("");
    const uSoQuyen = ref("");
    const uNamXuatBan = ref("");
    const uMaNXB = ref("");
    const uMaLoai = ref("");
    const uTacGia = ref("");
    const uHinhAnh = ref(null);
    const info = ref({});
    const types = ref([]);
    const nxbs = ref([]);
    const idbook = ref("");

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
        await getData();
      } catch (e) {
        alert("that bai");
      }
    };
    const handleupdate = async () => {
      try {
        const res = await sachAPI.update(idbook.value, {
          TenSach: uTenSach.value,
          DonGia: +uDonGia.value,
          SoQuyen: +uSoQuyen.value,
          NamXuatBan: +uNamXuatBan.value,
          MaNXB: uMaNXB.value,
          MaLoai: uMaLoai.value,
          TacGia: uTacGia.value,
          HinhAnh: uHinhAnh.value,
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

    const updateClick = async (id) => {
      idbook.value = id;
      const hung = await getInfo(id);
      console.log(hung);
      if (hung) {
        uTenSach.value = hung.TenSach;
        uDonGia.value = hung.DonGia;
        uSoQuyen.value = hung.SoQuyen;
        uNamXuatBan.value = hung.NamXuatBan;
        uMaNXB.value = hung.MaNXB._id;
        uMaLoai.value = hung.MaLoai._id;
        uTacGia.value = hung.TacGia;
        uHinhAnh.value = hung.HinhAnh;
      }
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
      uTenSach,
      uDonGia,
      uSoQuyen,
      uNamXuatBan,
      uMaNXB,
      uMaLoai,
      uTacGia,
      uHinhAnh,
      handlecreatetype,
      data,
      handleClick,
      info,
      types,
      nxbs,
      handleupdate,
      updateClick,
    };
  },
};
</script>
<template>
  <button
    type="button"
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
  </div>
  <div class="row">
    <div class="t-heard d-flex">
      <div class="field-heard col-md-1">id</div>
      <div class="field-heard col-md-2">Tên Sách</div>
      <div class="field-heard col-md-1">Hình Ảnh</div>
      <div class="field-heard col-md-1">Giá</div>
      <div class="field-heard col-md-2">Tác giả</div>
      <div class="field-heard col-md-1">Loại Sách</div>
      <div class="field-heard col-md-1">Nhà XB</div>
      <div class="field-heard col-md-1">Năm XB</div>
      <div class="field-heard col-md-1">Số Lượng</div>
      <div class="field-heard col-md-1">Thao Tác</div>
    </div>
  </div>
  <div class="row">
    <div
      class="t-body-product"
      data-toggle="tooltip"
      title="
      id: 3`12323212`
      Tên Sách: nha sach van nang
      Giá: 
      Tác giả: 
      Nhà XB: 
      Năm XB: 
      Số Lượng: 
      "
      v-if="data"
      v-for="item in data"
      :key="item._id"
    >
      <div class="t-body d-flex">
        <div class="field-body col-md-1">
          <p>{{ item._id }}</p>
        </div>
        <div class="field-body col-md-2">
          <p>{{ item.TenSach }}</p>
        </div>
        <div class="field-body col-md-1">
          <img
            class="img-product"
            :src="`/src/assets/images/${item.HinhAnh}`"
            alt=""
          />
        </div>
        <div class="field-body col-md-1">
          <p>{{ item.DonGia }}</p>
        </div>
        <div class="field-body col-md-2">
          <p>{{ item.TacGia }}</p>
        </div>
        <div class="field-body col-md-1">
          <p>{{ item.MaLoai?.TenLoai }}</p>
        </div>
        <div class="field-body col-md-1">
          <p>{{ item.MaNXB?.TenNXB }}</p>
        </div>
        <div class="field-body col-md-1">
          <p>{{ item.NamXuatBan }}</p>
        </div>
        <div class="field-body col-md-1">
          <p>{{ item.SoQuyen }}</p>
        </div>
        <div class="field-body thaotac col-md-1">
          <button
            class="edit"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            @click="handleClick(item._id)"
          >
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
              Chi tiết sách
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body body-view" v-if="info">
            <div class="row">
              <div class="col-md-6">
                <div class="img-left">
                  <img
                    class="img-product"
                    :src="`/src/assets/images/${info.HinhAnh}`"
                    alt=""
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="py-2">
                  id:
                  <span>{{ info._id }}</span>
                </div>
                <div class="py-2">
                  Tên sách:
                  <span>{{ info.TenSach }}</span>
                </div>
                <div class="py-2">
                  Giá:
                  <span>{{ info.DonGia }}</span>
                </div>
                <div class="py-2">
                  Tác giả:
                  <span>{{ info.TacGia }}</span>
                </div>
                <div class="py-2">
                  Nhà xuất bản:
                  <span>{{ info.MaNXB?.TenNXB }}</span>
                </div>
                <div class="py-2">
                  Loại Sách:
                  <span>{{ info.MaLoai?.TenLoai }}</span>
                </div>
                <div class="py-2">
                  Năm xuất bản:
                  <span>{{ info.NamXuatBan }}</span>
                </div>
                <div class="py-2">
                  Số lượng:
                  <span>{{ info.SoQuyen }}</span>
                </div>
              </div>
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
            <h1 class="modal-title fs-5" id="staticBackdropLabel">Sửa sách</h1>
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
                v-model="uTenSach"
              />

              <select id="types" v-if="types" v-model="uMaLoai">
                <option
                  :value="el._id"
                  v-for="el in types"
                  :selected="el._id === uMaLoai.value"
                >
                  {{ el.TenLoai }}
                </option>
              </select>
            </div>

            <div class="input-group input_box">
              <input
                type="text"
                class="form-control"
                placeholder="Nhập tên tác giả"
                v-model="uTacGia"
              />

              <select id="nxbs" v-if="nxbs" v-model="uMaNXB">
                <option
                  :value="el._id"
                  v-for="el in nxbs"
                  :selected="el._id === uMaNXB.value"
                >
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
                  v-model="uHinhAnh"
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
                  v-model="uSoQuyen"
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
                  v-model="uDonGia"
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
                  v-model="uNamXuatBan"
                />
              </div>
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
@import url("~/pages/admin/adminProduct.scss");
</style>
