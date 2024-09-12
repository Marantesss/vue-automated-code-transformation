---
layout: section
---

# Why do we need this project

---

# Problems, problems, problems

- [Vue 2 has reached End of Life (EOL)](https://v2.vuejs.org/lts/) on December 31st, 2023.
- [Class component based syntax](https://class-component.vuejs.org/) and [vue-property-decorator](https://github.com/kaorun343/vue-property-decorator) is no longer available for Vue 3
- Infraspeak's web client is pretty large and manual migration is not straightforward

---

# Class based-syntax

```ts
import { Component, Prop, Vue, Ref, Emit, Watch, mixins } from 'vue-property-decorator'
/* other imports */

@Component({ components: { NestedComponent }})
export default class ExampleComponent extends mixins(MyMixin) {
  @Ref('myDiv') readonly myDiv!: HTMLDivElement

  @Prop({ type: Number, required: true }) public readonly myNumber!: number

  myData = 'stuff'

  @Watch('myNumber', { immediate: true, deep: true })
  onMyDataOne(newVal: string, oldVal:string) { }

  @Emit('my-event')
  emitMyEventWithPayloadParam (num: number): void { }

  get myMethod () { }

  doMath(a: number, b: number): number { }
}
```

