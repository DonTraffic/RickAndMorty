export const state = () => ({
    data: {},
})

export const mutations = {
    saveData(state, data) {
        // state.data = data
        console.log(data);
    }
}

export const actions = {
    getData: async (context, name) => {
        console.log(context);
        await this.$axios.$get('https://rickandmortyapi.com/api/' + name)
            .then(resp => context.commit('saveData', resp))
            .catch(err => console.error(err));
    }
}