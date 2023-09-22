<template>
    <div>
        <HeaderComponent />

        <FooterComponent />
    </div>
</template>

<script>
import HeaderComponent from "../components/master/HeaderComponent.vue";
import FooterComponent from "../components/master/FooterComponent.vue";
export default {
    components: { Header, Footer },
};
</script>

<style lang="scss" scoped></style>
