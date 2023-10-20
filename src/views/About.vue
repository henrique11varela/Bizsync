<template>
    <div class="container">
        <banner text="About" />


        <div class="flex">
            <div class="title-body">
                <div class="title">title</div>
            </div>
            <div class="text-body">
                <div class="text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, dolorum! Illum, facere
                    quaerat repellendus eius aut deserunt incidunt aliquid laboriosam. At eum vitae labore architecto
                    deserunt
                    repellat iure, voluptatem vero.
                </div>
            </div>
        </div>>

        <imgLeft /> 
        </div>
        <div class="background"></div>
        <imgRight />
    </div>
</template>

<script>
import banner from "../components/global/banner.vue"
import imgLeft from "../components/about/imgLeft.vue"
import imgRight from "../components/about/imgRight.vue"

export default {
    components: {
        banner,
        imgRight,
        imgLeft
    },

};
</script>

<style scoped>
.title {
    font-size: 2rem;
    color: #008ecc;
    font-weight: bold;
}

.background {
    background-image: url('https://fakeimg.pl/1280x720/');
    height: 720px;
}

div {
    padding: 0.5rem 0rem;
}
</style>
