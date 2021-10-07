<template>
  <div class="about">
    service 2 core

    <table>
      <thead>
        <th>Name</th>
        <th>Description</th>
        <th>Actions</th>
      </thead>
      <tbody>
        <tr v-for="(item, index) in list" :key="index">
          <td>{{item.name}}</td>
          <td>{{item.description}}</td>
          <td>
            <button>Remove</button>
          </td>
        </tr>
      </tbody>
    </table>

    <app-service2 />
  </div>
</template>

<script>
import AppService2 from 'service2/App'
import { mapState } from 'vuex'

export default {
  components: { AppService2 },
  computed: {
    ...mapState({
      list: (state) => state.product.list,
    }),
  },
}
</script>