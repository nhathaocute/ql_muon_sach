<script>
import { ref, onMounted } from "vue";
import { theoDoiMuonSachAPI } from "~/services/theoDoiMuonSach.service";
export default {
  setup() {
    const data = ref([]);

    const getData = async () => {
      try {
        const res = await theoDoiMuonSachAPI.getAll(0);
        if (res.data) {
          data.value = res.data;
        }
      } catch (e) {
        console.error(e);
      }
    };

    const convertDate = (time) => {
      const date = new Date(time);
      return date.toISOString().split("T")[0];
    };

    onMounted(async () => {
      await getData();
    });

    const handleCheck = async (data) => {
      try {
        const res = await theoDoiMuonSachAPI.update(
          data.MaDocGia?._id,
          data.MaSach?._id,
          data.NgayMuon,
          1
        );
        if (res.data) {
          alert(res.message);
          await getData();
        }
      } catch (e) {
        alert("That bai");
      }
    };

    return {
      data,
      convertDate,
      handleCheck,
    };
  },
};
</script>
<template>
  <div class="row">
    <div class="t-heard d-flex">
      <div class="field-heard col-md-2">Tên độc giả</div>
      <div class="field-heard col-md-3">Tên sách</div>
      <div class="field-heard col-md-3">Ngày mượn</div>
      <div class="field-heard col-md-3">Ngày trả</div>
      <div class="field-heard col-md-2">Thao tác</div>
    </div>
  </div>
  <div class="row">
    <div
      class="t-body-product"
      v-if="data"
      v-for="item in data"
      :key="item._id"
    >
      <div class="t-body d-flex">
        <div class="field-body col-md-2">
          <p>{{ item.MaDocGia?.HoLot + " " + item.MaDocGia?.Ten }}</p>
        </div>
        <div class="field-body col-md-3">
          <p>{{ item.MaSach?.TenSach }}</p>
        </div>
        <div class="field-body col-md-3">
          <p>{{ convertDate(item.NgayMuon) }}</p>
        </div>
        <div class="field-body col-md-3">
          <p>{{ convertDate(item.NgayTra) }}</p>
        </div>

        <div class="field-body thaotac col-md-2">
          <button class="edit" @click="() => handleCheck(item)">
            <i class="fa-solid fa-circle-check"></i>
          </button>
          <button class="delete">
            <i class="fa-regular fa-circle-xmark"></i>
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
              Chi tiết phiếu đang chờ
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
              Tên độc giả:
              <span>nha sach van nang</span>
            </div>
            <div class="py-2">
              Tên sách:
              <span>nha sach van nang</span>
            </div>
            <div class="py-2">
              Ngày mượn:
              <span>nha sach van nang</span>
            </div>
            <div class="py-2">
              Ngày trả:
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
@import url("~/pages/admin/adminPhieu.scss");
</style>
