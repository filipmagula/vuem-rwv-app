<template>
  <div class="events">
    <h1>Events for good</h1>
    <EventCard v-for="project in projects" :key="project.id" :project="project" v-on:delete-project="deleteProject(project.id)"/>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/ProjectCard.vue'
import EventService from '@/services/EventService.js'

export default {
  name: 'EventList',
  components: {
    EventCard
  },
  data() {
    return {
      projects: null
    }
  },
  created() {
    this.getProjects()
  },
  methods: {
    deleteProject(id) {
      EventService.deleteProject(id)
      .then(response => {
      console.log('projects', response.data)
      this.getProjects()
      })
      .catch(error => {
      console.log(error)
      })
    },
    getProjects() {
      EventService.getProjects()
      .then(response => {
        console.log('projects', response.data)
        this.projects = response.data
      })
      .catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>