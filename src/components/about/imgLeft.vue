<template>
    <div class="flex">
        <div class="img-body">
            <img :src="item.img" alt="">
        </div>
        <div class="flex">
            <div class="text-body">
                <h3 class="title">{{ item.title }}</h3>
                <p class="text">
                    {{ item.text }}

                </p>
            </div>
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
div {
    padding: 0.5rem 0rem;
}

.flex {
    display: flex;
}

.title {
    font-size: 2rem;
    color: #138e79;
    font-weight: bold;
    margin-bottom: 2rem;
}

.flex>.text-body,
.flex>.title-body {
    padding: 0 0.5rem;
}

.text {
    font-size: 1rem;
    text-align: justify;
}</style>