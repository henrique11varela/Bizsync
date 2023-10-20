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
    height: 7rem;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
}
a {
    color: #00c5e9;
}

a:hover,
.router-link-active {
    color: #033139;
}
.content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid 1px gray;
    width: 80%;
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
