<template>
  <div class="company edit">
    <PageHeader title="My company" show-actions>
      <template #actions>
        <button class="btn edit" @click="$router.push('/company/edit')">
          <Icon name="edit-2" />
          Edit
        </button>
      </template>
    </PageHeader>
    <div class="container">
      <div class="company-edit_inner white-panel">
        <div class="row company-details flex-column">
         <h2>Company details</h2>
          <div class="col-12  d-flex align-items-center flex-wrap justify-content-between">
            <b-form-group label="Type">
              <FormField></FormField>
            </b-form-group>
            <b-form-group label="Legal name">
              <FormField></FormField>
            </b-form-group>
            <b-form-group label="Account manager">
              <FormField></FormField>
            </b-form-group>
          </div>
           <div class="col-12 mt-4 d-flex align-items-center flex-wrap justify-content-between">
              <b-form-group label="Vat ID">
              <FormField></FormField>
            </b-form-group>
             <b-form-group label="Tax ID">
              <FormField></FormField>
            </b-form-group>
            <b-form-group label="Website">
              <FormField></FormField>
            </b-form-group>
            </div>
        </div>
         <div class="row legal-details">
          <h2>Legal</h2>
          <div class="col-12 mt-4 d-flex align-items-center flex-wrap justify-content-between">
              <b-form-group label="Vat ID">
              <FormField></FormField>
            </b-form-group>
             <b-form-group label="Tax ID">
              <FormField></FormField>
            </b-form-group>
            <b-form-group label="Website">
              <FormField></FormField>
            </b-form-group>
            </div>
           <div class="col-12  mt-4 d-flex align-items-center flex-wrap justify-content-between">
              <b-form-group label="Vat ID">
              <FormField></FormField>
            </b-form-group>
             <b-form-group label="Tax ID">
              <FormField></FormField>
            </b-form-group>
            <b-form-group label="Website">
              <FormField></FormField>
            </b-form-group>
            </div>
        </div>
          <button class="btn btn-greenland">Save changes</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style>

</style>