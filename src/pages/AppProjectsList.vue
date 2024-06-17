<template>
    <div>
        <h1 class="text-center">Projects</h1>
        <ul>
          <li v-for="project in projects" :key="project.slug">
            <h4> 
              {{ project.title }}
            </h4>
            <p>
              {{ project.content }}
            </p>
            <RouterLink :to="{ name: 'singleProject', params: { 'slug': project.slug } }"  >
              <button>
                vai al progetto
              </button>
            </RouterLink>
          </li>
        </ul>
    </div>
</template>

<script>
import { store } from '../store';
import axios from 'axios';
    export default {
        name: 'AppProjectsList',
        data(){
                return{
                    store,
                    projects: []
                }
                },
                methods: {
                getAllProjects(){
                    axios.get(this.store.apiBaseUrl+'/projects').then((res)=> {
                    this.projects= res.data.results;
                    console.log(this.projects);
                    });
                }
            },
            mounted(){
            this.getAllProjects();
            }
    }
</script>

<style lang="scss" scoped>

</style>