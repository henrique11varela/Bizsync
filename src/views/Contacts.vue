<template>
    <div>
        <banner text="Contact" />
        <div class="contact-body">
            <div class="contact">
                <h2>Microrégio-Soluções Informáticas, Lda</h2>
                <contact v-for="(item, index) in data.contactList" :item="item" :key="index" />
            </div>
            <div class="socialMedia">
                <h2>Redes Sociais</h2>
                <socialMedia v-for="(item, index) in data.socialMediaList" :item="item" :key="index" />
            </div>
            <div class="map">
                <map :map="data.map" />
            </div>
        </div>
    </div>
</template>

<script>
import contact from "../components/contact/contact.vue";
import socialMedia from "../components/contact/socialMedia.vue";
import map from "../components/contact/map.vue";
import image1 from "../assets/services/1/1.jpg"
import image2 from "../assets/services/2/1.png"
import instagram from "../assets/icons/socialMedia/instagram.png"
import youtube from "../assets/icons/socialMedia/youtube.png"

import banner from "../components/global/banner.vue"

export default {
    data() {
        return {
            data: {
                contactList: [
                    {
                        description: "Av. Mouzinho Albuquerque, 15 4480-151 Azurara – Vila do Conde",
                        image: "",
                    },
                ],
                socialMediaList: [

                    {
                        link: "recrutamento@microregio.pt",
                        image: instagram,
                    },
                    {
                        link: "recrutamento@microregio.pt",
                        image: youtube,
                    },
                ],
                map: {
                    link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47927.50073914129!2d-8.769930533852737!3d41.342163092580805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2443f0fa46216d%3A0xd2dad6981073c3a6!2zTWljcm9yw6lnaW8tU29sdcOnw7VlcyBJbmZvcm3DoXRpY2FzIExkYQ!5e0!3m2!1spt-PT!2sus!4v1483632034476"
                }
            }
        };
    },
    components: {
        socialMedia,
        contact,
        banner,
        map
    },
}
</script>

<style scoped>
h2 {
    text-align: left;
}

.map {
    grid-area: "map";
}

.contact {
    grid-area: "contact";

}

.socialMedia {
    display: flex;
    flex-wrap: wrap;
    grid-area: "socialMedia";
}

.socialMedia h2 {
    width: 100%;
}

.contact-body {
    display: grid;
    grid-template-areas:
        "contact socialMedia"
        "map map"
    ;
    grid-gap: 50px;
}
</style>