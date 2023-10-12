<template>
    <div>
        <a :href="item.link">
            <i :class="item.icon"></i>
        </a>
    </div>
</template>

<script>
export default {
    props: {
        item: {
            link: String,
            icon: String
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