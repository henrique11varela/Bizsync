<template>
    <div class="master">
        <HeaderComponent />
        <div class="view">
            <router-view></router-view>
        </div>
        <FooterComponent />
    </div>
</template>

<script>
import HeaderComponent from "../components/master/HeaderComponent.vue";
import FooterComponent from "../components/master/FooterComponent.vue";

export default { components: { HeaderComponent, FooterComponent } };
</script>

<style scoped>
.master {
    width: 100%;
    min-height: 100dvh;
}
.view {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
