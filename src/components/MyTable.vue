<template>
  <div>
    <p>hello {{name}}</p>
    <p>{{ttdd[0].name}}</p>
    <el-table :data="nes" border current-row-key align="left" style="width: 50%">
        <el-table-column prop="neId" label="网元id" width="180"></el-table-column>
        <el-table-column prop="ip" label="ip" width="180"></el-table-column>
        <el-table-column label="操作">
           <template slot-scope="scope" width="180">
             <el-button size="mini" @click="handleEdit(scope.$index,scope.row)">
            编辑</el-button>
           </template>
        </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
      name: 'MyTable',
      data() {
          return {
              nes: [{
                  neId: '9-2',
                  ip: '8.54.18.20'
              },
              {
                  neId: '8-27',
                  ip: '192.168.143'
              }],
              user: {},
          }
      },
      props: ['ttdd','name'],
      methods: {
          handleEdit(index, row) {
              console.log("edit entry");
              //this.$emit('update', this.nes);
              this.$http.get('http://localhost:9005/ne').then(function(response) {
                  //this.nes=respose.body;
                  this.$message(response.body);
              }, function(err) {
                  this.$message('error');
              })
              .catch(function(err) {
                  this.$message('catch error' + err);
              })
          }
      }
    }
</script>