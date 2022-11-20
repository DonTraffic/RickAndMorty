<template>
    <section class="container pagination" v-if="data.info">
        <div
            class="pagination__button"
            v-if="data.info.prev"
            @click="paginationPush(page - 1)"
        >
            prev
        </div>

        <div
            class="pagination__count"
            v-if="page != 1"
            @click="paginationPush(1)"
        >
            1
        </div>

        <div
            class="pagination__count"
            v-for="(count, index) in (data.info.pages - page) > 5 ? 4 : (data.info.pages - page)"
            :key="count"
            :class="{'active': index == 0 }"
            @click="paginationPush(index + page)"
        >
            {{ index + page  }}
        </div>

        <div
            class="pagination__count"
            :class="{'active': page == data.info.pages}"
            @click="paginationPush(data.info.pages)"
        >
            {{data.info.pages}}
        </div>

        <div
            class="pagination__button"
            v-if="data.info.next"
            @click="paginationPush(page + 1)"
        >
            next
        </div>
    </section>
</template>

<script>
export default {
    name: 'Pagination',
    props: {
        data: Array,
        page: Number,
    },
    methods: {
        paginationPush(page) {
            this.$emit('paginationGet', page);
        },

    }
}
</script>