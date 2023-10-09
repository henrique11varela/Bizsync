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
        </div>

        <div class="flex">
            <div class="img-body">
                <img src="https://fakeimg.pl/1280x720/" alt="">
            </div>
            <div class="text-body">
                <h3 class="title">title</h3>
                <p class="text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis officiis unde eligendi iste
                    voluptate
                    alias numquam placeat ex accusantium laboriosam voluptates magni sequi, qui doloribus inventore
                    suscipit
                    officia temporibus? Nostrum.

                </p>
            </div>
        </div>
        <div class="background"></div>
        <div class="flex">
            <div class="text-body">
                <h3 class="title">title</h3>
                <p class="text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis officiis unde eligendi iste
                    voluptate
                    alias numquam placeat ex accusantium laboriosam voluptates magni sequi, qui doloribus inventore
                    suscipit
                    officia temporibus? Nostrum.

                </p>
            </div>
            <div class="img-body">
                <img src="https://fakeimg.pl/1280x720/" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import banner from "../components/global/banner.vue"
export default {
    components: {
        banner
    },
};
</script>

<style scoped>
.flex {
    display: flex;
}

.flex>.text-body,
.flex>.title-body {
    padding: 0 0.5rem;
}

.title {
    font-size: 2rem;
    color: #008ecc;
    font-weight: bold;
}

.background {
    background-image: url('https://fakeimg.pl/1280x720/');
    height: 720px;
}

.text {
    font-size: 1rem;
    text-align: justify;
}

div {
    padding: 0.5rem 0rem;
}
</style>
