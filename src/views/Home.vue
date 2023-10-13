<template>
    <div class="content">
        <div class="banner">
            <img src="https://picsum.photos/2000/300" alt="Banner" />
        </div>



        <div class="values">
            <div class="valueTitle">
                <h1>OS NOSSOS VALORES</h1>
            </div>
            <div class="valueContents">
                <div class="imgTxt">
                    <img src="../assets/values/excelencia.jpg" alt="excelencia">
                    <div class="excel">
                        <h3>Excelência</h3>
                        <p>Procuramos a excelência em todas as nossas ações, desde a seleção do produto até ao atendimento ao cliente.</p>
                    </div>
                </div>
                <hr>
                <div class="imgTxt">
                    <div class="transp">
                        <h3>Transparência</h3>
                        <p>Operamos de forma aberta e honesta, fornecendo informações claras e precisas aos nossos clientes.</p>
                    </div>
                    <img src="../assets/values/transparencia.jpg" alt="transparencia">
                </div>
                <hr>
                <div class="imgTxt">
                    <img src="../assets/values/integridade.jpg" alt="integridade">
                    <div class="integr">
                        <h3>Integridade</h3>
                        <p>Agimos com integridade em todas as nossas interações, mantendo os mais elevados padrões éticos.</p>
                    </div>
                </div>
                <hr>
                <div class="imgTxt">
                    <div class="cresc">
                        <h3>Crescimento Sustentável</h3>
                        <p>Procuramos um crescimento sustentável que beneficie os nossos clientes, equipa e comunidade.</p>
                    </div>
                    <img src="../assets/values/crescimento sustentável.jpg" alt="crescimentoSustentavel">
                </div>
                <hr>
                <div class="imgTxt">
                    <img src="../assets/values/confianca.jpg" alt="confianca">
                    <div class="conf">
                        <h3>Confiança</h3>
                        <p>Baseamos todas as nossas relações comerciais na confiança mútua, agindo com honestidade e cumprindo as nossas promessas. </p>
                    </div>
                </div>
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
h1, h3{
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
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 80%;
    height: max-content;
    border-bottom: solid 1px black;
    padding: 2rem 0;
}
.valueTitle{
    margin-bottom: 3rem;
}

.partners{
    display: flex;
    margin: 0 2rem;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    height: 17rem;
}
hr{
    margin: 3rem;
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

.excel, .transp, .integr, .cresc, .conf{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 0 10rem;
}

.valueContents{
    overflow: hidden;
}
.valueContents img{
    width: 270px;
    height: 100%;
}

.imgTxt{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20%;
}

</style>