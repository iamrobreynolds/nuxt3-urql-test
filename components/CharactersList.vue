<script>
import { ref, computed } from 'vue';
import { gql, useQuery } from '@urql/vue';
export default {
  async setup() {
    const page = ref(1);
    const characters = await useQuery({
      query: gql`
        query ( $page: Int!) {
            characters( page: $page) {
                results{
                    id,
                    name,
                    species,
                    image
                }
            }
        }
      `,
      variables: { page }
    })

    return {
      characters: characters.data,
      nextPage() {
        page.value += 1;
      },
      prevPage() {
        page.value += -1;
      },
      page,
    };


  },
  name: 'CharactersList',
}

</script>

<template>
  <div>
    <div v-if="characters">
      <div v-for="character in characters.characters.results" :key="character.id">
        <h2>{{ character.name }}</h2>
        <p>{{ character.species }}</p>
        <img v-bind:src="character.image" alt="">
      </div>
    </div>
    <button @click="prevPage">Previous Page</button>
    <button @click="nextPage">Next Page</button>
    <p>Currently viewing page: {{ page }}</p>
  </div>
</template>
