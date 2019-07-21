import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  title(i) {
    return `Exercise ${i + 1}`
  },

  description() {
    return `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Morbi suscipit tellus eros, eu gravida urna blandit id. Aliquam vitae pellentesque ligula, eget blandit velit.
    Aenean auctor auctor ligula ut fermentum. Donec pretium interdum nibh, quis venenatis nisi consectetur ut.
    Cras sit amet dapibus augue. Aenean iaculis velit commodo risus euismod, eget tempus dolor tempor.
    Pellentesque elementum sem non dolor semper imperdiet. Nunc mattis tellus quis tellus egestas
    , ac tincidunt risus commodo.`
  }
});
