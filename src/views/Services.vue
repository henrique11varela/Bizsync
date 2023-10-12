<template>
    <div class="container">
        <banner text="Services" />
        <div class="services-grid">
            <Service v-for="(item, index) in serviceList" :item="item" :key="index" />
        </div>
    </div>
</template>

<script>
import banner from "../components/global/banner.vue"
import image1 from "../assets/services/1/1.jpg"
import image2 from "../assets/services/2/1.png"
import image3 from "../assets/services/3/1.png"
import image4 from "../assets/services/4/1.png"
import image5 from "../assets/services/5/1.png"
import image6 from "../assets/services/6/1.png"
import image7 from "../assets/services/7/1.png"
import Service from "../components/services/Service.vue";
export default {
    data() {
        return {
            serviceList: [
                {
                    title: "RJCars",
                    description: "desc test 1",
                    image: image1,
                },
                {
                    title: "LIFE CHANGER",
                    description: "desc test 2",
                    image: image2,
                },
                {
                    title: "Delícias Caseiras",
                    description: "desc test 3",
                    image: image3,
                },
                {
                    title: "Academia de Formação",
                    description: "desc test 4",
                    image: image4,
                },
                {
                    title: "DELÍCIAS CASEIRAS",
                    description: "desc test 5",
                    image: image5,
                },
                {
                    title: "Automobile",
                    description: "desc test 6",
                    image: image6,
                },
                {
                    title: "Aeromils Airlines",
                    description: "desc test 7",
                    image: image7,
                },
            ],
        };
    },
    components: {
        Service,
        banner,
    },
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
