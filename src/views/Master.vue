<template>
    <div class="master">
        <HeaderComponent />
        <div class="view">
            <router-view></router-view>
        </div>
        <FooterComponent />
        <div v-if="isDown" class="GoUp" @click="goUpHandler">
            <svg
                style="background-color: transparent; margin-top: 0.5rem"
                width="4rem"
                height="4rem"
                viewBox="0 0 24.00 24.00"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#000000"
                stroke-width="0.00024000000000000003"
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.46967 10.0303C6.17678 9.73744 6.17678 9.26256 6.46967 8.96967L11.4697 3.96967C11.7626 3.67678 12.2374 3.67678 12.5303 3.96967L17.5303 8.96967C17.8232 9.26256 17.8232 9.73744 17.5303 10.0303C17.2374 10.3232 16.7626 10.3232 16.4697 10.0303L12.75 6.31066L12.75 14.5C12.75 15.2133 12.9702 16.3 13.6087 17.1868C14.2196 18.0353 15.2444 18.75 17 18.75C17.4142 18.75 17.75 19.0858 17.75 19.5C17.75 19.9142 17.4142 20.25 17 20.25C14.7556 20.25 13.2804 19.298 12.3913 18.0632C11.5298 16.8667 11.25 15.4534 11.25 14.5L11.25 6.31066L7.53033 10.0303C7.23744 10.3232 6.76256 10.3232 6.46967 10.0303Z"
                    fill="#000000"
                />
            </svg>
        </div>
    </div>
</template>

<script>
import HeaderComponent from "../components/master/HeaderComponent.vue";
import FooterComponent from "../components/master/FooterComponent.vue";

export default {
    data() {
        return {
            isDown: false,
        };
    },
    methods: {
        goUpHandler() {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        },
        scrollHandler() {
            if (scrollY > 130) {
                this.isDown = true;
            } else {
                this.isDown = false;
            }
        },
    },
    created() {
        window.addEventListener("scroll", this.scrollHandler);
    },
    components: { HeaderComponent, FooterComponent },
};
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
.GoUp {
    --size: 5rem;
    aspect-ratio: 1;
    width: var(--size);
    background-color: white;
    position: fixed;
    right: 2rem;
    bottom: 2rem;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0px 0.6px 2.2px rgba(0, 0, 0, 0.02),
        0px 1.4px 5.3px rgba(0, 0, 0, 0.029),
        0px 2.6px 10px rgba(0, 0, 0, 0.035),
        0px 4.7px 17.9px rgba(0, 0, 0, 0.042),
        0px 8.8px 33.4px rgba(0, 0, 0, 0.05), 0px 21px 80px rgba(0, 0, 0, 0.07);
}
</style>
