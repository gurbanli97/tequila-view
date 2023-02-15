<template>
  <div class="company">
    <PageHeader title="My company" show-actions>
      <template #actions>
        <button class="btn edit" @click="$router.push('/company/edit')">
          <Icon name="edit-2" />
          Edit
        </button>
      </template>
    </PageHeader>
    <div class="container">
      <div class="company-inner white-panel">
        <div class="row company-details flex-column">
         <h2>Company details</h2>
          <div class="col-8 p-0 d-flex align-items-center flex-wrap justify-content-between">
             <DetailField label="Legal name:">
              <strong>Trawell Group</strong>
            </DetailField>
            <DetailField label="Legal name:">
              <strong>Trawell Group</strong>
            </DetailField>
            <DetailField label="Account manager:">
              <strong>Trawell Group</strong>
            </DetailField>
          </div>
           <div class="col-8 p-0 mt-4 d-flex align-items-center flex-wrap justify-content-between">
              <DetailField label="Account manager:">
                <strong>Trawell Group</strong>
              </DetailField>
              <DetailField label="Account manager:">
                <strong>Trawell Group</strong>
              </DetailField>
              <DetailField label="Account manager:">
                <strong>Trawell Group</strong>
              </DetailField>
            </div>
        </div>
         <div class="row legal-details">
          <div class="col-8 p-0 d-flex align-items-center flex-wrap justify-content-between">
            <DetailField label="Type:">
              <strong>Company</strong>
            </DetailField>
            <DetailField label="Legal name:">
              <strong>Trawell Group</strong>
            </DetailField>
            <DetailField label="Account manager:">
              <strong>Trawell Group</strong>
            </DetailField>
          </div>
           <div class="col-8 p-0 mt-4 d-flex align-items-center flex-wrap justify-content-between">
              <DetailField label="Account manager:">
                <strong>Trawell Group</strong>
              </DetailField>
              <DetailField label="Account manager:">
                <strong>Trawell Group</strong>
              </DetailField>
              <DetailField label="Account manager:">
                <strong>Trawell Group</strong>
              </DetailField>
            </div>
        </div>
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