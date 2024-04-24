<script>
import { useUserStore } from "~/store/userStore";
import { useRoute } from "vue-router";
import { theoDoiMuonSachAPI } from "~/services/theoDoiMuonSach.service";
import { sachAPI } from "~/services/Sach.service";
import { ref, onMounted } from "vue";
import router from "~/router";
export default {
  setup() {
    const route = useRoute();
    const MSB = ref(route.query.id);
    const data = ref([]);
    const ngaymuon = ref("");
    const ngaytra = ref("");
    const userStore = useUserStore();
    const getData = async () => {
      try {
        const res = await sachAPI.getOne(MSB.value);
        if (res.errorCode == 0) {
          data.value = res.data;
        }
      } catch (e) {
        console.log(e);
      }
    };
    const item = ref([]);
    const getRandomProduct = async () => {
      try {
        const res = await sachAPI.getRandom(MSB.value);
        if (res.errorCode == 0) {
          item.value = res.data;
        }
      } catch (err) {
        console.log(err);
      }
    };

    const handlesubmit = async () => {
      try {
        if (userStore.user?._id) {
          const submit = await theoDoiMuonSachAPI.create({
            NgayMuon: ngaymuon.value,
            NgayTra: ngaytra.value,
            MaDocGia: userStore.user._id,
            MaSach: MSB.value,
          });
          alert(submit.message);
        } else {
          router.push("/login");
        }
      } catch (e) {
        console.log("that bai");
      }
    };

    onMounted(async () => {
      await getData();
      await getRandomProduct();
    });
    return {
      data,
      item,
      ngaymuon,
      ngaytra,
      handlesubmit,
    };
  },
};
</script>
<template>
  <div class="container py-4" v-if="data">
    <div class="row">
      <div class="col-md-12">
        <h4>CHI TIẾT SÁCH</h4>
        <h2>{{ data.TenSach }}</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-md-9 col-sm-6">
        <div class="row pt-3">
          <div class="col-md-4">
            <div class="img-product">
              <img :src="`/src/assets/images/${data.HinhAnh}`" alt="" />
            </div>
          </div>
          <div class="col-md-8">
            <div class="info_product">
              <div class="body_detail">
                <div>
                  Tên tác giả: <span class="info-name">{{ data.TacGia }}</span>
                </div>
                <hr />
                <div>
                  Năm xuất bản: <span>{{ data.NamXuatBan }}</span>
                </div>
                <div class="description">
                  Giá: <span>{{ data.DonGia }}</span>
                </div>
                <div class="description">
                  Số quyển: <span>{{ data.SoQuyen }}</span>
                </div>

                <div class="description">
                  Nhà xuất bản: <span>{{ data.MaNXB?.TenNXB }}</span>
                </div>
                <div class="description">
                  Loại: <span>{{ data.MaLoai?.TenLoai }}</span>
                </div>
              </div>
            </div>
            <form @submit.prevent="handlesubmit" class="form_product_want pt-3">
              <legend class="title-legend-detail">Bạn muốn mượn sách?</legend>
              <div class="title-form-muon">
                Vui lòng chọn ngày(mượn, trả) và ấn nút mượn. xin cảm ơn!
              </div>
              <div class="row">
                <div class="col-md-6 ngay">
                  <label for="ngay_muon">Chọn ngày mượn: </label>
                </div>
                <div class="col-md-6 input-ngay">
                  <input type="date" name="ngay_muon" v-model="ngaymuon" />
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 ngay">
                  <label for="ngay_tra">Chọn ngày trả: </label>
                </div>
                <div class="col-md-6 input-ngay">
                  <input type="date" name="ngay_tra" v-model="ngaytra" />
                </div>
              </div>
              <div
                class="col-md-12 mt-4 w-100 d-flex align-items-center justify-content-center"
              >
                <button type="submit" class="button-muon">Mượn ngay</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6">
        <h3>gợi ý</h3>
        <div class="row">
          <div
            class="col-md-6"
            v-if="item"
            v-for="data in item"
            :key="data._id"
          >
            <div class="box-product">
              <div class="product-container">
                <img :src="`/src/assets/images/${data.HinhAnh}`" alt="" />
                <div class="overlay">
                  <router-link
                    :to="'/detail?id=' + data._id"
                    class="btn detail-book text-decoration-none"
                    ><i class="fa-solid fa-ellipsis"></i
                  ></router-link>
                </div>
              </div>
              <h2 class="name-product-suggest">{{ data.TenSach }}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import url("~/pages/detail/detail.scss");
</style>
