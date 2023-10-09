<template>
    <div>
        <a :href="item.link">
            <img :src="item.image">
        </a>
    </div>
</template>

<script>
export default {
    props: {
        item: {
            link: String,
            image: String
        }
    },
    data(){
        return {}
    }
};
</script>

<style scoped>
    img{
        height: 60px
    }
</style>