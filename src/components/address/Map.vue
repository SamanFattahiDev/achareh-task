<template>
  <div class="relative">
    <button type="button" @click="getUserLocation"  class="bg-white z-50 p-3 rounded-full shadow absolute bottom-3 right-3">
      <LocationIcon></LocationIcon>
    </button>
  <div id="map" class="col-span-12 z-10"></div>
  </div>
</template>
<script>


import marker from '/src/assets/image/marker-icon.png'
import retinaMarker from '/src/assets/image/marker-icon-2x.png'
import shadow from '/src/assets/image/marker-shadow.png'
import LocationIcon from "@/components/icons/LocationIcon.vue";
export default {
  components: {LocationIcon},
  emits: ["getGeoLocation"],
  props: {
    defaultViewGeoLoc: {
      type: Array,
      required: false,
    },
    defaultMarkerGeoLoc: {
      type: Array,
      required: false,
    },
  },
  watch: {
    defaultViewGeoLoc: {
      handler(val) {
        if (val && val.length > 0) {
          this.map.setView(val, 11);
        }
      },
    },
  },
  async mounted() {
    if (this.map) {
      this.map.remove()
      this.map = null
    } else {
      this.map = L.map("map").setView([35.751128, 51.418679], 14);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        // attribution: "© OpenStreetMap",
      }).addTo(this.map);
      // Leaflet has a known issue with wrong marker address
      // This section is their own provided solution for fixing this issue
      // Please don't touch it or marker won't be shown on the map
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: retinaMarker,
        iconUrl: marker,
        shadowUrl: shadow,
      });
      // Solution ends here
      if (this.defaultMarkerGeoLoc) {
        this.map.setView(this.defaultMarkerGeoLoc, 14);
        this.marker = L.marker(this.defaultMarkerGeoLoc);
        this.marker.addTo(this.map);
      }
      this.map.on("click", this.handleMapClick);
    }

  },
  data() {
    return {
      map: null,
      marker: null,
      latitude: null,
      longitude: null,
    };
  },
  methods: {
    async getUserLocation(){
    const permissions =   await  navigator.permissions.query({name:'geolocation'})
      if(permissions.state ==='prompt'){
      navigator.geolocation.getCurrentPosition((position) => {
          console.log(position,1111)
          let lat = position.coords.latitude;
          let long = position.coords.longitude;
        });
      }else if(permissions.state ==='denied'){
      }

    },
    async handleMapClick(event) {
      this.latitude = event.latlng.lat;
      this.longitude = event.latlng.lng;
      if (!this.marker) {
        // Check if a marker already exists
        // If not, create a new one
        this.marker = L.marker([event.latlng.lat, event.latlng.lng]);
        this.marker.addTo(this.map);
      } else {
        // If a marker already exists, remove it first,
        // Then add new marker
        await this.marker.removeFrom(this.map);
        this.marker = L.marker([event.latlng.lat, event.latlng.lng]);
        this.marker.addTo(this.map);
      }
      this.$emit("getGeoLocation", this.latitude, this.longitude);
    },
  },
};
</script>
<style>
#map {
  height: 600px !important;
}
.leaflet-control-attribution{
  display: none!important;
}

</style>
