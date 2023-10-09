<template>
    <div>
        <iframe idth="800" height="230" :src="map.link">

        </iframe>
    </div>
</template>

<script>
export default {
    props:{
        map: Object
    }
}
</script>

<style lang="scss" scoped></style>