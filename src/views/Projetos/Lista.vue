<template>
  <section>
    <router-link to="/projetos/novo" class="button">
      <span class="icon is-small">
        <i class="fas fa-plus"></i>
      </span>
      <span>Novo Projeto</span>
    </router-link>
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody v-for="projeto in projetos" :key="projeto.id">
        <td>{{ projeto.id }}</td>
        <td>{{ projeto.nome }}</td>
        <td>
          <router-link :to="`/projetos/${projeto.id}`" class="button">
            <span class="icon is-small">
              <i class="fas fa-pencil-alt"></i>
            </span>
          </router-link>
          <button class="button ml-2 is-danger" @click="excluir(projeto.id)">
            <span class="icon is-small">
              <i class="fas fa-trash"></i>
            </span>
          </button>
        </td>
      </tbody>
    </table>
  </section>
</template>
<script lang="ts">
import { useStore } from "@/store";
import { computed, defineComponent } from "vue";
export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Projetos",
  methods: {
    excluir(id: string): void {
      this.store.commit("EXCLUIR_PROJETO", id);
    },
  },
  setup() {
    const store = useStore();
    return {
      projetos: computed(() => store.state.projetos),
      store,
    };
  },
});
</script>