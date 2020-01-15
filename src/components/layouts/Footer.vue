<template>
  <footer class="container-fluid mt-5">
    <div class="row">
      <div class="col-4">
        <p class="float-left">{{ app_maintainer }}</p>
      </div>
      <div class="col-4 text-center">
        <p>Copyright &copy; 2019 {{ app_title }}</p>
      </div>
      <div class="col-4">
        <p class="float-right">{{ app_version }}</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: ["app_maintainer", "app_title", "app_version"]
};
</script>
