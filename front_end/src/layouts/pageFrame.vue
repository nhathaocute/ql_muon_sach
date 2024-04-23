<script>
import { ref, onMounted } from "vue";
import router from "~/router";
import { sachAPI } from "~/services/Sach.service";
import { nhaXuatBanAPI } from "~/services/nhaXuatBan.service";
import { loaiSachAPI } from "~/services/loaiSach.service";
import CommonUtils from "~/utils/img";

export default {
  setup() {
    const types = ref([]);

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

    onMounted(async () => {
      await getTypes();
    });

    return {
      types,
    };
  },
};
</script>
<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="logo animate__backInLeft">Book🕮lovers</div>
        </div>
        <div class="col-md-4">
          <form class="form-search">
            <input
              class="form-control"
              type="search"
              placeholder="Tìm Kiếm"
              aria-label="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              <i class="fa fa-search"></i>
            </button>
          </form>
        </div>
        <div class="col-md-4">
          <div class="header-right">
            <button class="btn btn-primary btn-header">Đăng Nhập</button>
            <button class="btn btn-primary btn-header">Đăng Ký</button>
            <button
              class="btn btn-header"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <i class="fa-solid fa-list"></i>
            </button>

            <div
              class="offcanvas offcanvas-end show-list-right"
              tabindex="-1"
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
            >
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasRightLabel"></h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="offcanvas-body">
                <ul style="list-style-type: none">
                  <li class="header-nav">
                    <p class="d-inline-flex gap-1 text-nav">Trang chủ</p>
                  </li>
                  <li class="header-nav">
                    <p class="d-inline-flex gap-1 text-nav">
                      Thông tin thư viện
                    </p>
                  </li>
                  <li class="header-nav">
                    <p
                      class="d-inline-flex gap-1 text-nav"
                      data-bs-toggle="collapse"
                      href="#multiCollapseExample1"
                      role="button"
                      aria-expanded="false"
                      aria-controls="multiCollapseExample1"
                    >
                      loại sách <i class="fa-solid fa-sort-down px-2"></i>
                    </p>

                    <div class="row">
                      <div class="col">
                        <select
                          class="multi-collapse"
                          id="types"
                          v-if="types"
                          v-model="MaLoai"
                        >
                          <option :value="el._id" v-for="el in types">
                            {{ el.TenLoai }}
                          </option>
                        </select>
                      </div>
                    </div>
                  </li>

                  <li class="header-nav">
                    <p class="d-inline-flex gap-1 text-nav">Liên hệ</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <main><router-view /></main>
  <div class="group-footer-contact">
    <div class="container">
      <div class="row">
        <div class="col-4">
          <h4>CHI TIẾT LIÊN HỆ</h4>
          <ul>
            <li>Địa chỉ: 11F5/1, KV3.An Khánh, Q.Ninh Kiều, TP.Cần Thơ</li>
            <li>Số điện thoại: 0945477411</li>
            <li>Số zalo: 0945477411</li>
            <li>Email: haob2014831@students.ctu.edu.vn</li>
            <li>
              Theo dõi chúng tôi trên mạng xã hội:
              https://www.facebook.com/nhathaovutru
            </li>
          </ul>
        </div>
        <div class="col-4">
          <h4>Book🕮lovers</h4>
          <ul>
            <li>Trang chủ</li>
            <li>Thông tin liên hệ</li>
            <li>Liên hệ</li>
          </ul>
        </div>
        <div class="col-4">
          <h4>THEO DÕI CHÚNG TÔI</h4>
        </div>
      </div>
    </div>
  </div>
  <footer>
    <div class="container">
      <div class="footer">
        <p>&copy; 2024 Hao template. Bản quyền thuộc về Hào</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import url("~/assets/scss/pageFrame.scss");
</style>
