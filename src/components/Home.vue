<template>
  <my-table :ttdd='tableData' :name="name" @update="handleUpdate"></my-table>
</template>

<script>
  import MyTable from '@/components/MyTable'
  export default {
      name: 'Home',
      data() {  
          return {
              tableData: [{
                  date: '2017-10-09',
                  name: 'liuyu'
              },
              {
                  date: '2015-08-12',
                  name: 'zhangsan'
              }],
              name: 'liulei'
          }
      },
      components: {
          MyTable
      },
      methods: {
          handleUpdate: function (newData) {
              this.tableData=newData;
          }
      }
  }
</script>