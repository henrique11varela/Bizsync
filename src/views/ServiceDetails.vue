<template>
    <div class="container">
        <div style="display: flex;align-items: center;flex-direction: column;" v-if="activeService">
            <banner :text="activeService.title" style="width: calc(100% - 60px);" />

            <div class="service">
                <div class="text">
                    <h1>{{ activeService.description }}</h1>
                </div>
                <img
                    class="img"
                    :src="activeService.image"
                    :alt="activeService.title"
                />
            </div>

            <p style="white-space: pre-wrap;" v-html="activeService.details.description"></p>

            <img
                class="prints"
                v-for="item in activeService.details.images"
                :src="item"
                :alt="activeService.title"
                style="margin-top: 1rem"
            />
        </div>
        <div v-else>
            <h1>Fetching Data...</h1>
        </div>
    </div>
</template>

<script>
import banner from "../components/global/banner.vue";
import jsonList from "../assets/services/services.json";

export default {
    data() {
        return {
            activeService: null,
        };
    },
    mounted() {
        jsonList.forEach((item) => {
            if (item.id == this.$route.params.id) {
                this.activeService = item;
            }
        });
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }, 200);
    },
    components: {
        banner,
    },
};
</script>

<style scoped>
p {
    text-align: start;
    max-width: 800px;
}

h2 {
    margin-bottom: 0;
}

h3 {
    margin-top: .1em;
}

.base {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.service {
    background-color: rgba(0, 0, 0, 0.2);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1em;
    padding: 1em;
    width: calc(100% - 2em);
    display: flex;
    border: 1px solid black;
    margin-bottom: 1rem;
}
.text {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.img {
    width: 50%;
    object-fit: cover;
}

.prints {
    object-fit: contain;
    max-height: 80dvh;
    width: 100%;
}
</style>
