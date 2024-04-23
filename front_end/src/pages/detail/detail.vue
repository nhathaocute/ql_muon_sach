<script></script>
<template>
  <div class="container py-4">
    <div class="row">
      <div class="col-md-12">
        <h4>CHI TIẾT SÁCH</h4>
        <h2>BỎ LÀM SIMP CHÚA, TA CÓ TRONG TAY CẢ TỈ THẦN HÀO</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-md-9 col-sm-6">
        <div class="row pt-3">
          <div class="col-md-4">
            <div class="img-product">
              <img src="../../assets/images/a-doctor.jpg" alt="" />
            </div>
          </div>
          <div class="col-md-8">
            <div class="info_product">
              <div class="body_detail">
                <div>Tên tác giả: <span class="info-name">hao</span></div>
                <hr />
                <div>Năm xuất bản: <span>2002</span></div>
                <div class="description">Giá: <span>2002</span></div>
                <div class="description">Số quyển: <span>2002</span></div>

                <div class="description">
                  Nhà xuất bản: <span>tran nhat hao</span>
                </div>
              </div>
            </div>
            <fieldset class="form_product_want pt-3">
              <legend class="title-legend-detail">Bạn muốn mượn sách?</legend>
              <div class="title-form-muon">
                Vui lòng chọn ngày(mượn, trả) và ấn nút mượn. xin cảm ơn!
              </div>
              <div class="row">
                <div class="col-md-6 ngay">
                  <label for="ngay_muon">Chọn ngày mượn: </label>
                </div>
                <div class="col-md-6 input-ngay">
                  <input type="date" name="ngay_muon" />
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 ngay">
                  <label for="ngay_tra">Chọn ngày trả: </label>
                </div>
                <div class="col-md-6 input-ngay">
                  <input type="date" name="ngay_tra" />
                </div>
              </div>
              <div
                class="col-md-12 mt-4 w-100 d-flex align-items-center justify-content-center"
              >
                <button class="button-muon">Mượn ngay</button>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6">
        <h3>gợi ý</h3>
        <div class="row">
          <div class="col-md-6">
            <div class="box-product">
              <div class="product-container">
                <img src="../../assets/images/a-doctor.jpg" alt="" />
                <div class="overlay">
                  <button class="btn detail-book">
                    <i class="fa-solid fa-ellipsis"></i>
                  </button>
                </div>
              </div>
              <h2 class="name-product-suggest">Product Name1</h2>
            </div>
          </div>
          <div class="col-md-6">
            <div class="box-product">
              <div class="product-container">
                <img src="../../assets/images/a-doctor.jpg" alt="" />
                <div class="overlay">
                  <button class="btn detail-book">
                    <i class="fa-solid fa-ellipsis"></i>
                  </button>
                </div>
              </div>
              <h2 class="name-product-suggest">Product Name2</h2>
            </div>
          </div>
          <div class="col-md-6">
            <div class="box-product">
              <div class="product-container">
                <img src="../../assets/images/a-doctor.jpg" alt="" />
                <div class="overlay">
                  <button class="btn detail-book">
                    <i class="fa-solid fa-ellipsis"></i>
                  </button>
                </div>
              </div>
              <h2 class="name-product-suggest">Product Name3</h2>
            </div>
          </div>
          <div class="col-md-6">
            <div class="box-product">
              <div class="product-container">
                <img src="../../assets/images/a-doctor.jpg" alt="" />
                <div class="overlay">
                  <button class="btn detail-book">
                    <i class="fa-solid fa-ellipsis"></i>
                  </button>
                </div>
              </div>
              <h2 class="name-product-suggest">Product Name4</h2>
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
