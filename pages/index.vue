<script setup>

    import { useNuxtApp } from '#app'
    import { provideClient } from '@urql/vue';
    import CharactersList from '../components/CharactersList.vue'

    const nuxtApp = useNuxtApp()
    console.log(nuxtApp)

    const client = this.$urql
    console.log(client)

    provideClient({
        url: 'https://rickandmortyapi.com/graphql',
    })

    const fooBar = () => {
        // do something here
        const a = 5
        const b = 2
        const z = a * b
        // return something here
        return  {
            data: {
                limit: z,
                start: a,
                multiplier: b,
                values: [a, b, z]
            }
        }
    }

</script>

<template>
    <div>
        <p>foobar() => {{ fooBar() }}</p>
        <Suspense>
            <template #default>
                <CharactersList />
            </template>
            <template #fallback>
                <div>Loading...</div>
            </template>
        </Suspense>
    </div>
</template>
