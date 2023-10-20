<template>
    <div class="container">
        <banner text="Serviços" />
        <div class="services-grid">
            <Service v-for="(item, index) in serviceList" :item="item" :key="index" />
        </div>
    </div>
</template>

<script>
import banner from "../components/global/banner.vue"
import Service from "../components/services/Service.vue"
import jsonList from "../assets/services/services.json"

export default {
    data() {
        return {
            serviceList: jsonList,
        };
    },
    components: {
        Service,
        banner,
    }
};
</script>

<style scoped>
.base {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.services-grid {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
}
</style>
