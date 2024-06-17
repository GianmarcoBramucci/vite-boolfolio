<template>
    <div>
        <h1> 
          {{ project.title }}
        </h1>
       
        <p>
          {{ project.content }}
        </p>
    </div>
</template>

<script>
import { store } from '../store';
import axios from 'axios';
    export default {
        name: 'AppSingleProject',
        data(){
                return{
                    store,
                    project: []
                }
                },
                methods: {
                getProject(){
                    axios.get(this.store.apiBaseUrl+'/projects/'+this.$route.params.slug).then((res)=> {
                    this.project= res.data.results;
                    console.log(this.project);
                    });
                }
            },
            mounted(){
            this.getProject();
            }
    }
</script>

<style lang="scss" scoped>

</style>