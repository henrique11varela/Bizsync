<template>
        <div class="banner">
            {{ text }}
        </div>
</template>

<script>

export default {
    props: {
        text: String
    },
    data() {
        return {}
    }
};
</script>
<style scoped>
.banner {
    background-color: #008ecc;
    padding: 30px;
    color: white;
    font-size: 40px;
    box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.2);
}
</style>