<template>
        <a :href="item.link">
            <i :class="item.icon"></i>
        </a>
</template>

<script>
export default {
    props: {
        item: {
            link: String,
            icon: String
        }
    },
    data() {
        return {}
    }
};
</script>

<style scoped>
a {
    font-size: 1.25rem;
    padding: 0.8rem;
    color: #005767;
}

a:hover {
    color: #033139;
}

</style>