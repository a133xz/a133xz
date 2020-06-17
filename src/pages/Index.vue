<template>
  <Layout>
    <main>
      <h2>In three seconds</h2>
      <p>Hola, I build things for the web.</p>
      <p>
        I care about front-end architecture, scalability, Vuejs and Open Source. Along the way, I’ve
        jumped from Spain to Edinburgh to London.
      </p>
      <!-- Sometimes I write articles in <span class="link">Dev.to.</span> -->
      <p>To collaborate: fosjdfljdslkf@uxing.world (it's real ✍️)</p>
      <a class="font-sm" href="https://github.com/a133xz" rel="noopener noreferrer" target="_blank"
        >Visit my Github</a
      >
      <section>
        <header>
          <h2>Side projects</h2>
        </header>
        <aside v-for="(sideProject, index) in sideProjects" :key="index">
          <h3>{{ sideProject.title }}</h3>
          <p>{{ sideProject.description }}</p>
          <a class="font-sm" :href="sideProject.link" rel="noopener noreferrer" target="_blank"
            >Visit the site</a
          >
        </aside>
      </section>
      <hr class="hr" />
      <section>
        <p>
          I’ve helped out these A+ companies:
        </p>
        <ul v-for="(site, index) in sites" :key="index">
          <li>
            <a :href="site.link" rel="noopener noreferrer" target="_blank">{{ site.name }}</a>
          </li>
        </ul>
      </section>
    </main>
  </Layout>
</template>

<script>
export default {
  name: "About",
  metaInfo: {
    bodyAttrs: {
      style: "background-color: var(--brand-black); color: var(--brand-white);",
    },
  },
  data: function() {
    return {
      sideProjects: [
        {
          title: "omgCOVID",
          description:
            "[Alive project] A surreal record of the world in limbo due to COVID-19. It’s made of the strange and the unparalleled. It’s an archive of this significant time, and a reminder of our collective pause. ",
          link: "https://omgcovid.com/",
        },
        {
          title: "Interaction design experiments",
          description:
            "[Alive collab] I work with multidisciplinary artist, Carlos Orti, on critical designs that explore relationships to AI, and social awareness towards big data. This includes doing code on The Ultra Human.",
          link: "https://www.ortiroig.com/the-ultra-human",
        },
        {
          title: "Red Kitchen Magazine",
          description:
            "[Dead project, but alive website] A digital hub for art, literature and all things pop culture. With 40+ contributors and 200+ articles, the project ended with a small, beautiful festival in Madrid.",
          link: "https://www.facebook.com/redkitchenmagazine",
        },
      ],
      sites: [
        {
          name: "Dialexy",
          link: "https://www.dialexy.com/",
        },
        {
          name: "Bad Seed Creatives",
          link: "https://www.badseedcreative.com/",
        },
        {
          name: "Uxing",
          link: "https://uxing.world/",
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
::selection {
  background: var(--brand-blue);
}
section > header {
  margin-top: var(--spacer);
}
aside {
  margin-bottom: var(--spacer-md);
}
a {
  display: inline-block;
  color: var(--brand-white);
  &:hover {
    background-color: var(--brand-blue);
  }
}
.link {
  display: inline-block;
  border-bottom: 1px solid var(--brand-white);
}
</style>
