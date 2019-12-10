<template>
  <div></div>
</template>
<script>
import { getAllRecord } from "../api/RecordAPI.js";
export default {
  name: "record",
  data() {
    return {
      sizeProduct: 0,
      pageNumber: 0
    };
  },
  methods: {
    getAllRecordProduct() {
      getAllRecord()
        .then(response => {
          response.map((record, index) => {
            if (record.name === "product") {
              this.sizeProduct = record.number;
              this.pageNumber = Math.round(record.number / 9);
            }
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
