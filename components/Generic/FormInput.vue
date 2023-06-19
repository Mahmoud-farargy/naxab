<template>
  <div id="customInput" :class="`relative mb-4 ${className ? className : ''}`.trim()">
    <div class="input--inner">
      <div class="form-group flex-column" style="position:relative;">
        <label
          :for="label"
          class="block mb-2 text-[17px] lg:text-[18px] 3xl:[20px] font-medium text-white"
        >{{label}}</label>
        <input
          :placeholder="placeholder"
          ref="inputRef"
          :disabled="disabled"
          :id="label"
          @input="inputEmit($event.target.value)"
          :value="modelValue"
          v-if="elementType === 'input'"
          :required="isRequired"
          :type="inputType"
          :class="`form__input w-full bg-[#3D3D3D] border-[2px] border-transparent hover:border-[#92278F]/40 text-white text-[16px] lg:text-[17px] 3xl:[19px] rounded-lg block py-2.5 px-3.5 lg:py-3 lg:px-4 ${isInvalid ? 'is-invalid': ''} ${disabled ? 'disabled' : ''}`.trim()"
        />
        <textarea
          :placeholder="placeholder"
          ref="inputRef"
          :disabled="disabled"
          :id="label"
          minlength="0"
          @input="inputEmit($event.target.value)"
          :value="modelValue"
          v-if="elementType === 'textarea'"
          :required="isRequired"
          :type="inputType"
          :class="`form__input w-full min-h-[136px] resize-none bg-[#3D3D3D] border-[2px] border-transparent hover:border-[#92278F]/40 text-white text-[16px] lg:text-[17px] 3xl:[19px] rounded-lg block py-2.5 px-3.5 lg:py-3 lg:px-4 ${isInvalid ? 'is-invalid': ''} ${disabled ? 'disabled' : ''}`.trim()"
        />
      </div>
    </div>
    <div
      v-if="isInvalid"
      class="py-2.5 px-3 mb-4 flex flex-column text-sm mt-3 text-red-800 rounded-lg bg-red-50"
      role="alert"
    >
      {{invalidMsg}}
    </div>
  </div>
</template>
  
  <script>

export default {
  setup(props, ctx) {
    const inputEmit = val => ctx.emit("update:modelValue", val);
    return {
      inputEmit
    };
  },
  props: {
    className: {
      type: String,
      required: false,
      default: ""
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    placeholder: {
      type: String,
      required: true,
      default: ""
    },
    invalidMsg: {
      type: String,
      required: false
    },
    modelValue: {
      type: String,
      required: false,
      default: ""
    },
    isInvalid: {
      type: Boolean,
      required: true,
      default: false
    },
    label: {
      type: String,
      required: false,
      default: ""
    },
    elementType: {
      type: String,
      required: false,
      default: "input"
    },
    inputType: {
      type: String,
      default: "text"
    },
    isRequired: {
      type: Boolean,
      default: false,
      required: false
    }
  }
};
</script>
  <style lang="scss" scoped>

#customInput {
  margin-bottom: 1.2rem; 
  input, textarea{ 
    transition: 0.2s ease;
    transition-property: border-color, box-shadow;
    &:focus{
        border-color: #92278F;
        box-shadow: 0px 0px 3.5px #92278F;
        outline: none;
    }
    &::placeholder{
        color:#AEAEAE;
    }
  }
}

</style>