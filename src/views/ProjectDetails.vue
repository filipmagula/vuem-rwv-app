<template>
  <div v-if="project">
    <h1>{{ project.name }}</h1>
    <p>{{ project.startdate }} - {{ project.stopdate }} by VAS: {{ project.vas }}</p>
    <p>{{ project.description }} </p>
    <p>{{ project.state }} </p>
  </div> 
</template>

<script>
import EventService from "@/services/EventService.js"
export default {
  props: ['id'],
  data () {
    return {
      project: null
    }
  },
  created () {
    EventService.getProject(this.id)
    .then(response => {
      console.log('project details', response.data)
      this.project = response.data
    })
    .catch(error => {
      console.log(error)
    })
  }
}
</script>

<style scoped>

</style>