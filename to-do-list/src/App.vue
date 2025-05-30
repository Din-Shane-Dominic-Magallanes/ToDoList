<template>
  <div id="app">
    <task :tasks="tasks"></task>
  </div>
</template>

<script>
import { supabase } from './utils/supabase'
import Task from "./components/Task.vue";

console.log(supabase);

export default {
  name: "App",
  components: {
    Task,
  },
  data() {
    return {
      tasks: [
      ]
    };
  },
  
  mounted() {
    this.fetchTasks();
  },
  
  methods: {
    async fetchTasks() {
      const { data, error } = await supabase
        .from("Date")
        .select("*")
        .order("date", { ascending: false });

      if (error) {
        console.error("Error fetching tasks:", error);
      } else {
        console.log("Fetched tasks:", data);
        this.tasks = data.map(item => ({
          id: item.id,
          title: item.date_name,
          date: item.date,
          completed: item.completed
        }));
      }
    }
  }
};
</script>