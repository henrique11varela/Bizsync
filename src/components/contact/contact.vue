<template>
    <div>
        <a :href="item.link">
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
a {
    color: black;
}

a:hover {
    color: #00c5e9;
}
</style>