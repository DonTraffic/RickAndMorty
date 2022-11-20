<template>
    <div>
        <section class="container carts">

            <div class="carts__listing" v-if="data.results">
                <div
                    class="cart"
                    v-for="item of data.results"
                    :key="item.id"
                    @click='dataModal = item, showCartModal = true'
                >
                    <img :src="item.image" alt="img" class="cart__img">
                    <p class="cart__name">{{item.name}}</p>
                </div>
            </div>

            <div v-if="errors">
                {{errors}}
            </div>

        </section>

        <Pagination :data="data" @paginationGet="pageGet" :page='page'/>

        <CartModal
            v-if="showCartModal"
            @close-modal="showCartModal = false"
            :dataModal="dataModal"
        />

    </div>
</template>

<script>
import CartModal from '~/components/modals/CharacterModal.vue';

export default {
    name: "CharacterPage",

    data() {
        return {
            data: [],
            errors: "",
            page: 1,

            showCartModal: false,
            dataModal: {},

        };
    },

    created: async function () {
        await this.getData();
    },

    methods: {
        async getData() {
            console.log("get");
            await this.$axios.$get(`https://rickandmortyapi.com/api/character?page=${this.page}`)
                .then(resp => this.data = resp)
                .catch(err => this.errors = err.response.data.error);
        },

        pageGet(page) {
            this.page = page;
        },

    },

    watch: {
        page() {
            this.getData();
        }
    },

    components: { CartModal }
}
</script>