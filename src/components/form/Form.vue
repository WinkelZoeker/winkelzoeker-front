<template>
  <div>
    <form v-if="!isSubmitted" @submit.prevent="submit" novalidate>

      <div class="form-group">
        <label for="latitude">{{ $t('form.latitude') }}</label>
        <input type="text" v-model="number" class="form-control" id="latitude" v-model.lazy.trim="form.latitude" @blur="onFieldBlur('latitude')" v-bind:class="getFieldClasses('latitude')">
        <div v-if="isErrorField('latitude')" class="invalid-feedback">{{ $t('error.fieldInvalid', { field: $t('form.latitude') }) }}</div>
      </div>
      <div class="form-group">
        <label for="longitude">{{ $t('form.longitude') }}</label>
        <input type="text" v-model="number" class="form-control" id="longitude" v-model.lazy.trim="form.longitude" @blur="onFieldBlur('longitude')" v-bind:class="getFieldClasses('longitude')">
        <div v-if="isErrorField('longitude')" class="invalid-feedback">{{ $t('error.fieldInvalid', { field: $t('form.longitude') }) }}</div>
      </div>
      <div class="form-group">
        <label for="limit">{{ $t('form.limit') }}</label>
        <input type="text" v-model="number" class="form-control" id="limit" v-model.lazy.trim="form.limit" @blur="onFieldBlur('limit')" v-bind:class="getFieldClasses('limit')">
        <div v-if="isErrorField('limit')" class="invalid-feedback">{{ $t('error.fieldInvalid', { field: $t('form.limit') }) }}</div>
      </div>
      <div class="alert alert-danger" v-if="isError">
        <p class="mb-0">
          <strong>{{ $t(errorHeader) }}</strong>
        </p>
        <ul class="mb-0 pl-3" v-if="errors.length > 0">
          <li v-for="error in errors" v-bind:key="error.field">
            <span v-if="error.field">{{ $t('form.'+error.field) }}<span v-if="error.message">: {{ $t(error.message) }}</span></span>
            <span v-else-if="error.message">{{ $t(error.message) }}</span>
          </li>
        </ul>
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary" :disabled="submitting">
          <span v-if="submitting">{{ $t('form.submitting' ) }} <img src="../../assets/loader.svg" /></span>
          <span v-else>{{ $t('form.submit' ) }}</span>
        </button>
      </div>
    </form>
    <div v-else>
      <div class="alert alert-success">
        <strong>{{ $t('form.submitted' ) }}</strong>
      </div>
      <div class="alert alert-info">
        <p><strong>{{ $t('form.sentInfo' ) }}</strong></p>
        <pre>
            {{form}}
        </pre>
      </div>
      <p class="text-center">
        <a href="#" class="btn btn-secondary" @click.prevent="reload()">{{ $t('form.return' ) }}</a>
      </p>
    </div>
  </div>
</template>

<script src="./Form.js"></script>
<style src="./Form.scss" lang="scss" scoped></style>
