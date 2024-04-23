<script>
export default {
  data() {
    return {
      navItems: [
        { label: "Thông tin", icon: "fa-solid fa-book" },
        { label: "Phiếu mượn", icon: "fa-solid fa-receipt" },
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
        <header class="px-5">
          <h2>hello user</h2>
          <div class="row">
            <div class="col-md-12">
              <h2>
                Chào mừng đến với
                <span class="logo-info">Book🕮lovers</span> Library!
              </h2>
            </div>
          </div>
        </header>
        <main>
          <div class="container py-4">
            <div class="row">
              <div class="body-user-frame">
                <router-view />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url("~/assets/scss/userFrame.scss");
</style>
