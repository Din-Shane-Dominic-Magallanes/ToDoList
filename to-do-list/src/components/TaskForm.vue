<template>
  <div>
    <button @click="showModal = true" class="open-modal-btn">
      <font-awesome-icon :icon="['fas', 'plus']" /> Add New Date
    </button>

    <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <h2>Add New Date</h2>
        <form @submit.prevent="submitDate">
          <label>
            Name:
            <input v-model="name" type="text" placeholder="Date name" required />
          </label>
          <label>
            Date:
            <input v-model="date" type="date" required />
          </label>
          <div class="buttons">
            <button type="button" @click="closeModal">Cancel</button>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

import { supabase } from '../utils/supabase'

export default {
  data() {
    return {
      showModal: false,
      name: '',
      date: '',
    };
  },
  methods: {
    async submitDate() {
      if (this.name.trim() && this.date) {
        const { error } = await supabase.from('Date').insert([
          {
            date_name: this.name,
            date: this.date,
            completed: false
          }
        ]);

        if (error) {
          console.error('Error adding date to Supabase:', error);
          alert('There was a problem adding the date.');
        } else {
          this.$emit('add', {
            title: this.name,
            date: this.date,
            completed: false
          });
          this.name = '';
          this.date = '';
          this.showModal = false;
        }
      }
    },
    closeModal() {
      this.showModal = false;
      this.name = '';
      this.date = '';
    }
  }
};
</script>

<style scoped>
.open-modal-btn {
  display: block;
  width: 100%;
  max-width: 320px; 
  margin: 0 auto 20px;
  padding: 12px 0;
  background: #ed588a;
  border: none;
  color: white;
  border-radius: 20px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  box-shadow: 0 4px 10px rgba(244, 143, 177, 0.4);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.open-modal-btn:hover {
  background: #ec407a;
  box-shadow: 0 6px 15px rgba(236, 64, 122, 0.6);
  transform: scale(1.05);
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(250, 150, 200, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-content {
  background: white;
  padding: 25px 30px;
  border-radius: 20px;
  width: 320px;
  box-shadow: 0 0 15px rgba(255, 105, 180, 0.5);
}

.modal-content h2 {
  margin-bottom: 20px;
  color: #d81b60;
  text-align: center;
  font-family: "Poppins", sans-serif;
}

label {
  display: block;
  margin-bottom: 15px;
  font-weight: 600;
  color: #880e4f;
}

input[type="text"],
input[type="date"] {
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #f48fb1;
  font-size: 14px;
  margin-top: 5px;
}

.buttons {
  display: flex;
  justify-content: space-between;
}

button[type="submit"],
button[type="button"] {
  background: #d81b60;
  border: none;
  padding: 10px 18px;
  border-radius: 12px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button[type="submit"]:hover {
  background: #b0144e;
}

button[type="button"]:hover {
  background: #b0144e;
}
</style>
