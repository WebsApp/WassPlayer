import is from './is';

export function silencePromise(value) {
  if (is.promise(value)) {
    value.then(null, () => {});
  }
}

export default { silencePromise };
