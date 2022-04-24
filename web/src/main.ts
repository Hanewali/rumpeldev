import { createApp, h, provide } from 'vue'
import App from './App.vue'
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
  new HttpLink({ uri: 'http://localhost:5006' })
])

const apolloClient = new ApolloClient({
  link: additiveLink,
  cache: new InMemoryCache()
})

createApp({
  setup () {
    provide(ApolloClients, {
      default: apolloClient
    })
  },
  render: () => h(App)
}).use(router).mount('#app')
