import { Tooltip } from 'bootstrap'

export const tooltip = {
  mounted() {
    new Tooltip(document.body, {
      selector: "[data-bs-toggle='tooltip']"
    })
  }
}
