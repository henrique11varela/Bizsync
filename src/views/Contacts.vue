<template>
    <div class="container">
        <banner text="Contactos" />
        <div class="contact-body">
            <div class="contact">
                <h2>Bizsync Soluções Informáticas, Lda</h2>
                <contact v-for="(item, index) in data.contactList" :item="item" :key="index" />
            </div>
            <div class="socialMedia">
                <h2>Redes Sociais</h2>
                <socialMedia v-for="(item, index) in data.socialMediaList" :item="item" :key="index" />
            </div>
        </div>
    </div>
</template>

<script>
import contact from "../components/contact/contact.vue";
import socialMedia from "../components/contact/socialMedia.vue";
import banner from "../components/global/banner.vue"

export default {
    data() {
        return {
            data: {
                contactList: [
                    {
                        link: "tel:+351 932 111 111",
                        description: "+351 932 111 111",
                        icon: "fa-solid fa-phone",
                    },
                    {
                        link: "tel:+351 932 111 112",
                        description: "+351 932 111 112",
                        icon: "fa-solid fa-phone",
                    },
                    {
                        link: "mailto:geral@bizsync.pt",
                        description: "geral@bizsync.pt",
                        icon: "fa-regular fa-envelope",
                    },
                ],
                socialMediaList: [

                    {
                        link: "https://www.instagram.com",
                        icon: "fa-brands fa-instagram",
                    },
                    {
                        link: "https://www.facebook.com/?locale=pt_PT",
                        icon: "fa-brands fa-facebook",
                    },
                    {
                        link: "https://www.youtube.com/?hl=pt-PT&gl=PT",
                        icon: "fa-brands fa-youtube",
                    },
                    {
                        link: "https://twitter.com/?lang=pt",
                        icon: "fa-brands fa-twitter",
                    },
                ],
            }
        };
    },
    components: {
        socialMedia,
        contact,
        banner,
    },
}
</script>

<style scoped>
h2 {
    color: #138e79;
    text-align: left;
}

.map {
    grid-area: map;
    width: 100%;
}

.contact>* {
    grid-area: contact;
    padding: 0.5rem 0;
}

.socialMedia {
    grid-area: socialMedia;
    text-align: left;
}

.socialMedia h2 {
    width: 100%;
}

.contact-body {
    display: grid;
    grid-template-areas:
        "contact"
        "socialMedia"
        "map"
    ;
    grid-gap: 50px;
}

@media (min-width: 768px) {
    .contact-body {
        display: grid;
        grid-template-areas:
            "contact socialMedia"
            "map map"
        ;
        grid-gap: 2rem;
    }
}

img {
    height: 50px;
}
</style>