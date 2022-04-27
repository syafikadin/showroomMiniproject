<template>
    <v-row>
        <v-col v-for="mobil in 4" :key="mobil">
            <v-card
            :loading="loading"
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

            <v-card-title>Gallardo</v-card-title>

            <v-card-text>

                <div class="mb-4 text-subtitle-1">
                    100.000 $
                </div>

                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste ut accusamus assumenda iure sequi, aperiam inventore quia saepe dolorum dolorem laboriosam tempore, voluptatibus consectetur expedita ea officia? Ut, dicta nisi.</div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <!-- <v-card-title>Availability</v-card-title> -->

            <v-card-text>
                <v-chip>Tersedia</v-chip>
            </v-card-text>

            <v-card-actions>
                <v-btn
                color="deep-green lighten-2"
                text
                @click="reserve"
                >
                Reserve
                </v-btn>
            </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'indexPage'
}
</script>

<style>

</style>