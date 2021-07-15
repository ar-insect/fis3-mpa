<template>
  <Layout>
      <template #header>
          head...
      </template>
      <template>
          <Form />
      </template>
      <template #footer>
          footer...
      </template>
  </Layout>
</template>

<script>
import Layout from 'component/layout.vue'
import Form from 'template/vuetest/form.vue'

export default {
  name: 'vuetest',
  components: {
    Layout,
    Form
  }
}
</script>

<style>

</style>