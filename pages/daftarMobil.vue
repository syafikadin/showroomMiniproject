<template>
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
              <td><img src="../assets/imgCar/avanza001.png" alt=""></td>
              <td>{{ item.nama_mobil }}</td>
              <td>{{ item.warna }}</td>
              <td>Rp. {{ item.harga_beli }}</td>
              <td>Rp. {{ item.harga_jual }}</td>
              <td>{{ item.status ? 'Tersedia' : 'Terjual' }}</td>
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
                  @click="deleteItem(item)"
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


}
</script>

<style>
  img{
    width: 150px;
    justify-content: center;
  }
</style>