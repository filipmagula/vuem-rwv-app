<template>
    
    <div class="project-card">
        <div>Started: {{ project.startdate }} </div>
        <div>Finished: {{ project.stopdate }}</div>
        <h4>{{project.name}}</h4>
        <router-link :to="{ name: 'ProjectDetails', params: {id: project.id  } }">
          <button>View</button>
        </router-link>
        <router-link :to="{ name: 'ProjectList', params: {} }">
          <button @click="$emit('delete-project', project.id)">Delete</button>
        </router-link>
    </div>
 
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    project: Object
  },
}
</script>

<style scoped>
.project-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.project-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.project-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
