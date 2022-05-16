<template>
    <v-row>
        <v-col>
            <h1>Detail Mobil</h1>
            <v-btn
            to="/"
            class="mt-4"
            >
                Kembali
            </v-btn>
            <v-simple-table dark class="mt-5">
                <template v-slot:default>
                <!-- <thead>
                    <tr>
                    <th class="text-left">
                        Name
                    </th>
                    </tr>
                </thead> -->
                <tbody>
                    <tr>
                        <td class="text-center" colspan="2"><img :src="mobil[indexNumber].gambar" alt="Mobil" width="600"></td>
                    </tr>
                    <tr>
                        <td>ID Mobil</td>
                        <td>{{ mobil[indexNumber].id_mobil }}</td>
                    </tr>
                    <tr>
                        <td>Nama Mobil</td>
                        <td>{{ mobil[indexNumber].nama_mobil }}</td>
                    </tr>
                    <tr>
                        <td>Warna</td>
                        <td>{{ mobil[indexNumber].warna }}</td>
                    </tr>
                    <tr>
                        <td>Harga Beli</td>
                        <td>Rp. {{ mobil[indexNumber].harga_beli }}</td>
                    </tr>
                    <tr>
                        <td>Harga Jual</td>
                        <td>Rp. {{ mobil[indexNumber].harga_jual }}</td>
                    </tr>
                    <tr>
                        <td>Tahun</td>
                        <td>{{ mobil[indexNumber].tahun }}</td>
                    </tr>
                    <tr>
                        <td>Bahan Bakar</td>
                        <td>{{ mobil[indexNumber].bahan_bakar }}</td>
                    </tr>
                    <tr>
                        <td>Status</td>
                        <td>{{ mobil[indexNumber].status ? 'Terjual' : 'Tersedia' }}</td>
                    </tr>
                </tbody>
                </template>
            </v-simple-table>
            <v-btn class="mt-6"
            to="/formTransaksi"
            >Beli Sekarang

            </v-btn>
        </v-col>
    </v-row>

</template>

<script>

import gql from 'graphql-tag'

export default {

    computed: {
        indexNumber() {
            return this.$route.params.detailMobil.slice(11)
        }
    },

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

</style>