<template>
    <div>

        <section class="container filters">
            <input class="filters__item filters__input" type="text" v-model="filters.name" placeholder="Name"/>

            <select class="filters__item filters__select" name="status-select" id="status-select" v-model="filters.status">
                <option value=""></option>
                <option value="alive">alive</option>
                <option value="dead">dead</option>
                <option value="unknown">unknown</option>
            </select>

            <input class="filters__item filters__input" type="text" v-model="filters.species" placeholder="Species"/>

            <select class="filters__item filters__select" name="gender-select" id="gender-select" v-model="filters.gender">
                <option value=""></option>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="genderless ">genderless</option>
                <option value="unknown">unknown</option>
            </select>

            <button class="filters__item filters__button" @click="getData()">Search</button>
        </section>

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
            filters: {},

            showCartModal: false,
            dataModal: {},

        };
    },

    created: async function () {
        await this.getData();
    },

    methods: {
        async getData() {

            let filters = () => {
                let result = ''

                for (const key in this.filters) {
                    if (this.filters[key]) {
                        result = result + '&' + key + '=' + this.filters[key]
                    }
                }

                return result

            }

            await this.$axios.$get(`https://rickandmortyapi.com/api/character?page=${this.page}${filters()}`)
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