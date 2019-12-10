<template>
  <div class="col-12 mt-3">
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center" v-if="RecordNumber>1">
        <li :class="['page-item', {'disabled': currentPage <= 1}]">
          <template v-if="currentPage <= 1">
            <span class="page-link">Previous</span>
          </template>
          <template v-else>
            <span class="page-link" @click.prevent="updateControl(2,currentPage)">Previous</span>
          </template>
        </li>
        <li
          :class="['page-item',{'active':currentPage=== page}]"
          v-for="(page, index) in RecordNumber"
          :key="index+Math.random()"
        >
          <a class="page-link" @click.prevent="updateCurrentPage(page)" href="#">{{page}}</a>
        </li>
        <li :class="['page-item', {'disabled': currentPage == RecordNumber}]">
          <template v-if="currentPage === RecordNumber">
            <span class="page-link">Next</span>
          </template>
          <template v-else>
            <a class="page-link" href="#" @click.prevent="updateControl(1,currentPage)">Next</a>
          </template>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name: "pagination",
  props: {
    currentPage: {
      require: true,
      type: Number
    },
    RecordNumber: {
      require: false,
      type: Number
    }
  },
  computed: {},
  data() {
    return {
    };
  },
  methods: {
    updateCurrentPage(page) {
      this.$emit("update:currentPage", page);
    },
    updateControl(type, currentPage) {
      if (type === 1 && currentPage < this.RecordNumber) {
        this.currentPage = currentPage++;
        this.$emit("update:currentPage", currentPage++);
      }
      if (type === 2 && currentPage > 1) {
        this.currentPage = currentPage--;
        this.$emit("update:currentPage", currentPage--);
      }
    }
  }
};
</script>
