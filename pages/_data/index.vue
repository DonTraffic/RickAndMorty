<template>
    <div>
        <p>{{this.$router.history.current.params.data}}</p>
        <div v-if="data.results">{{data.results}}</div>
        <div v-else>{{errors}}</div>
    </div>
</template>

<script>
export default {
    name: 'ListingPage',
    data() {
        return {
            data: [],
            errors: ''
        }
    },
    mounted: async function () {
        await this.$axios.$get('https://rickandmortyapi.com/api/' + this.$router.history.current.params.data) // ' /?page= index '
            .then(resp => this.data = resp)
            .catch(err => this.errors = err.response.data.error);
    }
}
</script>