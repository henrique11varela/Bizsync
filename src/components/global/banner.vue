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
    background-color: #138e79;
    padding: 30px;
    color: white;
    font-size: 40px;
    margin: 1rem 0;
    width: (100% - 30px);
    position: relative;
}
</style>