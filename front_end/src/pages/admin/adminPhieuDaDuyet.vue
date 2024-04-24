<script>
import { ref, onMounted } from "vue";
import { theoDoiMuonSachAPI } from "~/services/theoDoiMuonSach.service";
export default {
  setup() {
    const data = ref([]);

    const getData = async () => {
      try {
        const res = await theoDoiMuonSachAPI.getAll(1);
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
          2
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
      <div class="field-heard col-md-3">Tên độc giả</div>
      <div class="field-heard col-md-3">Tên sách</div>
      <div class="field-heard col-md-3">Ngày mượn</div>
      <div class="field-heard col-md-3">Ngày trả</div>
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
        <div class="field-body col-md-3">
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
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import url("~/pages/admin/adminPhieu.scss");
</style>
