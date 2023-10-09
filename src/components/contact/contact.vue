<template>
    <div>
            <img class="img" :src="item.image" :alt="item.title" />
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

<style lang="scss" scoped></style>