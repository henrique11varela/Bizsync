<template>
    <div class="service">
        <div class="text">
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
            <a href="#">Saiba mais...</a>
        </div>
        <img class="img" :src="item.image" :alt="item.title" />
    </div>
</template>

<script>
export default {
    props: {
        item: Object
    },
    data(){
        return {}
    }
};
</script>

<style scoped>
.service {
    padding: 1em;
    width: calc(100% - 2em);
    display: flex;
    border: 1px solid black;
}
.text {
    width: 50%;
}
.img {
    width: 50%;
}
</style>
