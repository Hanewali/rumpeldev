import { createApp, h, markRaw, provide } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client'
import { ApolloClients } from '@vue/apollo-composable'

const additiveLink = from([
  // new ApolloLink((operation, forward) => {
  //   operation.setContext(({ headers }) => ({
  //     headers: {
  //       ...headers,
  //       authorization: token ? `Bearer ${token}` : null
  //     }
  //   }))
  //   return forward(operation)
  // }),
  new HttpLink({ uri: process.env.GRAPHQL_URL })
])

const apolloClient = new ApolloClient({
  link: additiveLink,
  cache: new InMemoryCache()
})

const app = createApp({
  setup () {
    provide(ApolloClients, {
      default: apolloClient
    })
  },
  render: () => h(App)
})

app
  .use(createPinia())
  .use(router)
  .mount('#app')
