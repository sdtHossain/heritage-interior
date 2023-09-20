<script setup lang="ts">
import SectionTitle from './SectionTitle.vue'
</script>
<template>
  <div class="container">
    <SectionTitle
      class="text-center"
      title-text="WOODMART COLLECTIONS"
      title-color="primary"
      slogan="FEATURED CATEGORIES"
    />
    <!-- <div style="height: 600px">
      <div class="row h-100">
        <div class="col-lg-6">
          <img
            :src="`src/assets/images/product/product_1.jpeg`"
            class="card-img-top object-fit-cover h-100"
            alt=""
          />
        </div>
        <div class="col-lg-6">
          <div class="row h-50">
            <div class="col-lg-6">
              <img
                :src="`src/assets/images/product/product_1.jpeg`"
                class="card-img-top object-fit-cover h-100"
                alt=""
              />
            </div>
            <div class="col-lg-6">
              <img
                :src="`src/assets/images/product/product_1.jpeg`"
                class="card-img-top object-fit-cover h-100"
                alt=""
              />
            </div>
          </div>
          <div class="row h-50 mt-6">
            <div class="col-lg-6">
              <img
                :src="`src/assets/images/product/product_1.jpeg`"
                class="card-img-top object-fit-cover h-100"
                alt=""
              />
            </div>
            <div class="col-lg-6">
              <img
                :src="`src/assets/images/product/product_1.jpeg`"
                class="card-img-top object-fit-cover h-100"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <div class="grid-wrapper">
      <div class="wide tall">
        <img src="@/assets/images/best_selling/product_1.jpeg" alt="" />
      </div>
      <div>
        <img src="@/assets/images/best_selling/product_2.jpeg" alt="" />
      </div>
      <div>
        <img src="@/assets/images/best_selling/product_3.jpeg" alt="" />
      </div>
      <div>
        <img src="@/assets/images/best_selling/product_4.jpeg" alt="" />
      </div>
      <div>
        <img src="@/assets/images/best_selling/product_5.jpeg" alt="" />
      </div>
      <!-- <div class="tall">
        <img
          src="https://images.unsplash.com/photo-1588499756884-d72584d84df5?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2134&amp;q=80"
          alt=""
        />
      </div> -->
      <!-- <div class="big">
        <img
          src="https://images.unsplash.com/photo-1588492885706-b8917f06df77?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1951&amp;q=80"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1588247866001-68fa8c438dd7?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=564&amp;q=80"
          alt=""
        />
      </div>
      <div class="wide">
        <img
          src="https://images.unsplash.com/photo-1586521995568-39abaa0c2311?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"
          alt=""
        />
      </div>
      <div class="big">
        <img
          src="https://images.unsplash.com/photo-1572914857229-37bf6ee8101c?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1951&amp;q=80"
          alt=""
        />
      </div>
      <div class="tall">
        <img
          src="https://images.unsplash.com/photo-1588453862014-cd1a9ad06a12?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1588414734732-660b07304ddb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=675&amp;q=80"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1588224575346-501f5880ef29?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=700&amp;q=80"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1574798834926-b39501d8eda2?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1547234935-80c7145ec969?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1353&amp;q=80"
          alt=""
        />
      </div>
      <div class="wide">
        <img
          src="https://images.unsplash.com/photo-1588263823647-ce3546d42bfe?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=675&amp;q=80"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1587732608058-5ccfedd3ea63?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1587897773780-fe72528d5081?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1489&amp;q=80"
          alt=""
        />
      </div>
      <div class="wide">
        <img
          src="https://images.unsplash.com/photo-1588083949404-c4f1ed1323b3?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1489&amp;q=80"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1587572236558-a3751c6d42c0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"
          alt=""
        />
      </div>
      <div class="wide">
        <img
          src="https://images.unsplash.com/photo-1583542225715-473a32c9b0ef?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"
          alt=""
        />
      </div>
      <div class="big">
        <img
          src="https://images.unsplash.com/photo-1527928159272-7d012024eb74?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1553984840-b8cbc34f5215?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1433446787703-42d5bf446876?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1351&amp;q=80"
          alt=""
        />
      </div>
      <div class="big">
        <img
          src="https://images.unsplash.com/photo-1541187714594-731deadcd16a?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=700&amp;q=80"
          alt=""
        />
      </div>
      <div class="tall">
        <img
          src="https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1421930866250-aa0594cea05c?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1355&amp;q=80"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1493306454986-c8877a09cbeb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1381&amp;q=80"
          alt=""
        />
      </div>
      <div class="wide">
        <img
          src="https://images.unsplash.com/photo-1536466528142-f752ae7bdd0c?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"
          alt=""
        />
      </div> -->
    </div>
  </div>
</template>
<style scoped>
.grid-wrapper > div {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.grid-wrapper > div:hover img {
  transform: scale(1.1);
}
.grid-wrapper > div > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
  transition: all 0.3s ease;
  transform: scale(1);
}

.grid-wrapper {
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 280px;
  grid-auto-flow: dense;
}
.grid-wrapper .wide {
  grid-column: span 2;
}
.grid-wrapper .tall {
  grid-row: span 2;
}
.grid-wrapper .big {
  grid-column: span 2;
  grid-row: span 2;
}
</style>
