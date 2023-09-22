<template>
    <div class="base">
        <div class="services-grid">
            <Service v-for="(item, index) in serviceList" :item="item" :key="index" />
        </div>
    </div>
</template>

<script>
import imgTest from "../assets/services/Fundo_ATEC.png";
import Service from "../components/services/Service.vue";
    export default {
        computed: {
            serviceList(){
                let list = [
                    {
                        title: "title test 1",
                        description: "desc test 1",
                        image: imgTest
                    },
                    {
                        title: "title test 2",
                        description: "desc test 2",
                        image: imgTest 
                    }
                ]
                return list
            }
        },
        components: { Service }
    }
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