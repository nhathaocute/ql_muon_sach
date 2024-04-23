<script>
export default {
  data() {
    return {
      navItems: [
        { label: "Sách", icon: "fa-solid fa-book" },
        { label: "Thể loại", icon: "fa-solid fa-table-list" },
        { label: "Phiếu mượn", icon: "fa-solid fa-receipt" },
        { label: "Phiếu mượn chờ", icon: "fa-solid fa-spinner" },
        { label: "Đã duyệt phiếu", icon: "fa-solid fa-check" },
        { label: "Nhân viên", icon: "fa-regular fa-address-book" },
        { label: "Nhà xuất bản", icon: "fa-solid fa-building" },
        { label: "Đăng xuất", icon: "fa-solid fa-right-from-bracket" },
      ],
      activeIndex: 0,
    };
  },
  methods: {
    toggleActive(index) {
      this.activeIndex = index;
    },
  },
};
</script>
<template>
  <div class="row reset-css-row">
    <div class="col-md-2 reset-css-admin">
      <div class="left-admin">
        <div class="logo">Book🕮lovers</div>
        <nav>
          <div
            v-for="(item, index) in navItems"
            :key="index"
            :class="{ 'item-nav-admin': true, active: activeIndex === index }"
            @click="toggleActive(index)"
          >
            <i :class="item.icon"></i>
            <p>{{ item.label }}</p>
          </div>
        </nav>
      </div>
    </div>
    <div class="col-md-10 reset-css-admin">
      <div class="body-admin">
        <div class="container py-4">
          <div class="row">
            <div class="col-md-12">
              <h4>Xin chào Admin</h4>
              <div class="title-admin d-flex justify-content-between">
                <h2>
                  Chào mừng đến với
                  <span class="logo-info">Book🕮lovers</span> Admin!
                </h2>
                <h1>sach</h1>
              </div>
            </div>
          </div>
          <main><router-view /></main>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url("~/assets/scss/adminFrame.scss");
</style>
