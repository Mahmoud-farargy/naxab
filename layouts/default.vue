<template>
  <div>
    <!-- header -->
    <Header />
    <!-- body -->
    <main class="min-h-[calc(100vh-var(--min-height-header))]"> 
        <slot />
    </main>
    <!-- footer -->
    <Footer />
  </div>
</template>