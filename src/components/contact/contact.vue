<template>
    <div>
        <i :class="item.icon"></i>
            <span>{{ item.description }}</span>
    </div>
</template>

<script>
export default {
    props: {
        item: Object
    },
    data() {
        return {}
    }
};
</script>

<style scoped>
div{
    text-align: left;
}
</style>