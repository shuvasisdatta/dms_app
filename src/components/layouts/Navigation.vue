<template>
  <!-- Sidebar Menu -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">App</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#"
              >Home <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item">
            <router-link to="/dashboard" class="nav-link">
              <i class="nav-icon fas fa-tachometer-alt teal"></i>
              Dashboard
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/roles" class="nav-link">
              <i class="nav-icon fas fa-tachometer-alt teal"></i>
              Role
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/users" class="nav-link">
              <i class="nav-icon fas fa-tachometer-alt teal"></i>
              Users
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/departments" class="nav-link">
              <i class="nav-icon fas fa-tachometer-alt teal"></i>
              Departments
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/plants" class="nav-link">
              <i class="nav-icon fas fa-tachometer-alt teal"></i>
              Plants
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/equipments" class="nav-link">
              <i class="nav-icon fas fa-tachometer-alt teal"></i>
              Equipments
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/categories" class="nav-link">
              <i class="nav-icon fas fa-tachometer-alt teal"></i>
              Categories
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/lockers" class="nav-link">
              <i class="nav-icon fas fa-tachometer-alt teal"></i>
              Lockers
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/documents" class="nav-link">
              <i class="nav-icon fas fa-tachometer-alt teal"></i>
              Documents
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link">
              <i class="nav-icon fas fa-tachometer-alt teal"></i>
              Login
            </router-link>
          </li>
        </ul>
        <!-- <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form> -->
      </div>
    </div>
  </nav>

  <!-- <nav class="mt-2">
    <ul
      class="nav nav-pills nav-sidebar flex-column"
      data-widget="treeview"
      role="menu"
      data-accordion="false"
    >

      <li class="nav-item" v-if="isAuthenticated && userRole === 'Admin'">
        <router-link to="/dashboard" class="nav-link">
          <i class="nav-icon fas fa-tachometer-alt teal"></i>
          <p>
            Dashboard
          </p>
        </router-link>
      </li>
      <li class="nav-item" v-if="isAuthenticated && userRole === 'Admin'">
        <router-link to="/roles" class="nav-link">
          <i class="nav-icon fas fa-circle indigo"></i>
          <p>
            Roles
          </p>
        </router-link>
      </li>
      <li class="nav-item" v-if="isAuthenticated && userRole === 'Admin'">
        <router-link to="/users" class="nav-link">
          <i class="nav-icon fas fa-users-cog blue"></i>
          <p>
            Users
          </p>
        </router-link>
      </li>
      <li class="nav-item" v-if="isAuthenticated && userRole === 'Admin'">
        <router-link to="/departments" class="nav-link">
          <i class="nav-icon fas fa-th orange"></i>
          <p>
            Departments
          </p>
        </router-link>
      </li>
      <li class="nav-item" v-if="isAuthenticated && userRole === 'Admin'">
        <router-link to="/plants" class="nav-link">
          <i class="nav-icon fas fa-th orange"></i>
          <p>
            Plants
          </p>
        </router-link>
      </li>
      <li class="nav-item" v-if="isAuthenticated && userRole === 'Admin'">
        <router-link to="/equipments" class="nav-link">
          <i class="nav-icon fas fa-th orange"></i>
          <p>
            Equipments
          </p>
        </router-link>
      </li>
      <li class="nav-item" v-if="isAuthenticated && userRole === 'Admin'">
        <router-link to="/categories" class="nav-link">
          <i class="nav-icon fas fa-th purple"></i>
          <p>
            Categories
          </p>
        </router-link>
      </li>
      <li class="nav-item" v-if="isAuthenticated && userRole === 'Admin'">
        <router-link to="/lockers" class="nav-link">
          <i class="nav-icon fas fa-th green"></i>
          <p>
            Lockers
          </p>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/documents" class="nav-link">
          <i class="nav-icon fas fa-th teal"></i>
          <p>
            Documents
          </p>
        </router-link>
      </li>
      <li class="nav-item" v-if="!isAuthenticated">
        <router-link to="/login" class="nav-link">
          <i class="nav-icon fas fa-tools orange"></i>
          <p>
            Login
          </p>
        </router-link>
      </li>
      <li class="nav-item" v-else></li>
    </ul>
  </nav> -->
  <!-- /.sidebar-menu -->
</template>

<script></script>
