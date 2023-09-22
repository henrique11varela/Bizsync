<template>
    <div class="service">
        <div class="text">
            <h1>{{ item.title }}</h1>
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
    },
    mounted() {
        console.log(this.item);
    }
};
</script>

<style scoped>
.service {
    width: 100%;
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
