<template>
    <div class="base">
        <div class="content">
            <h4>© 2023 Bizsync - Serviços Informáticos</h4>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.base {
    width: 100%;
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 0;
}
.content {
    display: flex;
    justify-content: space-between;
    border-top: solid 1px gray;
    width: 80%;
    padding: 2rem 0;
}

h4 {
    color: #008ecc;
}
</style>
