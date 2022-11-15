<template>
    <section class="container carts">

        <div class="carts__listing" v-if="data.results">
            <div class="cart" v-for="item of data.results" :key="item.id">
                <img :src="item.image" alt="img" class="cart__img">
                <p class="cart__name">{{item.name}}</p>
            </div>
        </div>

        <div v-if="errors">
            {{errors}}
        </div>


    </section>
</template>

<script>
export default {
    name: 'CharacterPage',
    data() {
        return {
            data: [],
            errors: ''
        }
    },
    created: async function () {
        await this.$axios.$get('https://rickandmortyapi.com/api/character') 
            .then(resp => this.data = resp)
            .catch(err => this.errors = err.response.data.error);
    }
}
</script>