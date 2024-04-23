<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { ref, onMounted } from "vue";
import router from "~/router";
import { sachAPI } from "~/services/Sach.service";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
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

    onMounted(async () => {
      await getData();
    });

    return {
      modules: [Autoplay, Pagination, Navigation],
      data,
    };
  },
};
</script>
<template>
  <marquee class="thong-bao" behavior="" direction=""
    >thông báo website sẽ đóng cửa vào cuối tuần sau</marquee
  >

  <div class="container">
    <div class="row p-1">
      <div
        id="carouselExampleCaptions"
        class="carousel slide h-25"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="../../assets/images/carosel1.jpg"
              class="d-block w-100"
              style="max-height: 75vh"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5 class="title_slide">Kiến thức</h5>
              <p>
                Tìm kiếm sâu rộng trong thế giới của tri thức, trang web của
                chúng tôi là điểm đến lý tưởng để khám phá những trang sách đầy
                ắp kiến thức.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="../../assets/images/carosel2.jpg"
              class="d-block w-100"
              style="max-height: 75vh"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5 class="title_slide">Kinh nghiệm</h5>
              <p>
                Chia sẻ những kinh nghiệm sâu sắc, trang web của chúng tôi là
                nơi tập trung của những câu chuyện, bài học và kiến thức, tạo
                nên một kho tàng quý giá từ những hành trình và trải nghiệm đa
                dạng.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="../../assets/images/libary_0.jpg"
              class="d-block w-100"
              style="max-height: 75vh"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5 class="title_slide">Trải nghiệm</h5>
              <p>
                Khám phá thế giới qua góc nhìn cá nhân, từng trang sách của
                chúng tôi là không gian chia sẻ trải nghiệm, nơi mà mỗi câu
                chuyện là một mảnh ghép cuộc sống, kết nối cộng đồng và làm
                phong phú thêm cuộc hành trình của bạn.
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <div class="row">
      <h3 class="title-product">Khám phá cuốn sách tiếp theo của bạn</h3>
      <div
        class="col-md-3 col-sm-6"
        v-if="data"
        v-for="item in data"
        :key="item._id"
      >
        <div class="box-product">
          <div class="product-container">
            <img src="../../assets/images/a-doctor.jpg" alt="" />
            <div class="overlay">
              <button class="btn detail-book">
                <i class="fa-solid fa-ellipsis"></i>
              </button>
            </div>
          </div>
          <h2>{{ item.TenSach }}</h2>
          <p>{{ item.MaNXB?.TenNXB }}</p>
        </div>
      </div>

      <div class="row">
        <div class="dieuhuong-product">
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <span class="page-link so-trang-sp">Previous</span>
              </li>
              <li class="page-item">
                <span class="page-link so-trang-sp">1</span>
              </li>
              <li class="page-item">
                <span class="page-link so-trang-sp">2</span>
              </li>
              <li class="page-item">
                <span class="page-link so-trang-sp">3</span>
              </li>
              <li class="page-item">
                <span class="page-link so-trang-sp">Next</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <div class="row">
      <h3 class="title-product">Các sách gợi ý</h3>
      <div class="bao_slide">
        <swiper
          :slides-per-view="3"
          :spaceBetween="30"
          :centeredSlides="true"
          :autoplay="{
            delay: 4000,
            disableOnInteraction: true,
          }"
          :navigation="true"
          :modules="modules"
          class="mySwiper py-2"
        >
          <swiper-slide v-if="data" v-for="item in data" :key="item._id"
            ><div class="box-product">
              <div class="product-container">
                <img src="../../assets/images/a-doctor.jpg" alt="" />
                <div class="overlay">
                  <button class="btn detail-book">
                    <i class="fa-solid fa-ellipsis"></i>
                  </button>
                </div>
              </div>
              <h2>{{ item.TenSach }}</h2>
              <p>{{ item.MaNXB?.TenNXB }}</p>
            </div></swiper-slide
          >
        </swiper>
      </div>
    </div>
    <div class="row">
      <div class="col-md-5">
        <div class="content-img">
          <img
            class="img-content-libary"
            src="../../assets/images/thu-vien.webp"
            alt=""
          />
          <div class="bao-content-libary">
            <small>our story</small>
            <p class="content-img-libary">VÀI ĐIỀU VỀ THƯ VIỆN CHÚNG TÔI</p>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="content-libary-right">
          <h5>Dịch vụ Quản Lý Mượn Sách Thuận Tiện</h5>
          <p>
            Với hệ thống quản lý mượn sách hiện đại, việc mượn và trả sách tại
            Book🕮lovers Library chưa bao giờ đơn giản hơn. Bạn có thể dễ dàng
            tìm kiếm và đặt sách trực tuyến, cũng như theo dõi lịch sử mượn sách
            của mình thông qua tài khoản cá nhân.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import url("~/pages/home/home.scss");
.thong-bao {
  color: #0daf40;
  background-color: rgb(209, 231, 250);
  padding: 10px 0;
  border-radius: 10px;
  font-weight: bold;
  font-size: 20px;
}
</style>
