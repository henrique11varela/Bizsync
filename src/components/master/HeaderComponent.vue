<template>
    <div class="base">
        <div class="content">
            <router-link to="/"><h1 class="Company-Name">Bizsync</h1></router-link>
            <div class="links">
                <router-link to="/about">Sobre nós</router-link>
                <router-link to="/services">Serviços</router-link>
                <router-link to="/contacts">Contactos</router-link>
            </div>
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
}
.content {
    display: flex;
    justify-content: space-between;
    border-bottom: solid 1px gray;
    width: 80%;
    margin-bottom: 1rem;
}

.links {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 60%;
}

.Company-Name {
    color: #008ecc;
    font-family: papyrus;
}

a {
    text-decoration: none;
}
</style>
