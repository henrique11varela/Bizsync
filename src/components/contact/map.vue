<template>
    <div>
        <iframe width="100%" height="230" :src="map.link">

        </iframe>
    </div>
</template>

<script>
export default {
    props:{
        map: {
            link: String
        }
    }
}
</script>

<style lang="scss" scoped></style>