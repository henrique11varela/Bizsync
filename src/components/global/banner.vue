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
}
</style>