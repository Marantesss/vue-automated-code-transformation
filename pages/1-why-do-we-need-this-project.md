---
layout: section
---

# Why do we need this project

---

# Let me paint a picture

<ul>
  <li v-click>It's April 2023 <span font="thin">(it might have been May)</span></li>
  <li v-click>Infraspeak's web client is 5 years old and using Vue <a href="https://github.com/vuejs/vue/tree/v2.6.11"><code>v2.6.11</code> (Dec 13, 2019)</a>;</li>
  <li v-click>
    It relies on a <a href="https://class-component.vuejs.org/">Class based syntax</a> and the <a href="https://github.com/kaorun343/vue-property-decorator"><code>vue-property-decorator</code></a> package;
  </li>
  <li v-click>
    The code base is pretty large so manual migration is off the table;
  </li>
  <li v-click>
    <a href="https://v2.vuejs.org/lts/">Vue 2 will reach End of Life (EOL)</a> on December 31st, 2023 with <code>v2.7.x</code> as the final minor version;
  </li>
</ul>

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
  onMyNumberChange(newVal: string, oldVal:string) { }

  @Emit('my-event')
  emitMyEventWithPayloadParam (num: number): void { }

  get myComputedProperty () { }

  myMethod(a: number, b: number): number { }
}
```

