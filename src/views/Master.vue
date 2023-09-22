<template>
    <div>
        <HeaderComponent />
        <router-view></router-view>
        <FooterComponent />
    </div>
</template>

<script>
import HeaderComponent from "../components/master/HeaderComponent.vue";
import FooterComponent from "../components/master/FooterComponent.vue";

export default { components: { HeaderComponent, FooterComponent } };
</script>

<style scoped></style>
