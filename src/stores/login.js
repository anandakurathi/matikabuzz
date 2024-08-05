import { reactive } from 'vue'
import { defineStore } from 'pinia'
import { useAuth } from "@/stores/auth";

export const useLogin = defineStore('login', () => {
  const auth = useAuth();
  const errors = reactive({})
  const form = reactive({
    username: '',
    password: ''
  })

  function resetForm() {
    form.username = ''
    form.password = ''
  }

  async function handleSubmit() {
    errors.value = {}

    return await window.axios
      .post('user/login', form)
      .then((response) => {
        console.log(response.data)
        auth.login(response.data.access_token);
        return response.data
      })
      .catch((error) => {
        if (error.response.status === 422) {
          errors.value = error.response.data.errors
        }
      })
      .finally(() => {
        form.password = ''
      })
  }

  return {
    form,
    errors,
    resetForm,
    handleSubmit
  }
});
