<template>
<div class="modal-overlay" @click="$emit('close-modal')">
    <div class="modal__container">
        <div class="modal character__modal" @click.stop v-if="dataModal">
            <img class="character__img" :src="dataModal.image" alt="img">
            <div class="character__text">
                <p v-if="dataModal.name"><b>Name:</b> {{ dataModal.name }}</p>
                <p v-if="dataModal.status"><b>Status:</b> {{ dataModal.status }}</p>
                <p v-if="dataModal.species"><b>Species:</b> {{ dataModal.species }}</p>
                <p v-if="dataModal.gender"><b>Gender:</b> {{ dataModal.gender }}</p>
                <p v-if="dataModal.origin.name"><b>Origin:</b> {{ dataModal.origin.name }}</p>
                <p v-if="dataModal.location.name"><b>location:</b> {{ dataModal.location.name }}</p>
                <p v-if="dataModal.episode.length"><b>Episode:</b> {{ dataModal.episode.length }}</p>
            </div>
        </div>

        <div class="close" @click="$emit('close-modal')">
            <svg class="icon close__icon">
                <use xlink:href="~/assets/svg/sprite.svg#close"></use>
            </svg>
        </div>
    </div>

</div>
</template>
  
<script>
export default {
    name: 'CharacterModal',

    props: {
        dataModal: Object,
    },

}
</script>

