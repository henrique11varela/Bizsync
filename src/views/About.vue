<template>
    <div class="container">
        <banner text="Sobre nós" />


        <div class="flex">
            <div class="title-body">
                <div class="title">Ambiente em que nos inserimos</div>
            </div>
            <div class="text-body">
                <div class="text">
                    <ul>
                        <li>No cenário competitivo e em constante evolução do desenvolvimento de aplicações e websites, as empresas enfrentam constantes desafios para se destacarem. </li>
                        <li>Gerir com êxito uma empresa neste campo vai além da simples criação e disponibilização de soluções digitais.</li>
                        <li>É neste contexto que a importância de um plano de negócios se torna inegável.</li>
                        <li>Um plano de negócios não só define uma estratégia para a empresa, mas também serve como um guia para enfrentar as complexidades inerentes a este setor em constante evolução.</li>
                        <li>Um plano cuidadosamente elaborado não só aumenta as hipóteses de sucesso, mas também prepara o negócio para enfrentar as flutuações do mercado e prosperar no setor.</li>
                    </ul>
                </div>
            </div>
        </div>

        <imgLeft :item="left" />
        <img src="https://picsum.photos/1280/720" alt="">
    </div>
</template>

<script>
import banner from "../components/global/banner.vue"
import imgLeft from "../components/about/imgLeft.vue"
import imgRight from "../components/about/imgRight.vue"


export default {
    data() {
        return {
            left: {
                title: "Sobre nós",
                text: "A Bizsync é uma empresa inovadora especializada em soluções digitais personalizadas, com uma equipa talentosa, maioritariamente jovem. Baseamos a nossa abordagem na criatividade, tecnologia avançada e um compromisso inabalável com a excelência. Na Bizsync, tornamos ideias em realidade digital. Oferecemos uma vasta gama de serviços e soluções digitais, que abrangem desde o desenvolvimento de websites e aplicações móveis até estratégias digitais personalizadas. A nossa versatilidade permite-nos satisfazer as diversas necessidades dos nossos clientes, independentemente do tamanho ou da complexidade do projeto. ",
                img: "sdsaqd"
            }
        }
    },
    components: {
        banner,
        imgRight,
        imgLeft
    },

};
</script>

<style scoped>
.title {
    font-size: 2rem;
    color: #138e79;
    font-weight: bold;
}

.text-body{
    display: flex;
    justify-content: center;
}
.text{
    text-align: left;
}

.background {
    background-image: url('https://fakeimg.pl/1280x720/');
    height: 720px;
}

.flex {
    padding: 0.5rem 0rem;
}
</style>
