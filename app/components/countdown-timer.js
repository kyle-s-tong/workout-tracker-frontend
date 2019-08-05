import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  formattedRestTime: computed('restTime', function() {
    const time = new Date(null);
    time.setSeconds(parseInt(this.restTime));

    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    if (minutes && seconds) {
      return `${this.padTimeString(minutes, '0', 2)}:${this.padTimeString(seconds, '0', 2)}`;
    } else if (minutes && !seconds) {
      return `${this.padTimeString(minutes, '0', 2)}:00`;
    } else if (!minutes && seconds) {
      return `00:${this.padTimeString(seconds, '0', 2)}`;
    }

    return null;
  }),

  padTimeString(string, pad, length) {
    return (new Array(length + 1).join(pad) + string).slice(-length);
}
});
