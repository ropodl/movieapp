<template>
  <div style="position:sticky;top:0px;z-index:9;">
    <v-app-bar
      height="70"
      absolute
      elevate-on-scroll
      style="backdrop-filter: blur(6px);background:linear-gradient(90deg,rgba(30,30,30,1),rgba(30,30,30,0));"
    >
      <!-- color="rgba(18,18,18,0.7)" -->
      <v-container>
        <v-row class="d-flex align-center">
          <v-btn
            elevation="0"
            :ripple="false"
            class="rounded-0 logo"
            height="70"
            color="transparent"
            to="/"
            >MY MOVIE APP</v-btn
          >
          <v-spacer></v-spacer>
          <v-tabs
            height="70"
            dark
            right
            class="hidden-sm-and-down"
            color="error"
            background-color="transparent"
            style="width:unset !important;"
          >
            <v-tab
              v-for="(link, i) in links"
              :key="i"
              :to="link.route"
              :ripple="false"
              active-class="white--text"
              class="white--text"
              text
            >
              <!-- <v-icon left>{{ link.icon }}</v-icon> -->
              {{ link.name }}
            </v-tab>
          </v-tabs>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-divider></v-divider>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchModal: "",
      offsetTop: 0,
      links: [
        {
          name: "Movie",
          route: "/",
        },
        {
          name: "TV Show",
          route: "/tv-show",
        },
      ],
      // Search
      isLoading: false,
      items: "",
      search: "",
      select: "",
      query: [],
      result: [],
    };
  },
  methods: {
    // querySelections(v) {
    //   this.loading = true;
    //   // Simulated ajax query
    //   // this.items =
    //   var result = this.$http
    //     .get("/search/multi", {
    //       params: {
    //         query: this.search,
    //       },
    //     })
    //     .then((res) => {
    //       console.log(res.results.title);
    //       this.result = res.results.title;
    //     })
    //     .catch((error) => {
    //       "Search error" + error;
    //     });
    //   this.items = result.filter((e) => {
    //     return (e || "").toLowerCase().indexOf((v || "").toLowerCase()) > -1;
    //   });
    // setTimeout(() => {
    //   this.items = this.states.filter((e) => {
    //     return (e || "").toLowerCase().indexOf((v || "").toLowerCase()) > -1;
    //   });
    //   this.loading = false;
    // }, 500);
    // },
  },
  watch: {
    search(val) {
      // Items have already been loaded
      if (this.items.length > 0) return;

      this.isLoading = true;

      // Lazily load input items
      fetch(
        "https://api.themoviedb.org/3/search/multi?api_key=386a231dcbaf190d09142d84a5bf8fe5&language=en-US&page=1&include_adult=false&query=" +
          val
      )
        .then((res) => res.clone().json())
        .then((res) => {
          this.items = res.data.results;
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => (this.isLoading = false));
    },
  },
};
</script>

<style lang="scss">
.v-btn.logo {
  &::before {
    background-color: transparent !important;
  }
}
</style>
