<template>
  <div>
    <h1>Create an event</h1>
    <form @submit.prevent="sendForm">


      <h3>Name & describe your event</h3>

      <BaseInput 
        v-model="project.name"
        label="Name"
        type="text"
      />

      <BaseInput 
        v-model="project.description"
        label="Description"
        type="text"
      />

      <div>
        <BaseInput 
          v-model="project.startdate"
          label="Start"
          type="text"
        />
      </div>

      <div>
        <BaseInput 
          v-model="project.stopdate"
          label="Stop"
          type="text"
        />
      </div>      

      <h3>Developed by VAS?</h3>
      <div>
      <BaseRadioGroup
        v-model="project.vas"
        name="vas"
        :options="vasOptions"
        
      />
      </div>    
<!--
      <h3>Extras</h3>
      <div>
      <BaseCheckbox
        v-model="project.extras.catering"
        label="Catering"
        type="checkbox"
      />
      </div>
-->
      <BaseSelect
        :options="states"
        v-model="project.state"
        label="Select a category"
      />

      <!--Debug-->
      <pre id="json" style="text-align:left;"> {{ JSON.stringify(project, undefined, 2) }} </pre>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      states: [
        'Not_started',
        'Initial_contact'
      ],
      project: {
        state: '',
        name: '',
        description: '',
        startdate: '',
        enddate: '',
        vas: 1,
        
      },
      vasOptions: [
        { label: 'Yes', value: 1 },
        { label: 'No', value: 0 }
      ]
    }
  },
    methods: {
      sendForm () {
          axios.post('http://localhost:1337/projects',
          this.project
        )
        .then(function (response) {
          console.log('Response', response)
        })
        .catch(function (err) {
          console.log(err)
        })
      } 
  }
}
</script>

<style scoped>
  * { 
    text-align: left;
  }

</style>