<template>
    <div class="content">
        <div class="banner">
            <img src="https://picsum.photos/2000/300" alt="Banner" />
        </div>



        <div class="values">
            <div class="valueTitle">
                <h3>OS NOSSOS VALORES</h3>
            </div>
            <div class="valueContents">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente eius saepe accusantium, a cupiditate est molestias, tempora illo consequuntur molestiae aperiam nesciunt error dignissimos atque! Rem aspernatur incidunt quia! Eligendi!
            </div>
        </div>

        <div class="partners">
            <div class="partTitle">
                <h3>Parceiros</h3>
            </div>
            <div class="partImgs">
                <img src="../assets/partners/bike.jpg" alt="bike">
                <img src="../assets/partners/elvis.jpg" alt="">
                <img src="../assets/partners/mcdiabetes.jpg" alt="">
                <img src="../assets/partners/suckers.jpg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
h3{
    color: #008ecc;
}

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
    height: 7rem;
    border-bottom: solid 1px black;
    padding: 2rem 0;
}

.partners{
    display: flex;
    margin: 0 2rem;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    height: 17rem;
}

.partTitle{
    padding: 2rem;
}

.partImgs{
    display: flex;
    align-items: center;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
}

.partImgs img{
    width: 270px;
    height: 180px;
}
</style>