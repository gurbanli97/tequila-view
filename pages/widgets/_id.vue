<template>
  <div class="widgets create">
     <PageHeader title="Widgets" show-actions show-back-button>
      <template #actions>
        <button class="btn btn-preview" @click="prepareFrame">Preview</button>
        <button class="btn btn-code">View code</button>
        <button class="btn btn-greenland" @click="handleWidgetCreate">Save</button>
      </template>
    </PageHeader>
    <div class="container">
      <div class="widgets-create-inner">
        <div class="create-widget-forms">
          <div class="create general">
            <div class="head">
              <div>
                <span>1</span>
                <h3>General</h3>
              </div>
              <button class="btn">Edit</button>
            </div>
            <div class="body">
              <FormField placeholder="Enter widget name" />
            </div>
          </div>
          <div class="create type">
            <div class="head">
              <div>
                <span>2</span>
                <h3>Widget type</h3>
              </div>
              <button class="btn">Edit</button>
            </div>
            <div class="row body align-items-start flex-wrap">
              <div class="widget-type full col-4">
                <span>Full widget</span>
                <div @click="handletWidgetSelect($event,'full_widget')">
                  <img src="/images/widgets/full.svg" alt="full-widget">
                </div>
              </div>
               <div class="widget-type price col-4">
                <span>Price widget</span>
                <div @click="handletWidgetSelect($event,'price_widget')">
                  <img src="/images/widgets/price.svg" alt="price-widget">
                </div>
              </div>
                <div class="widget-type horizontal col-4">
                <span>Horizontal line widget</span>
                <div @click="handletWidgetSelect($event,'horizontal_widget')">
                  <img src="/images/widgets/horizontal.svg" alt="horizontal-widget">
                </div>
              </div>
            </div>
          </div>
           <div class="create colors">
            <div class="head">
              <div>
                <span>3</span>
                <h3>Appearance</h3>
              </div>
              <button class="btn">Edit</button>
            </div>
            <div class="body">
              <h4>Colors</h4>
              <div class="row mt-4 justify-content-between flex-wrap">
                <b-form-group label="Primary" class="col-4">
                <div class="color-picker" @click="openColorPicker($event)">
                  {{ createWidgetForm.primary_color }}
                  <input type="color" v-model="createWidgetForm.primary_color" />
                </div>
              </b-form-group>
              <b-form-group label="Result background" class="col-4">
                <div class="color-picker" @click="openColorPicker($event)">
                  {{ createWidgetForm.result_background_color }}
                  <input type="color" v-model="createWidgetForm.result_background_color" />
                </div>
              </b-form-group>
              <b-form-group label="Result background" class="col-4">
                <div class="color-picker" @click="openColorPicker($event)">
                  {{ createWidgetForm.search_form_background_color }}
                  <input type="color" v-model="createWidgetForm.search_form_background_color" />
                </div>
              </b-form-group>
              <b-form-group label="Result background" class="col-4">
                <div class="color-picker" @click="openColorPicker($event)">
                  {{ createWidgetForm.search_form_text_color }}
                  <input type="color" v-model="createWidgetForm.search_form_text_color" />
                </div>
              </b-form-group>
              <b-form-group label="Result background" class="col-4">
                <div class="color-picker" @click="openColorPicker($event)">
                  {{ createWidgetForm.search_form_secondary_text_color }}
                  <input type="color" v-model="createWidgetForm.search_form_secondary_text_color" />
                </div>
              </b-form-group>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      createWidgetForm: {
        type: '',
        screen_size_width: 400,
        primary_color: '',
        result_background_color: '',
        search_form_background_color: '',
        search_form_text_color: '',
        search_form_secondary_text_color: ''
      }
    }
  },
  methods: {
    handletWidgetSelect(e,type) {
      document.querySelectorAll('.widget-type > div').forEach(item => {
        item.classList.remove('selected')
      })
      e.target.parentElement.classList.add('selected')
      this.createWidgetForm.type = type
    },
    openColorPicker(event) {
      event.target.children[0].showPicker()
    },
    handleWidgetCreate() {
      this.$store.dispatch('widgets/createWidget',this.createWidgetForm)
    },
    prepareFrame() {
        var iframe = document.createElement("iframe");
        iframe.setAttribute("src", `http://localhost:3000/widgets?type=${this.createWidgetForm.type}&bg_color=${this.createWidgetForm.result_background_color}`);
        iframe.setAttribute("width", '400px');
        iframe.setAttribute("height", '400px');
        iframe.setAttribute("frameborder", '0');
        console.log(iframe);
    },
  },
}
</script>

<style>

</style>