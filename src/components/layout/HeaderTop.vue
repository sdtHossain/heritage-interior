<template>
  <div class="container-fluid py-4 border-bottom">
    <div class="row align-items-center">
      <div class="col-5">
        <form class="d-flex" role="search" action="">
          <button class="btn" type="submit">
            <i class="ri-search-2-line"></i>
          </button>
          <input
            class="form-control border-0 ps-0"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
      </div>
      <div class="col-2 text-center">
        <RouterLink to="#" class="link-body-emphasis text-decoration-none">
          <img src="@/assets/images/logo.png" alt="" />
        </RouterLink>
      </div>
      <div class="col-5">
        <div class="d-flex justify-content-end align-item-center">
          <RouterLink :to="{ name: 'home' }" class="nav-link pe-3">Register</RouterLink>
          <div class="nav-item dropdown">
            <div
              class="nav-link dropdown-toggle px-2"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="ri-heart-3-line"></i>
            </div>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
          <div class="nav-item dropdown">
            <div
              class="nav-link dropdown-toggle px-2"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="ri-shopping-bag-2-line"></i>
            </div>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
