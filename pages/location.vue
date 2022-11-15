<template>
    <section class="container carts">

        location


    </section>
</template>

<script>
export default {
    name: 'LocationPage',
    data() {
        return {
            data: [],
            errors: ''
        }
    },
    created: async function () {
        await this.$axios.$get('https://rickandmortyapi.com/api/location') 
            .then(resp => this.data = resp)
            .catch(err => this.errors = err.response.data.error);

    }
}
</script>