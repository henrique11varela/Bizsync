<template>
    <div class="service">
        <div class="text">
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
            <button @click="openDetails">Saiba mais...</button>
        </div>
        <img class="img" :src="item.image" :alt="item.title" />
    </div>
</template>

<script>
export default {
    props: ['item'],
    data(){
        return {}
    },
    methods: {
        openDetails(){
            this.$emit('openDetails')
        }
    }
};
</script>

<style scoped>
.service {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1em;
    padding: 1em;
    width: calc(100% - 2em);
    display: flex;
    border: 1px solid black;
}
.text {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.img {
    width: 50%;
}
</style>
