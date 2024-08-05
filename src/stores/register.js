import { reactive } from 'vue'
import { defineStore } from 'pinia'
import { useAuth } from "@/stores/auth";

export const useRegister = defineStore('register', () => {
  const auth = useAuth();
  const form = reactive({
    name: '',
    email: '',
    password: '',
    confirm_password: ''
  })

  function resetForm() {
    form.name = ''
    form.email = ''
    form.password = ''
    form.confirm_password = ''
  }

  async function handleSubmit() {
    return await window.axios
      .post('/register', form).then((response) => {
        console.log(response.data)
        auth.login(response.data.access_token);
      return response.data
    })
  }

  return {
    form,
    resetForm,
    handleSubmit
  };
});
