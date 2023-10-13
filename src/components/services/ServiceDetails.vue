<template>
    <div>
        <button @click="closeDetails">Close</button>
        <p>{{ item.title }}</p>
    </div>
</template>

<script>
export default {
    props: ['item'],
    methods: {
        closeDetails() {
            this.$emit("closeDetails");
        },
    }
};
</script>

<style scoped></style>
