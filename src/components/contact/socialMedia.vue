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
    data() {
        return {}
    }
};
</script>

<style scoped>
div {
    font-size: 1.25rem;
}

a:hover {
    color: #00c5e9;
}
</style>