<template>
  <v-container>
    <v-row>
      <h1 class="mx-auto">Daftar Mobil</h1>
    </v-row>

    <v-row>
      <v-col>
        <h2>Tambah Mobil</h2>
        <Router-Link to="/tambahMobil">
          <v-btn class="mt-4">
            <v-icon class="">mdi-plus-circle-outline</v-icon>
          </v-btn>
        </Router-Link>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-simple-table dark class="mt-6">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-center">
                  ID
                </th>
                <th class="text-center">
                  Gambar
                </th>
                <th class="text-center">
                  Nama Mobil
                </th>
                <th class="text-center">
                  Warna
                </th>
                <th class="text-center">
                  Harga Beli
                </th>
                <th class="text-center">
                  Harga Jual
                </th>
                <th class="text-center">
                  Status
                </th>
                <th class="text-center">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody class="text-center">
              <tr v-if="$apollo.loading">Loading ...</tr>
              <tr
                v-for="item in mobil" :key="item.id_mobil"
              >
                <td>{{ item.id_mobil }}</td>
                <!-- String literal -->
                <!-- <td><img :src="require(`~/assets/img/${item.gambar}.jpg`)" /></td> -->
                <td><img src="../assets/img/avanza001.png" alt=""></td>
                <td>{{ item.nama_mobil }}</td>
                <td>{{ item.warna }}</td>
                <td>Rp. {{ item.harga_beli }}</td>
                <td>Rp. {{ item.harga_jual }}</td>
                <td>{{ item.status ? 'Terjual' : 'Tersedia' }}</td>
                <td>
                  <v-icon
                    medium
                    class="mr-2"
                    @click="editItem(item)"
                  >
                    mdi-pencil
                  </v-icon>
                  <v-icon
                    medium
                    @click="deleteMobil(item.id_mobil)"
                  >
                    mdi-delete
                  </v-icon>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import gql from 'graphql-tag'

export default {
  data() {
    return {

    }
  },

  apollo: {

    mobil: {
      query(){
        return gql`
          query MyQuery {
            mobil {
              warna
              tahun
              status
              nama_mobil
              id_mobil
              harga_jual
              harga_beli
              gambar
              bahan_bakar
            }
          }
        `
      }
    }
  },

  methods: {
    deleteMobil(inputId){
      confirm('Apakah Anda Akan Menghapus Data Ini?')
      this.$apollo.mutate({
          mutation: gql`
              mutation MyMutation($id: Int) {
                  delete_mobil(where: {id_mobil: {_eq: $id}}) {
                      returning {
                      bahan_bakar
                      gambar
                      harga_beli
                      harga_jual
                      id_mobil
                      nama_mobil
                      status
                      tahun
                      warna
                      }
                  }
              }
          `,
          variables: {
              id: inputId
          }
      })
    }

  }


}
</script>

<style>
  img{
    width: 150px;
    justify-content: center;
  }
</style>