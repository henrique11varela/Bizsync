<template>
    <div class="img-body">
        <img :src="img" alt="">
    </div>
    <div class="flex">
        <div class="text-body">
            <h3 class="title">{{ title }}</h3>
            <p class="text">
                {{ text }}

            </p>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        item: {
            img: String,
            title: String,
            text: String
        }
    }
}
</script>

<style scoped>
.flex {
    display: flex;
}

.flex>.text-body,
.flex>.title-body {
    padding: 0 0.5rem;
}

.text {
    font-size: 1rem;
    text-align: justify;
}
</style>