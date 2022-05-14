<template>
    <v-row>
        <v-col v-for="(item, index) in mobil" :key="item.id_mobil">
            <v-card
            class="mx-auto"
            max-width="500"
            >
            <template slot="progress">
                <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
                ></v-progress-linear>
            </template>

            <v-img
                height="250"
                src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/s-l1600-1595356071.jpg?crop=1.00xw:0.754xh;0,0.140xh&resize=1200:*"
            ></v-img>

            <v-card-title>{{ item.nama_mobil }}</v-card-title>

            <v-card-text>
                <div class="mb-4 text-subtitle-1">
                    Rp {{ item.harga_jual }}
                </div>

                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste ut accusamus assumenda iure sequi, aperiam inventore quia saepe dolorum dolorem laboriosam tempore, voluptatibus consectetur expedita ea officia? Ut, dicta nisi.</div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <!-- <v-card-title>Availability</v-card-title> -->

            <v-card-text>
                <v-chip label>{{ item.status ? 'Terjual' : 'Tersedia' }}</v-chip>
            </v-card-text>

            <v-card-actions>
                <router-link :to="'/detailMobil' + index">
                    <v-btn
                    v-if="item.status === false"
                    block
                    >
                        View Detail for Reserve
                    </v-btn>
                </router-link>
            </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import gql from 'graphql-tag'

export default {
    name: 'indexPage',    
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