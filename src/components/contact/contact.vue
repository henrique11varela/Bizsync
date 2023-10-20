<template>
    <div>
        <a :href="item.description">
            <i :class="item.icon"></i>
            {{ item.description }}
        </a>
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
div {
    text-align: left;
    font-size: 1.25rem;


}
a i {
    color: #00c5e9 !important;
}
a {
    padding: 0.8rem;
    color: black !important;
}

a:hover {
    color: #025c6c;
}
</style>