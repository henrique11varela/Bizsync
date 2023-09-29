<template>
    <div class="content">
        <div class="values">
            <div class="valueTitle">
                <h3>OS NOSSOS VALORES</h3>
            </div>
            <div class="valueContents">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente eius saepe accusantium, a cupiditate est molestias, tempora illo consequuntur molestiae aperiam nesciunt error dignissimos atque! Rem aspernatur incidunt quia! Eligendi!
            </div>
        </div>

        <div class="programs">
            <h5>Programas</h5>
            <div class="programGrid">
                <div v-for="program in programs" :key="item.id">
                    {{ item }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.content{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.values{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    border-bottom: solid 1px black;
    padding: 2rem 0;
}

</style>